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
    "I'm a dedicated Software Engineer with over 3 years of experience working at OneAssist Consumer Solutions, a product-based company. I specialize in building modern web applications using React, Java, JavaScript, Angular, and React Native. My expertise includes developing responsive, performant applications that deliver outstanding user experiences. I'm passionate about creating innovative solutions and always eager to learn new technologies.",
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
    title: "Algorithms Kit",
    description:
      "An NPM package for advanced data structures and algorithms. A comprehensive library providing efficient implementations of common algorithms and data structures for JavaScript developers.",
    technologies: ["JavaScript", "NPM", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/vermaprince123/algorithmskit",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Edignite NGO Website",
    description:
      "A modern, responsive website for Edignite NGO built with JavaScript. Features clean design, smooth user experience, and optimized performance for showcasing NGO initiatives and impact.",
    technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
    githubUrl: "https://github.com/vermaprince123/edigniteNGOWebsite",
    liveUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Visual Sorting Project",
    description:
      "An interactive visualization tool for sorting algorithms. Watch algorithms like Bubble Sort, Quick Sort, and Merge Sort in action with beautiful visual representations.",
    technologies: ["JavaScript", "React", "Algorithms", "Visualization"],
    githubUrl: "https://github.com/vermaprince123/visual-sorting-project",
    liveUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: "Tutor App",
    description:
      "A comprehensive tutoring application built with JavaScript. Features include student management, scheduling, and interactive learning tools for educators and students.",
    technologies: ["JavaScript", "React", "Web Development"],
    githubUrl: "https://github.com/vermaprince123/tutorApp",
    liveUrl: null,
    featured: false,
  },
  {
    id: 5,
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
    id: 6,
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
