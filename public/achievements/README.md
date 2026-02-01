# Achievements Images Directory

This directory contains images for certificates, courses, and books displayed in the Achievements section.

## Directory Structure

```
public/
  achievements/
    certificates/
      - algoexpert-frontend.jpg
      - algoexpert-systems-design.jpg
      - mosh-react-18.jpg
      - mosh-dsa-part3.jpg
      - codingninjas-oops-java.jpg
    courses/
      - spring-boot.jpg
      - nextjs-react.jpg
      - fullstack.jpg
    books/
      - clean-code.jpg
      - ydkjs.jpg
      - ddia.jpg
      - system-design-interview.jpg
      - pragmatic-programmer.jpg
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 
  - Certificates: 1200x800px or similar aspect ratio
  - Courses: 1200x800px or similar
  - Books: 800x1200px (portrait) or 1200x800px (landscape)
- **File Size**: Optimize images to keep file sizes reasonable (< 500KB recommended)

## Adding New Images

1. Place your image files in the appropriate subdirectory
2. Update the `image` path in `lib/data.ts` to match your filename
3. The images will automatically appear in the Achievements section

## Image Naming Convention

Use lowercase with hyphens, e.g.:
- `algoexpert-frontend.jpg`
- `mosh-react-18.jpg`
- `clean-code.jpg`
