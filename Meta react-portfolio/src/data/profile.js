import {
    Code2,
    Server,
    Palette,
    Cpu
} from "lucide-react";

export const PROFILE = {
    name: "Moses Obaseki",
    nickname: "Mo",
    title: "Senior Full-Stack Developer",
    summaryItems: [
        "Backend & Infrastructure Enthusiast",
        "High-Fidelity Frontend Engineer",
        "Open to Remote & Onsite roles",
        "Solving complex problems at scale"
    ],
    location: "Lagos, NG • Remote & Onsite",
    email: "obsmoses@gmail.com",
    phone: "+234 (916) 587 7240",
    website: "https://obsmoses.page.gd",
    status: "Available for new opportunities",
    socials: {
        github: "https://github.com/blade-code",
        linkedin: "https://linkedin.com/in/moses",
    },
};

export const METRICS = [
    { label: "Years", value: "10+", hint: "Shipping production systems" },
    { label: "Speed", value: "40%", hint: "Faster load after migration" },
    { label: "Builds", value: "30+", hint: "Client apps delivered" },
    { label: "Perf", value: "100/100", hint: "Lighthouse score (Next.js)" },
];

export const SKILLS = [
    { group: "Core", icon: Code2, items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"] },
    { group: "Backend", icon: Server, items: ["Rust", "Python", "PHP", "Laravel", "Express.js", "FastAPI"] },
    { group: "Design", icon: Palette, items: ["UI/UX", "Figma", "Photoshop", "Responsive Design"] },
    { group: "Infrastructure", icon: Cpu, items: ["AWS", "Docker", "Firebase", "CI/CD", "Security Analysis"] }
];

export const CERTS = [
    "AWS Certified Developer Associate",
    "Google Professional UI/UX Design Certificate",
    "FreeCodeCamp Full-Stack Developer",
    "Coursera Ethical Hacker Certificate",
];