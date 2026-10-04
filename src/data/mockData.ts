import { CareerTrack, OpportunityItem } from '../types';

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    shortDesc: 'Craft user-facing web applications using modern component architecture, state management, and responsive design.',
    interestCategory: 'Technology & Software',
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub', 'APIs', 'UI/UX', 'Tailwind CSS'],
    recommendedFirstStep: 'Learn React Fundamentals',
    averageBridgeMonths: '3–4 months',
    roadmap: [
      {
        id: 'fe-1',
        title: 'HTML & CSS Fundamentals',
        status: 'completed',
        duration: '3 weeks',
        description: 'Semantic markup, modern flexbox, CSS grid, accessible forms, and mobile responsive design.',
        keyTopics: ['Semantic HTML5', 'Flexbox & Grid', 'Responsive Media Queries', 'CSS Variables'],
        suggestedProject: 'Responsive Agency Landing Page',
        difficulty: 'Foundational'
      },
      {
        id: 'fe-2',
        title: 'Modern JavaScript (ES6+)',
        status: 'completed',
        duration: '4 weeks',
        description: 'Core programming constructs, DOM manipulation, asynchronous JavaScript, Promises, and fetch API.',
        keyTopics: ['Scope & Closures', 'Async/Await & Promises', 'Array Methods', 'DOM Events'],
        suggestedProject: 'Interactive Task & Finance Tracker',
        difficulty: 'Foundational'
      },
      {
        id: 'fe-3',
        title: 'Git & GitHub Version Control',
        status: 'completed',
        duration: '1 week',
        description: 'Branch management, pull requests, collaborative merge conflict resolution, and open-source workflows.',
        keyTopics: ['Git Branching', 'Remote Repositories', 'Pull Request Reviews', 'GitHub Pages'],
        suggestedProject: 'Published Multi-branch Open Source Starter',
        difficulty: 'Core'
      },
      {
        id: 'fe-4',
        title: 'React Fundamentals & State',
        status: 'current',
        duration: '4 weeks',
        description: 'Component architecture, JSX, hooks (useState, useEffect, useMemo), props, and component lifecycle.',
        keyTopics: ['Component Reusability', 'Hooks Ecosystem', 'State Management', 'Conditional Rendering'],
        suggestedProject: 'Dynamic Product Catalog with Cart State',
        difficulty: 'Core'
      },
      {
        id: 'fe-5',
        title: 'REST APIs & Asynchronous State',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'Data fetching, caching, error boundaries, loading skeletons, and integrating third-party backend endpoints.',
        keyTopics: ['HTTP Protocols', 'Axios & TanStack Query', 'Error Handling', 'Token Authentication'],
        suggestedProject: 'Live Weather & Campus Events Dashboard',
        difficulty: 'Core'
      },
      {
        id: 'fe-6',
        title: 'Portfolio Projects & Polish',
        status: 'upcoming',
        duration: '4 weeks',
        description: 'Building 2 production-grade capstone applications, lighthouse performance optimization, and case study write-ups.',
        keyTopics: ['Performance Auditing', 'Web Vitals', 'Design Systems', 'Deployment CI/CD'],
        suggestedProject: 'Full-fledged EdTech Learning Portal (UNIVA)',
        difficulty: 'Advanced'
      },
      {
        id: 'fe-7',
        title: 'Internship Applications & Technical Prep',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'Resume crafting with project proof, live coding interview questions, and submitting targeted applications.',
        keyTopics: ['Frontend System Design', 'Coding Challenges', 'Behavioral STAR Method', 'Tech Portfolio Review'],
        suggestedProject: 'Verified GitHub Portfolio & Interactive Demo URL',
        difficulty: 'Industry Ready'
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    shortDesc: 'Extract actionable insights from raw business data using SQL, statistical Python, and interactive dashboards.',
    interestCategory: 'Data & Analytics',
    requiredSkills: ['Excel / Spreadsheets', 'SQL', 'Python', 'Pandas & NumPy', 'Tableau / PowerBI', 'Data Cleaning', 'Statistics'],
    recommendedFirstStep: 'Master Complex SQL Queries & Joins',
    averageBridgeMonths: '3–5 months',
    roadmap: [
      {
        id: 'da-1',
        title: 'Spreadsheet Analysis & Pivot Tables',
        status: 'completed',
        duration: '2 weeks',
        description: 'Advanced lookup formulas, statistical functions, pivot table modeling, and clean charting.',
        keyTopics: ['XLOOKUP & INDEX/MATCH', 'Pivot Tables', 'Data Validation', 'Descriptive Stats'],
        suggestedProject: 'College Placement Outcomes Spreadsheet Model',
        difficulty: 'Foundational'
      },
      {
        id: 'da-2',
        title: 'Relational Databases & SQL Queries',
        status: 'current',
        duration: '4 weeks',
        description: 'Writing complex queries, aggregate functions, multiple JOINs, subqueries, and window functions.',
        keyTopics: ['SELECT & GROUP BY', 'INNER & LEFT JOINs', 'Window Functions', 'Common Table Expressions (CTEs)'],
        suggestedProject: 'E-commerce Customer Retention SQL Audit',
        difficulty: 'Core'
      },
      {
        id: 'da-3',
        title: 'Python for Data Analysis (Pandas & NumPy)',
        status: 'upcoming',
        duration: '5 weeks',
        description: 'Importing datasets, vectorised calculations, handling missing values, and exploratory data analysis (EDA).',
        keyTopics: ['DataFrames', 'Data Imputation', 'Grouping & Aggregations', 'Matplotlib & Seaborn'],
        suggestedProject: 'State Healthcare Access Exploratory Analysis',
        difficulty: 'Core'
      },
      {
        id: 'da-4',
        title: 'Business Intelligence Dashboards (Power BI / Tableau)',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'Building interactive executive KPI dashboards, DAX calculations, and automated data refresh pipelines.',
        keyTopics: ['Data Modeling', 'KPI Cards & Trend Lines', 'Interactive Slicers', 'Storytelling with Data'],
        suggestedProject: 'Executive Sales & Churn Analytics Dashboard',
        difficulty: 'Advanced'
      },
      {
        id: 'da-5',
        title: 'Capstone Case Study & Analyst Interview Prep',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'End-to-end data story from raw CSV to boardroom presentation deck and SQL live whiteboard challenges.',
        keyTopics: ['Business Metric Formulation', 'Executive Presentation', 'SQL LeetCode Prep', 'Portfolio Deck'],
        suggestedProject: 'Published Kaggle / GitHub Data Case Study',
        difficulty: 'Industry Ready'
      }
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    shortDesc: 'Design intuitive, human-centered digital products from user research and wireframing to interactive design systems.',
    interestCategory: 'Product & Design',
    requiredSkills: ['User Research', 'Wireframing', 'Figma', 'Design Systems', 'Prototyping', 'Usability Testing', 'UI Typography'],
    recommendedFirstStep: 'Build Component Systems in Figma',
    averageBridgeMonths: '3–4 months',
    roadmap: [
      {
        id: 'ux-1',
        title: 'Design Foundations & Heuristics',
        status: 'completed',
        duration: '2 weeks',
        description: 'Nielsen Norman heuristics, visual hierarchy, typography scale, spacing grids, and contrast accessibility.',
        keyTopics: ['Color Theory & Contrast', 'Typographic Rhythm', '8pt Grid Systems', 'Usability Heuristics'],
        suggestedProject: 'Redesigning a Broken Campus Portal Flow',
        difficulty: 'Foundational'
      },
      {
        id: 'ux-2',
        title: 'User Research & Journey Mapping',
        status: 'completed',
        duration: '3 weeks',
        description: 'Conducting user interviews, empathy maps, user personas, problem statements, and information architecture.',
        keyTopics: ['Qualitative Interviews', 'Persona Formulation', 'User Journey Maps', 'Card Sorting'],
        suggestedProject: 'Student Study Group App Research Synthesis',
        difficulty: 'Core'
      },
      {
        id: 'ux-3',
        title: 'Figma Mastery & Interactive Prototyping',
        status: 'current',
        duration: '4 weeks',
        description: 'Auto layout, variants, responsive component libraries, smart animations, and interactive state models.',
        keyTopics: ['Auto Layout 5.0', 'Tokens & Variables', 'Interactive Component States', 'Smart Animate'],
        suggestedProject: 'Full Mobile Banking & Budgeting Flow',
        difficulty: 'Core'
      },
      {
        id: 'ux-4',
        title: 'Design Systems & Developer Handoff',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'Atomic design, token documentation, component specs, accessibility checks, and Figma-to-code collaboration.',
        keyTopics: ['Atomic Design', 'WCAG 2.1 AA Compliance', 'Design Tokens', 'Handoff Documentation'],
        suggestedProject: 'Production Design System with 40+ Components',
        difficulty: 'Advanced'
      },
      {
        id: 'ux-5',
        title: 'Portfolio Case Studies & Presentation',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'Crafting 2 in-depth case studies articulating rationale, constraints, tradeoffs, and testing metrics.',
        keyTopics: ['Case Study Storytelling', 'Portfolio Website', 'Whiteboard Challenge Prep', 'App Critique'],
        suggestedProject: 'Live Online UI/UX Portfolio on Notion/Webflow',
        difficulty: 'Industry Ready'
      }
    ]
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    shortDesc: 'Architect secure server-side applications, relational schemas, RESTful APIs, and database transactions.',
    interestCategory: 'Technology & Software',
    requiredSkills: ['Python / Node.js', 'REST APIs', 'PostgreSQL', 'Authentication & JWT', 'Git', 'Docker Basics', 'System Design Basics'],
    recommendedFirstStep: 'Build Authenticated REST API with Node.js or FastAPI',
    averageBridgeMonths: '4–5 months',
    roadmap: [
      {
        id: 'be-1',
        title: 'Server-Side Programming & Runtime',
        status: 'completed',
        duration: '3 weeks',
        description: 'Asynchronous event loops, file systems, package management, and modular software architecture.',
        keyTopics: ['Event-driven architecture', 'Environment configs', 'Error handling', 'Logging'],
        suggestedProject: 'Command-Line Multi-source Data Scraper',
        difficulty: 'Foundational'
      },
      {
        id: 'be-2',
        title: 'RESTful API Architecture & Routing',
        status: 'current',
        duration: '3 weeks',
        description: 'HTTP methods, status codes, controller layers, request validation, and clean routing standards.',
        keyTopics: ['HTTP Specifications', 'Request Validation', 'Middleware Pipelines', 'API Versioning'],
        suggestedProject: 'University Course Registration API',
        difficulty: 'Core'
      },
      {
        id: 'be-3',
        title: 'Database Modeling & PostgreSQL',
        status: 'upcoming',
        duration: '4 weeks',
        description: 'Schema normalization, foreign keys, indexing, transactions (ACID), and ORM integration.',
        keyTopics: ['Entity-Relationship Design', 'SQL Indexing', 'ACID Transactions', 'Connection Pooling'],
        suggestedProject: 'Multi-tenant Job Board Database Engine',
        difficulty: 'Core'
      },
      {
        id: 'be-4',
        title: 'Auth, Security & Cloud Deployment',
        status: 'upcoming',
        duration: '3 weeks',
        description: 'JWT tokens, bcrypt password hashing, CORS, rate limiting, and deploying via containerized cloud instances.',
        keyTopics: ['OAuth / JWT Tokens', 'Password Security', 'Rate Limiting', 'Docker Containers'],
        suggestedProject: 'Secure Microservices Auth Gateway',
        difficulty: 'Advanced'
      }
    ]
  }
];

export const SAMPLE_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp-1',
    type: 'internship',
    title: 'Frontend Development Intern',
    organization: 'FinTech Pulse (Demo Partner)',
    format: 'Remote · Stipend ₹18,000/mo',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    level: 'Beginner',
    durationOrExp: '3 Months (Full-time/Part-time)',
    description: 'Collaborate with senior web engineers to build responsive client dashboards, integrate REST endpoints, and implement reusable UI components.',
    matchScore: 92,
    highlightBadge: 'High Skill Match'
  },
  {
    id: 'opp-2',
    type: 'course',
    title: 'React Fundamentals & Modern Hooks',
    organization: 'UNIVA Curated Academy',
    format: 'Self-Paced · Project-Based',
    skills: ['React', 'JavaScript', 'State Management'],
    level: 'Beginner',
    durationOrExp: '6 Weeks · 5 hrs/week',
    description: 'Master component architecture, functional hooks, controlled forms, and state orchestration through 4 guided hands-on build sprints.',
    matchScore: 98,
    highlightBadge: 'Recommended Next Step'
  },
  {
    id: 'opp-3',
    type: 'project',
    title: 'Build a Personal Developer Portfolio',
    organization: 'UNIVA Open Learning Lab',
    format: 'Guided Capstone Project',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    level: 'Beginner',
    durationOrExp: '10–14 Days',
    description: 'Step-by-step project brief with starter template, milestone checklist, code reviews, and live deployment guide on Vercel/GitHub Pages.',
    matchScore: 95,
    highlightBadge: 'Resume Builder'
  },
  {
    id: 'opp-4',
    type: 'job',
    title: 'Junior Frontend Developer',
    organization: 'CloudScale Technologies (Sample)',
    format: 'Hybrid (Bangalore/Remote) · Full-time',
    skills: ['JavaScript', 'React', 'Git & GitHub', 'REST APIs'],
    level: '0–1 years',
    durationOrExp: 'Entry Level (Fresh Graduates)',
    description: 'Ideal for graduating seniors with verified portfolio projects. Work on enterprise SaaS customer portal with continuous mentoring.',
    matchScore: 84
  },
  {
    id: 'opp-5',
    type: 'internship',
    title: 'Data Analytics & Reporting Intern',
    organization: 'MarketInsights Lab (Demo)',
    format: 'Remote · Stipend ₹15,000/mo',
    skills: ['SQL', 'Excel', 'Python', 'Power BI'],
    level: 'Beginner',
    durationOrExp: '6 Months',
    description: 'Clean raw customer feedback datasets, write exploratory SQL queries, and prepare visual KPI summaries for weekly growth reviews.',
    matchScore: 78
  },
  {
    id: 'opp-6',
    type: 'course',
    title: 'Relational Databases & SQL for Tech Careers',
    organization: 'UNIVA Skill Sprints',
    format: 'Interactive Sandbox',
    skills: ['SQL', 'Database Design', 'PostgreSQL'],
    level: 'Beginner',
    durationOrExp: '4 Weeks · 4 hrs/week',
    description: 'From zero to writing multi-table JOINs, aggregations, and window functions with instant automated query evaluation.',
    matchScore: 88
  },
  {
    id: 'opp-7',
    type: 'project',
    title: 'E-Commerce Cart & Checkout State Engine',
    organization: 'UNIVA Build Sprints',
    format: 'Pair-Review Capstone',
    skills: ['React', 'APIs', 'Git & GitHub'],
    level: 'Intermediate',
    durationOrExp: '2 Weeks',
    description: 'Create a resilient shopping application featuring client-side persistence, cart math, async coupon validation, and mock checkout.',
    matchScore: 91
  },
  {
    id: 'opp-8',
    type: 'job',
    title: 'Associate UI/UX Product Designer',
    organization: 'Nexora HealthTech (Sample)',
    format: 'On-site / Hybrid · Full-time',
    skills: ['Figma', 'Wireframing', 'User Research', 'Design Systems'],
    level: '0–1 years',
    durationOrExp: '0–1 Years Experience',
    description: 'Assist in designing accessible patient portals, conducting testing sessions, and building maintainable Figma component libraries.',
    matchScore: 80
  }
];

