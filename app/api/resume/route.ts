import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    // Path to the resume file in the public directory
    const filePath = join(process.cwd(), "public", "resume.pdf");
    
    // Read the file
    const fileBuffer = await readFile(filePath);
    
    // Return the file with appropriate headers for download
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Prince_Verma_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    });
  } catch (error) {
    // If file doesn't exist, return a 404
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json(
        { error: "Resume file not found." },
        { status: 404 }
      );
    }
    
    // Handle other errors
    console.error("Error serving resume:", error);
    return NextResponse.json(
      { error: "Failed to serve resume file" },
      { status: 500 }
    );
  }
}
