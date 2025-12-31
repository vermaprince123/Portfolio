import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Verma - Software Engineer | Portfolio",
  description:
    "Portfolio of Prince Verma, a Software Engineer specializing in React, Next.js, and modern web development. Explore my projects, skills, and experience.",
  keywords: [
    "Prince Verma",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Prince Verma" }],
  openGraph: {
    title: "Prince Verma - Software Engineer",
    description: "Portfolio of Prince Verma, a Software Engineer specializing in React and Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