export const STUDENT_PROBLEMS = [
  {
    id: 'options',
    title: 'Too many career options',
    description: 'Thousands of job titles, buzzwords, and advice threads leave students overwhelmed about where to actually commit their energy.',
    iconName: 'Compass'
  },
  {
    id: 'guidance',
    title: 'Lack of personalized guidance',
    description: 'One-size-fits-all college seminars rarely address an individual student’s unique strengths, baseline skills, or personal timeline.',
    iconName: 'UserX'
  },
  {
    id: 'requirements',
    title: 'Unclear skill requirements',
    description: 'Job descriptions list 20+ requirements with unrealistic expectations, making it hard to discern core must-haves from nice-to-haves.',
    iconName: 'HelpCircle'
  },
  {
    id: 'next-step',
    title: 'Not knowing what to learn next',
    description: 'Students get stuck in tutorial loops, watching endless videos without knowing the sequential order needed to build real competence.',
    iconName: 'TrendingDown'
  },
  {
    id: 'scattered',
    title: 'Courses & opportunities scattered',
    description: 'Learning tutorials, job boards, internship portals, and project prompts are fragmented across dozens of disconnected websites.',
    iconName: 'Layers'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    phase: 'DISCOVER',
    title: 'Discover Your Trajectory',
    description: 'Students explore career paths aligned with their interests, strengths, current competencies, and aspirations.',
    detail: 'Instead of choosing blind from hundreds of job titles, UNIVA filters down to high-probability career paths suited to your foundation.'
  },
  {
    number: '02',
    phase: 'ANALYZE',
    title: 'Analyze Your Skill Gaps',
    description: 'UNIVA breaks down your current competencies against real industry job standards to highlight exactly what is missing.',
    detail: 'Get a clear, honest breakdown: what you already know, what you need to learn next, and which skills carry the highest market value.'
  },
  {
    number: '03',
    phase: 'BUILD',
    title: 'Build With Personalized Roadmaps',
    description: 'Receive an ordered, milestone-driven roadmap containing curated resources, hands-on projects, and proof checkpoints.',
    detail: 'No more guessing what order to learn. Progress step by step from foundational concepts to capstone portfolio projects.'
  },
  {
    number: '04',
    phase: 'GROW',
    title: 'Grow Into Real Opportunities',
    description: 'Discover relevant internships, entry-level roles, and project sprints mapped directly to the skills you have validated.',
    detail: 'Apply to opportunities where your verified roadmap progress gives you competitive proof and genuine confidence.'
  }
];

