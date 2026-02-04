# Resume File Setup

## Instructions

To enable the resume download feature, please follow these steps:

1. **Add your resume PDF file** to this `public` directory
2. **Name the file exactly**: `resume.pdf`
3. The file will be automatically served at `/api/resume` and accessible via `/resume` page

## File Requirements

- **Format**: PDF (`.pdf`)
- **Filename**: Must be `resume.pdf` (case-sensitive)
- **Location**: `/public/resume.pdf`

## Access URLs

- **Download Page**: `/resume` - User-friendly page with download button
- **Direct Download**: `/api/resume` - Direct API endpoint for download

## Notes

- The resume will be downloaded with the filename: `Prince_Verma_Resume.pdf`
- The file is cached for 1 hour for better performance
- Make sure the file size is reasonable (recommended: < 5MB)
