import { IconName } from "@/components/Icon";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
}
export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  details: string[];
  features: string[];
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  color: string;
}

export interface SocialLinkType {
  name: string;
  icon: IconName;
  url: string;
}