export const CORE_FEATURES = [
  {
    title: 'AI Career Discovery',
    description: 'Match interests, technical instincts, and academic backgrounds with viable modern tech and creative roles.',
    icon: 'Sparkles',
    tag: 'Exploration'
  },
  {
    title: 'Skill-Gap Analysis',
    description: 'Visual diagnostic showing the exact distance between your current abilities and industry hiring requirements.',
    icon: 'BarChart3',
    tag: 'Diagnosis'
  },
  {
    title: 'Personalized Roadmaps',
    description: 'Step-by-step milestone curriculum calibrated to your available study hours and current experience level.',
    icon: 'Route',
    tag: 'Execution'
  },
  {
    title: 'Learning Recommendations',
    description: 'Curated courses, interactive sandbox exercises, and portfolio project briefs that build verifiable proof.',
    icon: 'BookOpen',
    tag: 'Curriculum'
  },
  {
    title: 'Opportunity Hub',
    description: 'Targeted internships, entry-level job postings, and project sprints filtered strictly by your roadmap fit.',
    icon: 'Briefcase',
    tag: 'Placement'
  },
  {
    title: 'Progress Tracking',
    description: 'Milestone checkpoints and visual completion tracking to keep you disciplined and interview-ready.',
    icon: 'CheckCircle2',
    tag: 'Accountability'
  }
];

