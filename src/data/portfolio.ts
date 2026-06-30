export interface Project {
  id: string;
  title: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  technologies: string[];
  description: string;
  problem: string;
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
  thumbnailPlaceholder?: string;
  coverImage?: string;
  thumbnail?: string;
  gallery?: string[];
}

export interface ToolkitCategory {
  id: string;
  title: string;
  icon: 'layout' | 'database' | 'terminal' | 'wrench';
  skills: string[];
}

export const ownerData = {
  name: "Aark Bharti.",
  fullName: "Aark Bharti",
  role: "Full Stack Developer & Product Engineer",
  tagline: "Building thoughtful software with clean code and modern design.",
  subHeadline: "I'm Aark Bharti, a Full Stack Developer & Product Engineer studying B.Tech Computer Science at KR Mangalam University. I bridge the gap between clean software architecture and intuitive user interfaces.",
  status: "Available for impact",
  email: "aarkbharti8@gmail.com",
  phone: "+91 8595759546",
  location: "New Delhi, India",
  github: "https://github.com/aarkbharti",
  linkedin: "https://www.linkedin.com/in/aark-bharti-a773401b4",
  twitter: "https://x.com",
  resumeUrl: "/resume.pdf",
};

export const aboutData = {
  heading: "Driven by curiosity.",
  paragraphs: [
    "My journey into software development is rooted in a deep fascination with how complex systems operate under the hood. Currently pursuing my B.Tech in Computer Science (Full Stack Development) at KR Mangalam University (7.96 SGPA), I focus on building real-world web applications and solidifying foundational engineering concepts.",
    "I believe great software happens at the intersection of rigorous engineering and clean product design. Whether integrating asynchronous REST APIs, crafting responsive mobile-first layouts, or developing embedded systems prototypes, I prioritize clean, readable, and maintainable code.",
    "Beyond academic coursework, this builder's mindset drives me as Co-Founder of UpBuilt—an early-stage digital marketing startup currently under construction—and through hands-on national engineering competitions."
  ],
  pillars: [
    {
      title: "Software Engineering",
      icon: "code",
      description: "Strong foundations in asynchronous JavaScript (ES6+), REST API integration, DOM manipulation, Java, Python, and scalable web architecture."
    },
    {
      title: "Product & Systems Design",
      icon: "penTool",
      description: "Clean semantic HTML5, fluid responsive CSS3 layouts, micro-interactions, and hardware-software integration with embedded C systems."
    },
    {
      title: "Education & Leadership",
      icon: "graduation",
      description: "B.Tech CSE (Full Stack Development) at KR Mangalam University (7.96 SGPA). Proven operational leadership managing budgeting, vendor coordination, and team execution as University Stall Manager."
    },
    {
      title: "Achievements & Innovation",
      icon: "award",
      description: "Shortlisted nationally among hundreds of teams at the IDEAS 4.0 National Innovation Competition for designing a multi-joint Search & Rescue Robot."
    }
  ]
};

export const toolkitData: ToolkitCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "layout",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Async/Await", "Fetch API", "DOM Manipulation", "React"]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: "database",
    skills: ["Java", "Python", "Node.js", "REST APIs", "Embedded C", "Arduino"]
  },
  {
    id: "languages",
    title: "Core Languages",
    icon: "terminal",
    skills: ["JavaScript", "Java", "Python", "C", "TypeScript"]
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Arduino IDE", "Responsive Design"]
  }
];

export const projectsData: Project[] = [
  {
    id: "weather-tracker",
    title: "Async Weather Tracker",
    status: "COMPLETED",
    technologies: ["JavaScript ES6+", "HTML5", "CSS3", "OpenWeatherMap API"],
    description: "A dynamic weather tracking application integrating live meteorological data with an educational in-app event loop visualizer to illustrate asynchronous JavaScript execution.",
    problem: "Integrating real-time REST API data reliably while visually demonstrating how JavaScript handles synchronous execution, microtasks, and macrotasks under the hood.",
    outcome: "Integrated OpenWeatherMap REST API using async/await and Fetch API, complete with a custom event loop visualizer and instant repeat searches via localStorage history.",
    githubUrl: "https://github.com/aarkbharti/git-upload",
    thumbnailPlaceholder: "ASYNC WEATHER TRACKER"
  },
  {
    id: "foodie-express",
    title: "Foodie Express — Food Delivery UI",
    status: "COMPLETED",
    technologies: ["HTML5", "CSS3 Flexbox", "CSS Grid", "Responsive Design"],
    description: "A modern, static food delivery platform interface featuring hero navigation, dynamic category filters, structured restaurant cards, and newsletter conversion flows.",
    problem: "Designing a clean, multi-section web application interface from scratch ensuring rigorous semantic markup without relying on external UI frameworks.",
    outcome: "Engineered a clean, semantic HTML5 and CSS Grid architecture ensuring fluid responsiveness and visual consistency across mobile, tablet, and desktop viewports.",
    githubUrl: "https://github.com/aarkbharti/WebDev-Capstone-Project",
    thumbnailPlaceholder: "FOODIE EXPRESS UI"
  },
  {
    id: "quiz-game",
    title: "Interactive Quiz Game",
    status: "COMPLETED",
    technologies: ["Vanilla JavaScript", "DOM Events", "HTML5", "CSS3"],
    description: "A fast, lightweight browser-based quiz application engineered from scratch using vanilla JavaScript and direct DOM event handling.",
    problem: "Managing application state, dynamic question rendering, and real-time score calculation efficiently without heavy client-side libraries.",
    outcome: "Delivered an interactive quiz experience with zero external dependencies, seamless DOM state transitions, and instant score tracking.",
    githubUrl: "https://github.com/aarkbharti/Quiz-Game",
    thumbnailPlaceholder: "INTERACTIVE QUIZ GAME"
  },
  {
    id: "snake-robot",
    title: "Snake Robot Prototype",
    status: "COMPLETED",
    technologies: ["Arduino", "Embedded C", "Hardware Engineering"],
    description: "A multi-joint robotic snake prototype engineered for obstacle traversal and search-and-rescue applications.",
    problem: "Coordinating multi-axis servo movement accurately while keeping hardware control logic modular and extensible for real-world field operations.",
    outcome: "Designed servo-controlled locomotion architecture with embedded C, earning national shortlisting at the IDEAS 4.0 National Innovation Competition.",
    githubUrl: "https://github.com/aarkbharti",
    thumbnailPlaceholder: "SNAKE ROBOT PROTOTYPE"
  }
];

export const upbuiltData = {
  title: "Building UpBuilt.",
  role: "CO-FOUNDER",
  status: "UNDER CONSTRUCTION",
  description: "Building an early-stage digital marketing startup focused on branding, websites, SEO, performance marketing, and modern web experiences.",
  footerStatus: "Laying the foundation"
};
