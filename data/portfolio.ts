export interface PersonalInfo {
  name: string
  title: string
  description: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  resume: string
}

export interface Skill {
  name: string
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases' | 'Cloud'
  level: number
  icon?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  year: number
  category: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
  type: 'work' | 'education' | 'certification'
}

export const personalInfo: PersonalInfo = {
  name: "Aditya Wagh",
  title: "Software Developer & AI Enthusiast",
  description: "Innovative Computer Applications student with hands-on experience building practical solutions using Java, Python, and AI tools. Passionate about solving real-world problems and contributing to open-source projects.",
  location: "Maharashtra, India",
  email: "waghaditya312@gmail.com",
  phone: "+91 8329177017",
  github: "https://github.com/dragaditya",
  linkedin: "https://linkedin.com/in/dragaditya",
  resume: "/resume.pdf"
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", category: "Languages", level: 90 },
  { name: "Python", category: "Languages", level: 85 },
  { name: "C++", category: "Languages", level: 80 },
  { name: "JavaScript", category: "Languages", level: 75 },
  { name: "TypeScript", category: "Languages", level: 70 },
  
  // Frameworks & Libraries
  { name: "React", category: "Frameworks", level: 75 },
  { name: "Next.js", category: "Frameworks", level: 70 },
  { name: "Node.js", category: "Frameworks", level: 75 },
  { name: "Express.js", category: "Frameworks", level: 70 },
  { name: "Spring Boot", category: "Frameworks", level: 65 },
  
  // Tools & Technologies
  { name: "Git", category: "Tools", level: 85 },
  { name: "Docker", category: "Tools", level: 70 },
  { name: "Linux", category: "Tools", level: 80 },
  { name: "VS Code", category: "Tools", level: 90 },
  { name: "Postman", category: "Tools", level: 80 },
  
  // Databases
  { name: "MySQL", category: "Databases", level: 75 },
  { name: "MongoDB", category: "Databases", level: 70 },
  { name: "PostgreSQL", category: "Databases", level: 65 },
  
  // Cloud & DevOps
  { name: "AWS", category: "Cloud", level: 70 },
  { name: "Vercel", category: "Cloud", level: 80 },
  { name: "Netlify", category: "Cloud", level: 75 },
]

export const projects: Project[] = [
  {
    id: "alter-debugger",
    title: "ALTER – Code Debugger",
    description: "AI-powered code debugger that helps users analyze and correct coding errors using the Gemini API.",
    longDescription: "ALTER is an advanced AI-powered code debugging tool that leverages Google's Gemini API to provide intelligent code analysis and error correction. Features include real-time debugging, code optimization suggestions, authentication via Clerk and OAuth, and a modern dark mode interface.",
    technologies: ["React", "Node.js", "Gemini API", "Clerk Auth", "TailwindCSS", "Express.js"],
    liveUrl: "https://projectdebugger.onrender.com/",
    githubUrl: "https://github.com/dragaditya/alter-debugger",
    featured: true,
    status: "completed",
    year: 2024,
    category: "AI/ML"
  },
  {
    id: "dragx-cli",
    title: "DRAGX – CLI Terminal Tool",
    description: "Custom command-line interface that automates Git operations, project setup, and file management.",
    longDescription: "DRAGX is a powerful CLI tool designed to streamline developer workflows. It automates repetitive tasks like Git operations, project initialization, dependency management, and file organization with smart, colorful commands that boost productivity.",
    technologies: ["Node.js", "Commander.js", "Chalk", "Inquirer", "File System APIs"],
    githubUrl: "https://github.com/dragaditya/dragx-cli",
    featured: true,
    status: "completed",
    year: 2024,
    category: "Tools"
  },
  {
    id: "portfolio-website",
    title: "Modern Portfolio Website",
    description: "Responsive portfolio website built with Next.js, featuring modern UI/UX and interactive animations.",
    longDescription: "A fully responsive portfolio website showcasing modern web development practices. Built with Next.js 14, TailwindCSS, and Framer Motion for smooth animations. Features include dark/light mode, SEO optimization, and performance optimization.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    liveUrl: "https://dragadi-portfolio.vercel.app",
    githubUrl: "https://github.com/dragaditya/portfolio",
    featured: true,
    status: "completed",
    year: 2024,
    category: "Web Development"
  },
  {
    id: "task-manager",
    title: "Smart Task Manager",
    description: "Full-stack task management application with AI-powered task categorization and priority suggestions.",
    longDescription: "A comprehensive task management solution featuring AI-powered categorization, smart priority suggestions, collaborative features, and real-time synchronization across devices.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT"],
    status: "in-progress",
    year: 2024,
    featured: false,
    category: "Full Stack"
  }
]

export const experience: Experience[] = [
  {
    id: "bca-education",
    title: "Bachelor of Computer Applications",
    company: "North Maharashtra University",
    location: "Maharashtra, India",
    startDate: "2022-06",
    endDate: "2025-05",
    description: [
      "Pursuing BCA with focus on software development and AI technologies",
      "Active member of college coding clubs and AI research groups",
      "Relevant coursework: Data Structures, Algorithms, Database Management, AI",
      "Current CGPA: 8.93/10"
    ],
    technologies: ["Java", "Python", "C++", "Database Management", "AI/ML"],
    type: "education"
  },
  {
    id: "academic-developer",
    title: "Academic Software Developer",
    company: "Pratap College",
    location: "Maharashtra, India",
    startDate: "2022-08",
    endDate: "2025-05",
    description: [
      "Developed and deployed Java and Python applications for college tasks",
      "Built library management and attendance systems for faculty use",
      "Collaborated with project teams on database design and version control",
      "Created comprehensive documentation and user manuals for easy adoption"
    ],
    technologies: ["Java", "Python", "MySQL", "Git", "Documentation"],
    type: "work"
  }
]

export const socialLinks = {
  github: "https://github.com/dragaditya",
  linkedin: "https://linkedin.com/in/dragaditya",
  twitter: "https://twitter.com/dragaditya",
  email: "mailto:waghaditya312@gmail.com"
}

export const siteConfig = {
  name: "Aditya Wagh",
  description: "Software Developer & AI Enthusiast",
  url: "https://dragadi-portfolio.vercel.app",
  ogImage: "/og-image.jpg",
  links: socialLinks
}