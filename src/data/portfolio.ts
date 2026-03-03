export interface Project {
    title: string;
    description: string;
    image: string;
    problem: string;
    solution: string;
    tech: string[];
    liveLink: string;
    githubLink?: string;
    outcome: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
}

export interface SkillCategory {
    title: string;
    skills: string[];
    icon?: string;
}

export const portfolioData = {
    name: "Muhyideen Muhammad ",
    role: "Frontend Developer",
    email: "mmuhyideen1234@gmail.com",
    socials: {
        github: "https://github.com/MMfrontend-developer",
        linkedin: "https://linkedin.com/in/muhammad-muhyideen-dev",
        twitter: "https://x.com/muhyideen_dev"
    },
    skills: [
        {
            title: "Languages & Frameworks",
            skills: ["JavaScript (ES6+)", "TypeScript", "ReactNative", "React.js", "Next.js", "HTML5", "CSS3"]
        },
        {
            title: "Styling & UI",
            skills: ["Tailwind CSS", "Flexbox", "Responsive Design", "shadcn/ui"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "VS Code", "API Integration", "SSR (Next.js)"]
        },
        {
            title: "Soft Skills",
            skills: ["Problem-solving", "Collaboration", "Time Management", "Communication"]
        }
    ] as SkillCategory[],
    experience: [
        {
            company: "Gigs-tech Solutions and Consults",
            role: "Frontend Developer (Remote)",
            period: "Sept 2024 – July 2025",
            location: "Remote",
            highlights: [
                "Delivered high-quality frontend solutions for multiple freelance projects using React, Next.js, TypeScript, and Tailwind CSS.",
                "Developed responsive, scalable, and performance-optimized web applications.",
                "Collaborated closely with clients to translate UI/UX designs into functional interfaces."
            ]
        },
        {
            company: "Miatos Solution",
            role: "Frontend Developer (Remote)",
            period: "March 2023 – June 2024",
            location: "Remote",
            highlights: [
                "Built robust frontend solutions emphasizing performance, usability, and cross-browser compatibility.",
                "Implemented responsive, component-based architectures for scalable applications.",
                "Integrated APIs and ensured seamless UI/UX experiences for end users."
            ]
        }
    ] as Experience[],
    projects: [
        {
            title: "Shapora",
            description: "E-Commerce Web App",
            image: "/ecommerce.png",
            problem: "Needed a modern, responsive e-commerce frontend.",
            solution: "Developed scalable, TypeScript-based Next.js application with dynamic routing, reusable components, and smart product filtering.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
            liveLink: "https://shapora-store.vercel.app/",
            githubLink: "https://github.com/MMfrontend-developer/Shapora-Store",
            outcome: "Seamless user experience across devices with optimized performance and modular architecture for future backend integration."
        },
        {
            title: "BBR_Agency",
            description: "Freelance Collaboration Platform",
            image: "/BBR-Agency.png",
            problem: "Simulate a secure freelance/agency platform for client-service provider collaboration.",
            solution: "Built React-based interface with escrow system, testimonial module, and contact system.",
            tech: ["React", "JavaScript", "CSS3"],
            liveLink: "https://bbr-agency.vercel.app/",
            githubLink: "https://github.com/MMfrontend-developer/BBR_AGENCY",
            outcome: "Fully responsive, modern UI supporting real-world project management simulations."
        },
        {
            title: "OxBank",
            description: "Modern Banking Interface",
            image: "/Oxbank.png",
            problem: "Create a professional fintech interface showcasing dashboards and transaction flows.",
            solution: "Developed modular, theme switcher, reusable UI components with authentication-ready flows.",
            tech: ["React", "JavaScript", "CSS3"],
            liveLink: "https://oxbank-oll1.vercel.app/",
            githubLink: "https://github.com/MMfrontend-developer/OX-BANK",
            outcome: "Optimized for desktop, tablet, and mobile with emphasis on clarity and accessibility."
        },
        {
            title: "Weather Sphere",
            description: "Live Weather App",
            image: "/weather.png",
            problem: "Provide real-time weather data to users.",
            solution: "Integrated OpenWeatherMap API with geolocation support, autocomplete search, and responsive UI.",
            tech: ["HTML5", "JavaScript", "CSS3"],
            liveLink: "http://weather-sphere-gilt.vercel.app",
            githubLink: "https://github.com/MMfrontend-developer/WeatherSphere",
            outcome: "Fast, mobile-friendly, and interactive weather experience with theme switcher and animations"
        },
        {
            title: "Kolomoni Bank Dashboard Clone",
            description: "Banking Dashboard Clone",
            image: "/kolomoni.png",
            problem: "Replicating complex banking UI and transaction flows.",
            solution: "A fully responsive clone of the Kolomoni banking dashboard built with HTML5, CSS3, and JavaScript.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://my-project-rouge-eight-17.vercel.app/",
            githubLink: "https://github.com/MMfrontend-developer/my-project",
            outcome: "Replicating the UI, user flows, and transaction features accurately."
        },
        {
            title: "Scientific Calculator",
            description: "A scientific calculator built with HTML5, CSS3, and JavaScript.",
            image: "/calculator.png",
            problem: "Built complex scientific calculator UI and functionality.",
            solution: "A fully responsive clone of the scientific calculator with theme switcher and real-time clock, built with HTML5, CSS3, and JavaScript.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://my-calculator-theta-murex.vercel.app/",
            githubLink: "https://github.com/MMfrontend-developer/My-Calculator",
            outcome: "A fully responsive scientific calculator with theme switcher and real-time clock."
        }
    ] as Project[]
};
