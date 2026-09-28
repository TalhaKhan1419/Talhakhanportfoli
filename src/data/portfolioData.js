export const portfolioData = {
  profile: {
    name: "Talha Khan",
    title: "Full Stack Developer / Software Developer",
    shortBio: "I build scalable, secure and user-focused web applications using modern frontend and backend technologies.",
    aboutNarrative: `I am a passionate Full Stack Software Developer with approximately 1 year of hands-on experience designing and delivering robust end-to-end web applications. My core expertise spans modern React frontend development, RESTful API architecture with Node.js/Express and Java Spring Boot, relational and NoSQL database modeling (MySQL, MongoDB), in-memory Redis caching, secure authentication frameworks (JWT, OAuth 2.0, RBAC), and cloud asset management with AWS and Cloudinary. I focus on writing clean, maintainable, and scalable code that solves real-world business challenges.`,
    location: "India",
    email: "sahbazkhan1419@gmail.com",
    github: "https://github.com/TalhaKhan1419",
    linkedin: "https://linkedin.com/in/talhakhan-dev",
    leetcode: "https://leetcode.com/u/TalhaKhan_/",
    resumeUrl: "/resume.pdf",
    education: {
      degree: "B.Tech in Computer Science Engineering",
      institution: "I.K. Gujral Punjab Technical University",
      period: "2021 - 2025"
    }
  },

  stats: [
    { label: "Experience", value: "~1 Year" },
    { label: "LeetCode Solved", value: "400+" },
    { label: "Full Stack Projects", value: "6+" },
    { label: "Core Focus", value: "Full Stack & APIs" }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "HTML5", level: "Advanced", icon: "Layout" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Sparkles" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "Java", level: "Advanced", icon: "Coffee" },
      { name: "Spring Boot", level: "Advanced", icon: "Layers" },
      { name: "Spring MVC", level: "Advanced", icon: "Grid" },
      { name: "Spring Security", level: "Advanced", icon: "Shield" }
    ],
    database: [
      { name: "MongoDB", level: "Advanced", icon: "Database" },
      { name: "MySQL", level: "Advanced", icon: "Table" },
      { name: "Redis", level: "Advanced", icon: "Zap" }
    ],
    security: [
      { name: "REST APIs", level: "Advanced", icon: "Globe" },
      { name: "JWT Auth", level: "Advanced", icon: "Key" },
      { name: "OAuth 2.0", level: "Advanced", icon: "Lock" },
      { name: "Role-Based Access (RBAC)", level: "Advanced", icon: "ShieldCheck" },
      { name: "Webhooks", level: "Advanced", icon: "Webhook" },
      { name: "Payment Integration", level: "Advanced", icon: "CreditCard" }
    ],
    tools: [
      { name: "Git", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", level: "Advanced", icon: "Github" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "AWS", level: "Advanced", icon: "Cloud" },
      { name: "Cloudinary", level: "Advanced", icon: "Image" },
      { name: "WebSocket", level: "Advanced", icon: "Radio" },
      { name: "Puppeteer", level: "Advanced", icon: "Bot" }
    ]
  },

  experience: [
    {
      company: "Coox",
      role: "Full Stack Web Developer",
      period: "Recent / Current",
      type: "Full-Time",
      description: "Contributed to building high-concurrency web services, API layers, and responsive management dashboards.",
      responsibilities: [
        "Designing and developing RESTful APIs using Node.js and Express.",
        "Implementing secure authentication and authorization using JWT and OAuth 2.0.",
        "Working with MongoDB and MySQL databases, designing optimized schemas and queries.",
        "Integrating responsive React.js frontend interfaces with backend API services.",
        "Leveraging Redis caching to optimize frequent database queries and speed up response times.",
        "Implementing payment gateway integrations and handling automated webhooks.",
        "Troubleshooting CORS policies, token expiration, and API integration issues.",
        "Improving overall application performance, reliability, and security scalability."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "JWT", "Webhooks"]
    }
  ],

  projects: [
    {
      id: "restaurant-qr",
      title: "Restaurant & Hotel Management System with QR Code",
      category: "Full Stack",
      featured: true,
      badge: "Dynamic QR Ordering",
      shortDescription: "A multi-restaurant management platform featuring contactless QR code table menus, order tracking, inventory management, and KOT dispatch.",
      fullDescription: "An all-in-one operations platform for hotels and multi-branch restaurants. Enables customers to scan table-specific QR codes to view live digital menus and place orders directly. Provides staff with a centralized dashboard for table allocation, Kitchen Order Ticket (KOT) automation, real-time inventory updates, and role-based staff control.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Cloudinary", "AWS", "QR Generator"],
      features: [
        "Multi-restaurant & branch management",
        "Dynamic QR Code table menu generation",
        "Interactive customer contactless ordering",
        "Kitchen Order Ticket (KOT) workflow automation",
        "Real-time inventory & stock tracking",
        "Comprehensive sales & operations reporting",
        "Cloudinary image management for menu items",
        "Role-Based Access Control (Admin, Staff, Kitchen)"
      ],
      github: "https://github.com/TalhaKhan1419/restaurant-hotel-qr-management",
      live: "https://restaurant-hotel-demo.talhakhan.dev",
      imageTag: "hotel"
    },
    {
      id: "health-finance",
      title: "Health and Finance Management System",
      category: "Full Stack",
      featured: true,
      badge: "Analytics & Vault",
      shortDescription: "A unified personal analytics platform for tracking medical diagnostics, expense management, predictive budgeting, and encrypted health records.",
      fullDescription: "A robust dual-domain web application empowering users to monitor both financial health and personal medical diagnostics in one dashboard. Features interactive visual analytics, monthly budget goal forecasting, Redis-cached financial summaries, and HIPAA-inspired encrypted medical record storage.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redis", "REST APIs"],
      features: [
        "Financial expense & income breakdown charts",
        "Predictive budget forecasting and alerts",
        "Health diagnostic metrics & biometric tracker",
        "Encrypted record storage and fast retrieval",
        "Redis caching for high-speed user stats",
        "Responsive glassmorphism dashboard UI"
      ],
      github: "https://github.com/TalhaKhan1419/health-finance-management",
      live: "https://health-finance-demo.talhakhan.dev",
      imageTag: "health"
    },
    {
      id: "backgammon-cyprus",
      title: "Real-Time Backgammon Game (Cyprus Client)",
      category: "Real-Time Web",
      featured: true,
      badge: "International Client Project",
      shortDescription: "Real-time multiplayer Backgammon web application built for a client in Cyprus with WebSocket synchronization, dice physics, and legal move validation.",
      fullDescription: "Custom web-based Backgammon gaming engine delivered for an international client in Cyprus. Built with real-time WebSocket communication, legal move validation logic, interactive board renders, dice rolling animations, player matchmaking, and match history replay.",
      technologies: ["React.js", "Node.js", "WebSocket", "Tailwind CSS", "Redis", "Canvas API"],
      features: [
        "Real-time multiplayer board synchronization via WebSockets",
        "Algorithmic legal move validation engine",
        "Smooth dice physics & piece movement animations",
        "Private game room creation & lobby system",
        "Match replay & player move history logging",
        "Redis session state caching for rapid reconnection"
      ],
      github: "https://github.com/TalhaKhan1419/backgammon-cyprus-game",
      live: "https://backgammon-cyprus-demo.talhakhan.dev",
      imageTag: "gaming"
    },
    {
      id: "hospital-system",
      title: "Hospital Management System",
      category: "Full Stack",
      featured: false,
      badge: "Enterprise Healthcare",
      shortDescription: "Role-based healthcare portal for patient records, doctor scheduling, appointments, Redis caching, and payment integration.",
      fullDescription: "A complete healthcare administration platform connecting patients, doctors, and hospital receptionists. Includes appointment scheduling, doctor availability management, instant search with Redis caching, and online payment gateway for consultation fees.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Redis", "Payment Gateway"],
      features: [
        "Role-based permissions (Admin, Doctor, Patient)",
        "Patient records & medical history management",
        "Appointment booking & doctor schedule calendar",
        "Redis caching for high-frequency search lookups",
        "Pagination & server-side query optimization",
        "Payment gateway integration for digital billing"
      ],
      github: "https://github.com/TalhaKhan1419/hospital-management-system",
      live: "https://hospital-demo.talhakhan.dev",
      imageTag: "hospital"
    },
    {
      id: "trendwatch",
      title: "TrendWatch Automation Engine",
      category: "Backend & Automation",
      featured: false,
      badge: "Data Aggregator",
      shortDescription: "Automated web data aggregation application parsing multi-source trend metrics using Puppeteer headless automation and Redis caching.",
      fullDescription: "High-performance web scraping and data aggregation service. Uses headless Chrome instances to harvest, process, and normalize data from multiple web feeds into structured insights, cached via Redis and exposed through a clean API.",
      technologies: ["Node.js", "Puppeteer", "Redis", "MongoDB", "REST APIs"],
      features: [
        "Headless browser scraping with Puppeteer",
        "Multi-source data aggregation & normalization",
        "Automated scheduled cron jobs",
        "In-memory Redis caching for fast response times",
        "MongoDB persistent historical tracking"
      ],
      github: "https://github.com/TalhaKhan1419/trendwatch-automation",
      live: "https://trendwatch-demo.talhakhan.dev",
      imageTag: "automation"
    },
    {
      id: "food-ordering",
      title: "Online Food Ordering System",
      category: "Full Stack",
      featured: false,
      badge: "E-Commerce",
      shortDescription: "Full stack food delivery system with dynamic menus, persistent cart management, checkout workflow, and admin management portal.",
      fullDescription: "A seamless e-commerce solution for food ordering featuring real-time menu browsing, category filters, interactive cart state, order placement, and an admin management dashboard for tracking customer orders.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      features: [
        "Interactive menu browsing with search & filter",
        "Persistent shopping cart management",
        "Order placement & status tracking",
        "Admin management portal for items & orders",
        "Clean RESTful backend API architecture"
      ],
      github: "https://github.com/TalhaKhan1419/online-food-ordering",
      live: "https://food-ordering-demo.talhakhan.dev",
      imageTag: "food"
    }
  ],

  leetcode: {
    solved: "400+",
    subtitle: "Consistently practicing Data Structures and Algorithms to refine algorithmic thinking and optimize system performance.",
    profileUrl: "https://leetcode.com/u/TalhaKhan_/",
    topics: [
      { name: "Dynamic Programming", count: "70+" },
      { name: "Trees & Graphs", count: "90+" },
      { name: "Arrays & Strings", count: "120+" },
      { name: "Binary Search & Two Pointers", count: "60+" },
      { name: "Linked Lists & Stacks", count: "60+" }
    ]
  }
};
