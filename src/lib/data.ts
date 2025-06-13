
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
    id: 'iit-delhi',
    icon: Briefcase,
    date: 'Jun 2023 - Jul 2023',
    title: 'Digital Marketing Campaigns Intern',
    description: 'Developed and executed digital marketing strategies for IIT Delhi outreach programs.',
    category: 'internship',
  },
  {
    id: 'shell-aicte',
    icon: Briefcase,
    date: 'Jan 2023 - Apr 2023',
    title: 'NLP Chatbot Optimization Intern',
    description: 'Enhanced NLP models for Shell-AICTE chatbot, improving response accuracy and user engagement.',
    category: 'internship',
  },
  {
    id: 'seyfert',
    icon: Briefcase,
    date: 'Oct 2022 - Dec 2022',
    title: 'Frontend Website Development Intern',
    description: 'Designed and developed responsive user interfaces for SEYFERT Infotech client projects.',
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
    id: 'nlp-chatbot',
    title: 'Advanced NLP Chatbot',
    shortDescription: 'Optimized a conversational AI for enhanced user interaction and accuracy.',
    codePreview: `class Chatbot:\n  def __init__(self, model_name):\n    self.model = load_model(model_name)\n\n  def respond(self, query):\n    # Advanced NLP processing\n    return self.model.predict(query)`,
    imageUrl: 'https://placehold.co/600x400.png?text=NLP+Chatbot',
    livePreviewUrl: '#',
    githubUrl: '#',
    tags: ['Python', 'NLP', 'AI', 'Chatbot'],
    isFeatured: true,
    problemStatement: 'Existing chatbot solutions lacked nuanced understanding and context retention, leading to suboptimal user experiences.',
    solution: 'Implemented a state-of-the-art NLP pipeline incorporating attention mechanisms and fine-tuned language models to improve contextual awareness and response generation. Integrated with a scalable backend infrastructure.',
    techUsed: ['Python', 'TensorFlow/Keras', 'NLTK', 'Flask', 'Docker', 'GCP Vertex AI'],
  },
  {
    id: 'portfolio-v2',
    title: 'This Developer Portfolio',
    shortDescription: 'A hyper-realistic portfolio showcasing full-stack and AI development skills.',
    codePreview: `import React from 'react';\n\nconst Portfolio = () => {\n  return (\n    <Layout>\n      <HeroSection />\n      <ProjectsSection />\n    </Layout>\n  );\n};`,
    imageUrl: 'https://placehold.co/600x400.png?text=Portfolio+V2',
    githubUrl: '#',
    tags: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'GenAI'],
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform UI',
    shortDescription: 'Frontend for a modern e-commerce website with a focus on UX.',
    codePreview: `function ProductCard({ product }) {\n  return (\n    <div className="card">\n      <img src={product.image} />\n      <h3>{product.name}</h3>\n    </div>\n  );\n}`,
    imageUrl: 'https://placehold.co/600x400.png?text=E-commerce+UI',
    livePreviewUrl: '#',
    githubUrl: '#',
    tags: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
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

