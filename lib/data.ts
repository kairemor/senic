import { DivideIcon as LucideIcon, Building2, FlaskRound as Flask, Factory, Wrench, FileSpreadsheet, Users } from 'lucide-react';

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
};

export const siteConfig = {
  name: "SENEGAL INGENIERIE ET CONSEILS",
  shortName: "S.E.N.I.C.",
  description: "Cabinet d'ingénierie spécialisé dans l'étude, la conception et la gestion de projets de construction",
  contact: {
    email: "contact@senic.sn",
    phone: "+221 33 xxx xxxx",
    address: "Dakar, Senegal"
  },
  social: {
    linkedin: "https://linkedin.com/company/senic",
    twitter: "https://twitter.com/senic",
    facebook: "https://facebook.com/senic"
  }
};

export const navigationLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "À Propos", href: "#about" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const heroSection = {
  headline: "PROFESSIONAL ENGINEERING SERVICES",
  subheading: "Votre partenaire de confiance pour l'excellence technique",
  description: "Nous fournissons des solutions d'ingénierie complètes pour vos projets de construction et d'infrastructure.",
  cta: "En savoir plus"
};

export const aboutSection = {
  title: "About Us",
  description: "SENIC est un cabinet d'ingénierie sénégalais spécialisé dans l'étude, la conception et la gestion de projets de construction. Notre expertise couvre tous les aspects de l'ingénierie, de l'étude de faisabilité à la réalisation finale.",
  longDescription: "Avec plus de 15 ans d'expérience dans le secteur, nous avons développé une expertise pointue dans la gestion de projets complexes. Notre équipe d'ingénieurs qualifiés s'engage à fournir des solutions innovantes et durables, adaptées aux besoins spécifiques de chaque client. Nous mettons l'accent sur la qualité, la sécurité et l'efficacité dans tous nos projets.",
  image: "https://images.unsplash.com/photo-1581094794329-c8112c37f11f?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { value: "15+", label: "Années d'expérience" },
    { value: "200+", label: "Projets réalisés" },
    { value: "50+", label: "Experts qualifiés" }
  ],
  cta: "En savoir plus"
};

export const servicesSection = {
  title: "Nos Services",
  subtitle: "Des solutions d'ingénierie complètes pour chaque phase de votre projet",
  services: [
    {
      id: 1,
      title: "Études & Conception",
      icon: FileSpreadsheet,
      description: "Études de faisabilité, conception structurelle et documentation technique pour projets de construction.",
      items: [
        "Études de faisabilité",
        "Conception structurelle",
        "Documentation technique"
      ]
    },
    {
      id: 2,
      title: "Génie Civil",
      icon: Building2,
      description: "Solutions complètes pour les projets d'infrastructure et de construction.",
      items: [
        "Construction de bâtiments",
        "Infrastructures routières",
        "Ouvrages d'art"
      ]
    },
    {
      id: 3,
      title: "Génie Industriel",
      icon: Factory,
      description: "Optimisation des processus industriels et conception d'installations.",
      items: [
        "Conception d'usines",
        "Optimisation de processus",
        "Sécurité industrielle"
      ]
    },
    {
      id: 4,
      title: "Génie Mécanique",
      icon: Wrench,
      description: "Conception et maintenance d'équipements mécaniques.",
      items: [
        "Conception mécanique",
        "Maintenance préventive",
        "Optimisation énergétique"
      ]
    },
    {
      id: 5,
      title: "Recherche Chimique",
      icon: Flask,
      description: "Analyses et études pour l'industrie chimique.",
      items: [
        "Analyses de matériaux",
        "Études environnementales",
        "Contrôle qualité"
      ]
    },
    {
      id: 6,
      title: "Gestion de Projets",
      icon: Users,
      description: "Coordination et suivi complet de projets d'ingénierie.",
      items: [
        "Planification",
        "Coordination d'équipes",
        "Suivi budgétaire"
      ]
    }
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amadou Diallo",
    role: "Directeur de Projet",
    company: "Construction Dakar SA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
    rating: 5,
    quote: "SENIC a démontré une expertise exceptionnelle dans la gestion de notre projet d'infrastructure. Leur équipe professionnelle a dépassé nos attentes."
  },
  {
    id: 2,
    name: "Marie Sow",
    role: "Architecte en Chef",
    company: "Modern Build Senegal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
    rating: 5,
    quote: "La collaboration avec SENIC a été déterminante pour le succès de nos projets. Leur expertise technique et leur professionnalisme sont remarquables."
  },
  {
    id: 3,
    name: "Ibrahim Ndiaye",
    role: "Directeur Général",
    company: "Industrie Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200",
    rating: 5,
    quote: "Une équipe d'experts qui comprend vraiment les enjeux de l'industrie au Sénégal. Leur approche innovante a transformé notre production."
  }
];