import { Logo } from "@once-ui-system/core";

const company = {
  name: "MoveInsight",
  role: "AI-Powered Portable Motion Analysis Solutions",
  avatar: "/images/avatar.jpg",
  email: "contact@move-insight.com",
  location: "Global", // Company location
  languages: ["English"], // Company languages
  website: "move-insight.com",
};

const newsletter = {
  display: false, // Disable newsletter for company website
  title: <>Subscribe to {company.name}'s Newsletter</>,
  description: (
    <>
      Stay updated with the latest developments in AI-powered motion analysis technology.
    </>
  ),
};

const social = [
  // Company social media links
  {
    name: "Email",
    icon: "email",
    link: `mailto:${company.email}`,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/moveinsight",
  },
  {
    name: "Website",
    icon: "globe",
    link: company.website,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${company.name} - ${company.role}`,
  description: `AI-driven tools for real-time movement analysis in sports and rehabilitation`,
  headline: <>MoveInsight</>,
  featured: {
    display: false,
    title: <>Latest Innovation: <strong className="ml-4">AI Motion Analysis</strong></>,
    href: "/work/ai-powered-motion-analysis-platform",
  },
  subline: (
    <>
      Portable Intelligent Motion Analysis Solutions
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${company.name}`,
  description: `Learn about ${company.name} and our mission in AI-powered motion analysis`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Disable calendar for company
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Our Mission",
    description: (
      <>
        {company.name} is dedicated to revolutionizing motion analysis through AI technology. 
        We develop portable, intelligent solutions that provide real-time insights for sports science 
        and rehabilitation professionals. Our goal is to make advanced motion analysis accessible, 
        accurate, and actionable for improving human performance and recovery.
      </>
    ),
  },
  work: {
    display: false,
    title: "Our Team",
    experiences: [
      {
        company: "Core Development Team",
        timeframe: "2023 - Present",
        role: "Technical Leadership",
        achievements: [
          <>
            Led the development of AI-powered motion analysis algorithms, achieving 95% accuracy 
            in real-time movement tracking and analysis.
          </>,
          <>
            Designed portable hardware solutions that integrate seamlessly with our AI software 
            platform for comprehensive motion analysis.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "AI Motion Analysis Platform",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Team Members",
    institutions: [
      {
        name: "Ting Long",
        description: <>Ph.D. in Biomedical Engineering - Specializing in algorithm development for motion analysis and computer vision.</>,
      },
      {
        name: "Yiran Jiao",
        description: <>Ph.D. in Sports Science - Expert in developing algorithms for sports analysis and performance evaluation.</>,
      },
      {
        name: "Charlie Gu",
        description: <>Full Stack Engineer - Focused on system architecture and full-stack development for motion analysis platforms.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Technologies",
    skills: [
      {
        title: "AI Motion Analysis",
        description: <>Advanced computer vision algorithms for real-time movement tracking and biomechanical analysis.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "AI Analysis Interface",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Motion Tracking",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Portable Hardware",
        description: <>Lightweight, wireless sensor systems designed for real-world applications in sports and rehabilitation.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Portable Sensors",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights and Updates",
  description: `Latest news and insights from ${company.name}`,
  display: false, // Disable blog section
};

const work = {
  path: "/work",
  label: "Solutions",
  title: `Solutions – ${company.name}`,
  description: `AI-powered motion analysis solutions by ${company.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${company.name}`,
  description: `Visual showcase of ${company.name} solutions`,
  display: false, // Disable gallery section
  images: [],
};

export { company, social, newsletter, home, about, blog, work, gallery };
