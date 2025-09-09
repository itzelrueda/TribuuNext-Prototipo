import { Company } from './types';

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: "Innovatech Solutions",
    logoUrl: "https://picsum.photos/seed/innovatech/200/200?grayscale",
    description: "Innovatech is a pioneer in AI-driven solutions for the tech industry, focusing on machine learning and data analytics. We're looking for bright minds to join our mission.",
    industry: "Technology",
    location: "Silicon Valley, USA",
    vacancies: [
      { title: "Junior Frontend Developer", type: "Full-time" },
      { title: "Data Science Intern", type: "Internship" },
    ],
  },
  {
    id: 2,
    name: "QuantumLeap Dynamics",
    logoUrl: "https://picsum.photos/seed/quantum/200/200?grayscale",
    description: "At QuantumLeap, we're building the future of computing. Our team is dedicated to solving complex problems with cutting-edge technology.",
    industry: "Quantum Computing",
    location: "Zürich, Switzerland",
    vacancies: [
      { title: "Physics Research Intern", type: "Internship" },
      { title: "Software Engineer", type: "Full-time" },
    ],
  },
  {
    id: 3,
    name: "BioGen Health",
    logoUrl: "https://picsum.photos/seed/biogen/200/200?grayscale",
    description: "BioGen Health is at the forefront of biotechnological research, developing innovative therapies to improve human health across the globe.",
    industry: "Biotechnology",
    location: "Boston, USA",
    vacancies: [
      { title: "Lab Technician", type: "Part-time" },
      { title: "Marketing Associate", type: "Full-time" },
    ],
  },
  {
    id: 4,
    name: "StellarForge Games",
    logoUrl: "https://picsum.photos/seed/stellar/200/200?grayscale",
    description: "We create immersive and engaging gaming experiences that captivate players worldwide. Join our creative team and build the next big hit!",
    industry: "Gaming",
    location: "Kyoto, Japan",
    vacancies: [
      { title: "3D Artist Intern", type: "Internship" },
      { title: "Game Designer", type: "Full-time" },
    ],
  },
  {
    id: 5,
    name: "EcoVerve",
    logoUrl: "https://picsum.photos/seed/ecoverve/200/200?grayscale",
    description: "Our mission is to build a sustainable future through renewable energy solutions and eco-friendly products. Make a difference with us.",
    industry: "Sustainability",
    location: "Freiburg, Germany",
    vacancies: [
      { title: "Environmental Engineer", type: "Full-time" },
      { title: "Sales Intern", type: "Internship" },
    ],
  },
  {
    id: 6,
    name: "Nexus Finance",
    logoUrl: "https://picsum.photos/seed/nexus/200/200?grayscale",
    description: "Nexus Finance is a global fintech leader, providing secure and innovative financial services to millions of customers.",
    industry: "Finance",
    location: "London, UK",
    vacancies: [
      { title: "Financial Analyst", type: "Full-time" },
      { title: "Cybersecurity Intern", type: "Internship" },
    ],
  },
];
