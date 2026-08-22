export const personalData = {
  fullName: "Chakrawarthige Mahela Indrajith Fernando",
  preferredName: "Mahela",
  tagline: "IT Undergraduate | Aspiring Cyber Security Professional",
  location: "Dambethalava, Dehipe",
  email: "mahelaindrajith58@gmail.com",
  university: "University of Kelaniya",
  faculty: "Faculty of Science",
  department: "Department of Industrial Management (MIT)",
  degree: "B.Sc. (Hons) in Information Technology & Industrial Management",
  careerAspiration: "Cyber Security & Security Engineering",
  aboutBio: `Mahela Indrajith Fernando is an IT undergraduate at the Department of Industrial Management, Faculty of Science, University of Kelaniya, with a deep passion for cyber security. He enjoys building practical, security-conscious software — from task management systems to interactive games — and is currently working on a year-long Software Development Project (SDP) building a Customer Appointment Management System. He gained hands-on industry experience during his internship at the Bank of Ceylon (Sept 2024 – Mar 2025). Outside of academics, Mahela is an active member of the University of Kelaniya Boxing Club, bringing the same discipline, resilience, and laser focus from the ring into his approach to software engineering and problem-solving.`,
  boxingHighlight: "Applying the discipline, strategic focus, and quick reflexes from the ring directly into cyber security analysis and complex problem solving.",
  avatar: "/avatar.jpg"
};

export const educationData = [
  {
    institution: "University of Kelaniya",
    faculty: "Faculty of Science",
    department: "Department of Industrial Management",
    program: "Information Technology & Industrial Management (MIT)",
    status: "Undergraduate",
    highlights: [
      "Specializing in Information Technology (IT)",
      "Focused on Cyber Security, Software Engineering, and Database Systems",
      "Engaged in hands-on industry-oriented team projects"
    ]
  }
];

export const experienceData = [
  {
    role: "Intern Banking Trainee",
    company: "Bank of Ceylon",
    location: "Head Office / Branch Network, Sri Lanka",
    period: "Sept 2024 – Mar 2025",
    exactDates: "2024-09-02 to 2025-03-25",
    type: "Internship",
    description: "Worked as a Digital Assistant, providing direct customer support and assisting with branch operations.",
    responsibilities: [
      "Assisted customers with installing digital banking applications and setting up their accounts.",
      "Troubleshot and resolved customer account issues efficiently.",
      "Managed customer service tasks in the front office to ensure high customer satisfaction.",
      "Supported back-office operations and general administrative duties in the assigned branch."
    ]
  }
];

export const skillsData = [
  {
    id: "web-dev",
    name: "Web Development",
    category: "Web & Mobile",
    status: "Beginner Level",
    devicon: "devicon-javascript-plain colored"
  },
  {
    id: "react",
    name: "React",
    category: "Web & Mobile",
    status: "Beginner Level",
    devicon: "devicon-react-original colored"
  },
  {
    id: "html",
    name: "HTML",
    category: "Web & Mobile",
    status: "Beginner Level",
    devicon: "devicon-html5-plain colored"
  },
  {
    id: "css",
    name: "CSS & Styling",
    category: "Web & Mobile",
    status: "Beginner Level",
    devicon: "devicon-css3-plain colored"
  },
  {
    id: "mobile-dev",
    name: "Mobile App Development",
    category: "Web & Mobile",
    status: "Beginner Level",
    devicon: "devicon-android-plain colored"
  },
  {
    id: "java",
    name: "Java",
    category: "Programming Languages",
    status: "Beginner Level",
    devicon: "devicon-java-plain colored"
  },
  {
    id: "cpp",
    name: "C++",
    category: "Programming Languages",
    status: "Beginner Level",
    devicon: "devicon-cplusplus-plain colored"
  },
  {
    id: "python",
    name: "Python",
    category: "Programming Languages",
    status: "Beginner Level",
    devicon: "devicon-python-plain colored"
  },
  {
    id: "linux",
    name: "Linux",
    category: "Cyber Security & Tools",
    status: "Beginner Level",
    devicon: "devicon-linux-plain colored"
  }
];

export const projectsData = [
  {
    id: "sdp-appointment",
    title: "SDP — Customer Appointment Management System",
    badge: "Year-Long Project",
    category: "Full Stack & Security",
    description: "A year-long flagship Software Development Project (SDP) designed to streamline customer appointments, queue management, and service scheduling.",
    securityAspect: "Includes multi-role RBAC authorization, secure token authentication, input validation against XSS/SQLi, and automated notification alerts.",
    tags: ["React", "Node.js", "Express", "Database", "Security Controls"],
    featured: true
  },
  {
    id: "task-manager-sec",
    title: "Task Management System (Security Module)",
    badge: "Security Focus",
    category: "Cyber Security",
    description: "Contributed directly to the security architecture of a comprehensive task management platform, ensuring user data privacy and authorization.",
    securityAspect: "Implemented bcrypt password hashing, JWT authentication, session handling, CSRF defense, and granular user role permissions.",
    tags: ["JavaScript", "Security Architecture", "Authentication", "JWT", "Access Control"],
    featured: true
  },
  {
    id: "currier-manager",
    title: "Currier Management System",
    badge: "Delivery System",
    category: "Web Application",
    description: "A comprehensive web-based logistics application developed as a student project to manage package deliveries, track shipments, and coordinate dispatch operations.",
    securityAspect: "Role-based access separating admin, dispatcher, and customer data views with strict payload validation.",
    tags: ["Java / JS", "Database Systems", "UI Design", "Data Validation"],
    featured: false
  },
  {
    id: "ping-pong-game",
    title: "Interactive Ping Pong Game",
    badge: "Game Logic",
    category: "Software Development",
    description: "Classic 2D interactive arcade game built to master real-time graphics rendering, collision detection algorithms, and event loop performance.",
    securityAspect: "Memory-safe variable handling and boundary constraint checking during fast frame update loops.",
    tags: ["C++", "Object-Oriented Programming", "Game Physics", "CLI / Graphics"],
    featured: false
  }
];

export const extracurricularData = [
  {
    title: "Member, Boxing Club",
    organization: "University of Kelaniya",
    role: "Athlete & Active Member",
    icon: "swords",
    description: "Active member of the University Boxing Team. Boxing requires sharp mental clarity, physical endurance, emotional composure under pressure, and strategic anticipation of opponent moves — skillsets that mirror cyber security threat detection and incident response."
  }
];
