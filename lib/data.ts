// Portfolio data configuration

export const personalInfo = {
  name: "Prince Verma",
  title: "Software Engineer",
  subtitle: "Full Stack Developer | React & Java Specialist",
  location: "Faridabad, Haryana, India",
  email: "princevermasrcc@gmail.com",
  github: "https://github.com/vermaprince123",
  linkedin: "https://linkedin.com/in/prince-verma-edignite",
  twitter: "https://twitter.com/Princev21752448",
  website: "https://princetechportfolio.com/",
  bio: "Software Engineer with 3+ years of experience in JavaScript, ReactJS, Angular, and React Native at OneAssist Consumer Solutions. Passionate about building scalable web applications and innovative solutions.",
  about:
    "I'm a dedicated Software Engineer with over 4+ years of experience working at OneAssist Consumer Solutions, a product-based company. I specialize in building modern web applications using React, Java, JavaScript, Angular, and React Native. My expertise includes developing responsive, performant applications that deliver outstanding user experiences. I'm passionate about creating innovative solutions and always eager to learn new technologies.",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "React Native", level: 90 },
      { name: "Angular", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Data Structures", level: 88 },
      { name: "Algorithms", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Ishant Commerce Classes",
    description:
      "A modern, responsive Next.js website for Ishant Commerce Classes, a premier commerce coaching institute. Features include tutor profiles, subject pages, city-based centers, testimonials, and a comprehensive gallery showcasing the institute's impact.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/vermaprince123/ishant-commerce-classes",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Edignite",
    description:
      "A modern Next.js website for Edignite NGO, showcasing their mission, programs, events, and impact. Features include donation functionality, volunteer registration, photo gallery, and comprehensive information about NGO initiatives.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Web Development",
    ],
    githubUrl: "https://github.com/vermaprince123/edignite",
    liveUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript. Features include animated sections, project showcase, skills display, experience timeline, and contact form. Fully responsive with dark mode support.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/vermaprince123/Portfolio",
    liveUrl: "https://princetechportfolio.com/",
    featured: true,
  },
  {
    id: 4,
    title: "Algorithms Kit",
    description:
      "An NPM package for advanced data structures and algorithms. A comprehensive library providing efficient implementations of common algorithms and data structures for JavaScript developers.",
    technologies: ["JavaScript", "NPM", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/vermaprince123/algorithmskit",
    liveUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: "ColorPicker",
    description:
      "A powerful browser extension for developers and designers to quickly pick colors from any webpage. Features include color picker tool, hex/RGB/HSL conversion, color history, and easy copy-to-clipboard functionality.",
    technologies: [
      "JavaScript",
      "Chrome Extension",
      "Browser API",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/vermaprince123/ColorPicker",
    liveUrl: null,
    featured: true,
  },
  {
    id: 8,
    title: "Prince Nice Theme",
    description:
      "A beautiful and modern VS Code theme extension designed for comfortable coding. Features carefully selected color schemes optimized for readability, syntax highlighting, and reduced eye strain during long coding sessions.",
    technologies: ["JSON", "VS Code Theme", "Color Design", "Extension"],
    githubUrl: "https://github.com/vermaprince123/prince-nice-theme",
    liveUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: "DSA Projects",
    description:
      "A collection of Data Structures and Algorithms projects demonstrating various problem-solving techniques and implementations. Includes solutions to common coding challenges.",
    technologies: [
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
    githubUrl: "https://github.com/vermaprince123/dsa-projects",
    liveUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "Introduction to MySQL",
    description:
      "Educational repository providing comprehensive introduction to MySQL database management. Includes examples, best practices, and common use cases for database operations.",
    technologies: ["MySQL", "Database", "SQL", "Backend"],
    githubUrl: "https://github.com/vermaprince123/Introduction-to-MySQL",
    liveUrl: null,
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "OneAssist Consumer Solutions",
    location: "Faridabad, Haryana",
    period: "2021 - Present",
    description: [
      "Developed and maintained multiple web applications using React, React Native, and Angular",
      "Built scalable backend services using Java and Spring Boot",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive designs and optimized applications for performance",
      "Worked on mobile applications using React Native for cross-platform development",
      "Contributed to product-based solutions in a fast-paced environment",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "University Name",
    period: "2016 - 2020",
  },
];