export const WHY_UNIVA_BENEFITS = [
  {
    id: 'personalized',
    title: 'Personalized',
    tagline: 'Built around the individual student',
    description: 'Every student has a different starting point. UNIVA adapts to what you already know rather than forcing you to restart from scratch.',
    icon: 'Sliders'
  },
  {
    id: 'actionable',
    title: 'Actionable',
    tagline: 'Clear next steps, not generic theory',
    description: 'No vague recommendations like "learn coding". UNIVA tells you: "Complete these 3 React hook concepts, then build this specific cart project."',
    icon: 'Target'
  },
  {
    id: 'connected',
    title: 'Connected',
    tagline: 'One unified learning-to-career ecosystem',
    description: 'Guidance, learning materials, capstone portfolio prompts, and internship discovery all live inside a single cohesive environment.',
    icon: 'Network'
  },
  {
    id: 'accessible',
    title: 'Accessible',
    tagline: 'Demystifying career planning for everyone',
    description: 'Designed specifically for college students and fresh graduates who don’t have access to expensive private career coaches or alumni networks.',
    icon: 'HeartHandshake'
  }
];

export const USER_JOURNEY_STAGES = [
  {
    stage: '01',
    state: "I'm confused",
    description: 'Overwhelmed by countless career options, buzzwords, and conflicting advice from social media and peers.',
    statusColor: 'text-amber-600'
  },
  {
    stage: '02',
    state: 'I discover possible careers',
    description: 'Filter through noise and identify 1–2 target career tracks that fit my real interests and strengths.',
    statusColor: 'text-blue-600'
  },
  {
    stage: '03',
    state: 'I understand my skill gaps',
    description: 'See the exact inventory of skills I already have versus what hiring teams actually expect.',
    statusColor: 'text-indigo-600'
  },
  {
    stage: '04',
    state: 'I receive my roadmap',
    description: 'Get an ordered, realistic step-by-step roadmap with timeframes and milestone objectives.',
    statusColor: 'text-purple-600'
  },
  {
    stage: '05',
    state: 'I learn and build projects',
    description: 'Follow curated resources and build verified portfolio projects that prove hands-on competence.',
    statusColor: 'text-cyan-600'
  },
  {
    stage: '06',
    state: 'I discover opportunities',
    description: 'Explore internships and junior roles matched specifically to the skills I’ve unlocked.',
    statusColor: 'text-emerald-600'
  },
  {
    stage: '07',
    state: 'I move toward my career goal',
    description: 'Enter interviews with demonstrable project proof, verified skills, and genuine confidence.',
    statusColor: 'text-emerald-700'
  }
];
