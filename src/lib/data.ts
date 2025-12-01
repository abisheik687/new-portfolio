
import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Zap, Code, Cloud, GitBranch, Brain, ShieldCheck, Cpu, Bot, Layers, MessageCircle, Database, Settings, BarChart, GanttChartSquare, UserCircle, Mail, Smartphone } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export interface TimelineEvent {
  id: string;
  icon: LucideIcon;
  date: string;
  title: string;
  description: string;
  category: 'education' | 'internship';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'green-intern',
    icon: Briefcase,
    date: 'Aug 2025 - Oct 2025',
    title: 'Green Intern (Sustainability & Tech Track)',
    description: 'Contributed to sustainability-focused technology initiatives under the UN-backed 1M1B Future Leaders program. Participated in research and project activities related to environmental awareness, digital solutions, and community impact. Worked on problem statements involving SDGs, analyzing real-world environmental challenges. Developed presentations, project proposals, and tech-enabled mitigation ideas to support green innovation.',
    category: 'internship',
  },
  {
    id: 'seyfert',
    icon: Briefcase,
    date: 'Feb 2025 - Feb 2025',
    title: 'Web Development Intern',
    description: 'At SEYFERT Infotech, developed responsive websites using HTML5 and Bootstrap, and handled multiple tasks collaboratively.',
    category: 'internship',
  },
  {
    id: 'shell-aicte',
    icon: Briefcase,
    date: 'Dec 2024 - Jan 2025',
    title: 'Virtual NLP Intern',
    description: 'For Shell-AICTE, collected and analyzed chatbot intent data, improved chatbot performance using NLP techniques, and supervised its operation on the Streamlit platform.',
    category: 'internship',
  },
  {
    id: 'vei-tech',
    icon: Briefcase,
    date: 'Sept 2024 - Nov 2024',
    title: 'Full-Stack & IoT Development Intern',
    description: 'Built full-stack applications integrating frontend, backend, databases, and APIs. Worked on IoT device integration, sensor communication, and real-time data handling. Created dashboards and data visualization components for IoT outputs. Gained practical experience in development workflows, version control, and deployment techniques. Collaborated in team-based mini-projects following structured engineering practices.',
    category: 'internship',
  },
  {
    id: 'iit-delhi',
    icon: Briefcase,
    date: 'Dec 2023 - Jan 2024',
    title: 'Campus Ambassador',
    description: 'As Campus Ambassador for IIT Delhi, executed marketing campaigns, managed digital accounts, created marketing content, and assisted the head designer.',
    category: 'internship',
  },
  {
    id: 'education-1',
    icon: GraduationCap,
    date: 'Dec 2022 - Present',
    title: 'B.TECH IT',
    description: 'Mailam Engineering College, Villupuram. Currently pursuing with a GPA of 8.1.',
    category: 'education',
  },
];

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon;
  level: number; // 1-100 for proficiency visualization
  category: 'Frontend' | 'AI/NLP' | 'Cloud' | 'Versioning' | 'Other';
}

export const skills: Skill[] = [
  { id: 'python', name: 'Python', icon: Code, level: 90, category: 'AI/NLP' },
  { id: 'html5', name: 'HTML5', icon: Code, level: 95, category: 'Frontend' },
  { id: 'bootstrap', name: 'Bootstrap', icon: Code, level: 85, category: 'Frontend' },
  { id: 'gcp', name: 'Google Cloud Platform', icon: Cloud, level: 80, category: 'Cloud' },
  { id: 'aws-ec2', name: 'AWS EC2', icon: Cloud, level: 75, category: 'Cloud' },
  { id: 'aws-s3', name: 'AWS S3', icon: Cloud, level: 70, category: 'Cloud' },
  { id: 'github', name: 'GitHub', icon: GitBranch, level: 90, category: 'Versioning' },
  { id: 'nlp', name: 'NLP', icon: Brain, level: 85, category: 'AI/NLP' },
  { id: 'problem-solving', name: 'Creative Problem Solving', icon: Zap, level: 95, category: 'Other' },
  { id: 'javascript', name: 'JavaScript', icon: Code, level: 80, category: 'Frontend' },
  { id: 'react', name: 'React', icon: Code, level: 75, category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', icon: Code, level: 70, category: 'Frontend' },
];

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  codePreview: string; // Could be a snippet or link to a gist image
  imageUrl: string;
  livePreviewUrl?: string;
  githubUrl: string;
  downloadUrl?: string;
  tags: string[];
  isFeatured?: boolean;
  problemStatement?: string;
  solution?: string;
  techUsed?: string[];
}

export const projects: Project[] = [
  {
    id: 'intellifix',
    title: 'IntelliFix',
    shortDescription: 'AI Code Debugger with LLM Fix Suggestions. Highest technical depth.',
    codePreview: 'const fix = await llm.suggestFix(errorLog);',
    imageUrl: 'https://placehold.co/600x400.png?text=IntelliFix',
    githubUrl: 'https://github.com/abisheik687/IntelliFix---AI-Code-Debugger-with-LLM-Fix-Suggestions',
    tags: ['AI', 'Full-Stack', 'Tools', 'LLM'],
    isFeatured: true,
    problemStatement: 'Debugging complex codebases is time-consuming and error-prone.',
    solution: 'Automated debugging using LLMs to analyze error logs and suggest code fixes.',
    techUsed: ['Python', 'React', 'OpenAI API', 'Node.js'],
  },
  {
    id: 'talentalign-ai',
    title: 'TalentAlign AI',
    shortDescription: 'AI/NLP System for hiring. Demonstrates hiring-grade system.',
    codePreview: 'const match = nlp.match(resume, jobDescription);',
    imageUrl: 'https://placehold.co/600x400.png?text=TalentAlign+AI',
    githubUrl: 'https://github.com/abisheik687/TalentAlign-AI-system',
    tags: ['AI', 'NLP', 'System Design'],
    isFeatured: true,
    problemStatement: 'Matching candidates to job descriptions manually is inefficient.',
    solution: 'An NLP-powered system to semantically match resumes with job requirements.',
    techUsed: ['Python', 'NLP', 'React', 'FastAPI'],
  },
  {
    id: 'satellite-feature-detection',
    title: 'Satellite Feature Detection',
    shortDescription: 'ML/CV project showing ML capability.',
    codePreview: 'model.predict(satelliteImage);',
    imageUrl: 'https://placehold.co/600x400.png?text=Satellite+ML',
    githubUrl: 'https://github.com/abisheik687/AI-ML-Satellite-Feature-Detection',
    tags: ['ML', 'Computer Vision', 'Python'],
    isFeatured: true,
    problemStatement: 'Manual analysis of satellite imagery is slow and subjective.',
    solution: 'Deep learning models to automatically detect features in satellite images.',
    techUsed: ['Python', 'TensorFlow', 'OpenCV'],
  },
  {
    id: 'stackit-qa',
    title: 'StackIt Q&A',
    shortDescription: 'A Minimal Q&A Forum Platform. Real-world architecture.',
    codePreview: 'const answer = await db.post(questionId, content);',
    imageUrl: 'https://placehold.co/600x400.png?text=StackIt',
    githubUrl: 'https://github.com/abisheik687/StackIt-A-Minimal-Q-A-Forum-Platform',
    tags: ['Full-Stack', 'System Design', 'Web'],
    isFeatured: true,
    problemStatement: 'Need for a lightweight, focused Q&A platform.',
    solution: 'A scalable full-stack Q&A platform with real-time updates.',
    techUsed: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription: 'UI/Frontend proof of Web Dev skills.',
    codePreview: '<Portfolio data={projects} />',
    imageUrl: 'https://placehold.co/600x400.png?text=Portfolio',
    githubUrl: 'https://github.com/abisheik687/portfolio',
    tags: ['UI', 'Frontend', 'React'],
    isFeatured: true,
    problemStatement: 'Showcasing skills and projects effectively.',
    solution: 'A modern, responsive portfolio website built with Next.js.',
    techUsed: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'genalyze-ai',
    title: 'Genalyze-AI',
    shortDescription: 'AI + Analytics. Great supporting project.',
    codePreview: 'const insights = await ai.analyze(data);',
    imageUrl: 'https://placehold.co/600x400.png?text=Genalyze-AI',
    githubUrl: 'https://github.com/abisheik687/genalyze-ai',
    tags: ['AI', 'Analytics', 'Data Science'],
    isFeatured: true,
    problemStatement: 'Extracting insights from large datasets is complex.',
    solution: 'AI-driven analytics tool to generate actionable insights from data.',
    techUsed: ['Python', 'Pandas', 'Scikit-learn'],
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  date: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  { id: 'paloalto', title: 'Palo Alto Cybersecurity', issuer: 'Coursera', imageUrl: 'https://placehold.co/300x200.png?text=Palo+Alto', date: '2023', icon: ShieldCheck },
  { id: 'html5-app', title: 'HTML5 App Development', issuer: 'Certnexus', imageUrl: 'https://placehold.co/300x200.png?text=HTML5+Dev', date: '2022', icon: Code },
  { id: 'fullstack-vps', title: 'Full Stack Workshop', issuer: 'VPS Builders', imageUrl: 'https://placehold.co/300x200.png?text=Full+Stack', date: '2022', icon: Layers },
  { id: 'flutter-iot', title: 'Flutter & IoT', issuer: 'Techobyte, VEI', imageUrl: 'https://placehold.co/300x200.png?text=Flutter+IoT', date: '2021', icon: Smartphone },
  { id: 'iitm-ethics', title: 'IIT Madras Ethical Tech Summit', issuer: 'IIT Madras', imageUrl: 'https://placehold.co/300x200.png?text=Ethical+Tech', date: '2023', icon: Brain },
];


export interface TechTool {
  id: string;
  name: string;
  icon: LucideIcon;
  category: 'Frontend' | 'AI/NLP' | 'Cloud' | 'Versioning' | 'Databases' | 'DevOps' | 'Productivity';
}

export const techStack: TechTool[] = [
  // Frontend
  { id: 'react', name: 'React', icon: Code, category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', icon: Code, category: 'Frontend' },
  { id: 'tailwindcss', name: 'Tailwind CSS', icon: Code, category: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', icon: Code, category: 'Frontend' },
  // AI/NLP
  { id: 'python-ai', name: 'Python', icon: Cpu, category: 'AI/NLP' },
  { id: 'tensorflow', name: 'TensorFlow', icon: Brain, category: 'AI/NLP' },
  { id: 'pytorch', name: 'PyTorch', icon: Brain, category: 'AI/NLP' },
  { id: 'huggingface', name: 'Hugging Face', icon: Bot, category: 'AI/NLP' },
  // Cloud
  { id: 'gcp-main', name: 'GCP', icon: Cloud, category: 'Cloud' },
  { id: 'aws', name: 'AWS', icon: Cloud, category: 'Cloud' },
  { id: 'docker', name: 'Docker', icon: Layers, category: 'DevOps' },
  // Versioning
  { id: 'git', name: 'Git', icon: GitBranch, category: 'Versioning' },
  { id: 'github-tools', name: 'GitHub', icon: GitBranch, category: 'Versioning' },
  // Databases
  { id: 'firebase', name: 'Firebase', icon: Database, category: 'Databases' },
  { id: 'mongodb', name: 'MongoDB', icon: Database, category: 'Databases' },
  // Productivity/Other
  { id: 'vscode', name: 'VS Code', icon: Settings, category: 'Productivity' },
  { id: 'figma', name: 'Figma', icon: Settings, category: 'Productivity' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/abisheik', icon: GitBranch },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/abisheiks', icon: Briefcase },
  { name: 'Email', url: 'mailto:youremail@example.com', icon: Mail },
];

