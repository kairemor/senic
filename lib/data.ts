import {
  DivideIcon as LucideIcon,
  Building2,
  FlaskRound as Flask,
  Factory,
  Wrench,
  FileSpreadsheet,
  Users,
} from "lucide-react";

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: typeof LucideIcon;
  items: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  content: string;
};
export interface HeroSection {
  headline: string;
  subheading: string;
  description: string;
  cta: string;
}

export interface ServiceSection {
  title: string;
  subtitle: string;
  services: Service[];
}

export interface AboutSection {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  stats: { value: string; label: string }[];
  cta: string;
}

export const siteConfig = {
  name: "SENEGAL INGENIERIE ET CONSEILS",
  shortName: "S.E.N.I.C.",
  description:
    "Cabinet d'ingénierie spécialisé dans l'étude, la conception et la gestion de projets de construction",
  contact: {
    email: "contact@senic.sn",
    phone: "+221 33 xxx xxxx",
    address: "Dakar, Senegal",
  },
  social: {
    linkedin: "https://linkedin.com/company/senic",
    twitter: "https://twitter.com/senic",
    facebook: "https://facebook.com/senic",
  },
};

export const navigationLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "À Propos", href: "#about" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const heroSection: HeroSection = {
  headline: "SENEGAL INGENIERIE ET CONSEILS (S.E.N.I.C.)",
  subheading: "Votre partenaire de confiance pour l'excellence technique",
  description:
    "Nous fournissons des solutions d'ingénierie complètes pour vos projets de construction et d'infrastructure.",
  cta: "En savoir plus",
};

export const aboutSection: AboutSection = {
  title: "About Us",
  description:
    "SENIC est un cabinet d'ingénierie sénégalais spécialisé dans l'étude, la conception et la gestion de projets de construction. Notre expertise couvre tous les aspects de l'ingénierie, de l'étude de faisabilité à la réalisation finale.",
  longDescription:
    "Avec plus de 15 ans d'expérience dans le secteur, nous avons développé une expertise pointue dans la gestion de projets complexes. Notre équipe d'ingénieurs qualifiés s'engage à fournir des solutions innovantes et durables, adaptées aux besoins spécifiques de chaque client. Nous mettons l'accent sur la qualité, la sécurité et l'efficacité dans tous nos projets.",
  image:
    "https://www.ateliercplusm.com/wp-content/uploads/2020/11/conseil-en-ingenierie-1-scaled.jpeg",
  stats: [
    { value: "15+", label: "Années d'expérience" },
    { value: "200+", label: "Projets réalisés" },
    { value: "50+", label: "Experts qualifiés" },
  ],
  cta: "En savoir plus",
};

export const servicesSection: ServiceSection = {
  title: "Nos Services",
  subtitle:
    "Des solutions d'ingénierie complètes pour chaque phase de votre projet",
  services: [
    {
      id: 1,
      title: "Études & Conception",
      icon: FileSpreadsheet,
      description:
        "Études de faisabilité, conception structurelle et documentation technique pour projets de construction.",
      items: [
        "Études de faisabilité",
        "Conception structurelle",
        "Documentation technique",
      ],
    },
    {
      id: 2,
      title: "Gestion de Projet et Suivi de Chantier",
      icon: Building2,
      description:
        "Solutions complètes pour les projets d'infrastructure et de construction.",
      items: [
        "Construction de bâtiments",
        "Infrastructures routières",
        "Ouvrages d'art",
      ],
    },
    {
      id: 3,
      title: "Conseil et Assistance Technique",
      icon: Factory,
      description:
        "Optimisation des processus industriels et conception d'installations.",
      items: [
        "Conception d'usines",
        "Optimisation de processus",
        "Sécurité industrielle",
      ],
    },
    {
      id: 4,
      title: "Audits techniques et diagnostics de structures",
      icon: Wrench,
      description: "Conception et maintenance d'équipements mécaniques.",
      items: [
        "Conception mécanique",
        "Maintenance préventive",
        "Optimisation énergétique",
      ],
    },
    {
      id: 5,
      title: "Contrôle et Qualité",
      icon: Flask,
      description: "Analyses et études pour l'industrie chimique.",
      items: [
        "Analyses de matériaux",
        "Études environnementales",
        "Contrôle qualité",
      ],
    },
    {
      id: 6,
      title: "Formation et Sensibilisation",
      icon: Users,
      description: "Coordination et suivi complet de projets d'ingénierie.",
      items: ["Planification", "Coordination d'équipes", "Suivi budgétaire"],
    },
  ],
};

export interface TestimonialSection {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const testimonialsSection: TestimonialSection = {
  title: "Ce que disent nos clients",
  subtitle: "Témoignages",
  testimonials: [
    {
      id: 1,
      name: "Amadou Diallo",
      position: "Directeur de Projet",
      company: "Construction Dakar SA",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
      rating: 5,
      content:
        "SENIC a démontré une expertise exceptionnelle dans la gestion de notre projet d'infrastructure. Leur équipe professionnelle a dépassé nos attentes.",
    },
    {
      id: 2,
      name: "Marie Sow",
      position: "Architecte en Chef",
      company: "Modern Build Senegal",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
      rating: 5,
      content:
        "La collaboration avec SENIC a été déterminante pour le succès de nos projets. Leur expertise technique et leur professionnalisme sont remarquables.",
    },
    {
      id: 3,
      name: "Ibrahim Ndiaye",
      position: "Directeur Général",
      company: "Industrie Plus",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200",
      rating: 5,
      content:
        "Une équipe d'experts qui comprend vraiment les enjeux de l'industrie au Sénégal. Leur approche innovante a transformé notre production.",
    },
  ],
};

export interface FooterSection {
  companyDescription: string;
  quickLinks: string;
  services: string;
  contact: string;
  newsletter: {
    title: string;
    placeholder: string;
    button: string;
  };
  copyright: string;
  socialMedia: {
    name: string;
    icon: string;
    url: string;
  }[];
}

export const footerSection: FooterSection = {
  companyDescription:
    "Cabinet d'ingénierie spécialisé dans l'étude, la conception et la gestion de projets de construction.",
  quickLinks: "Liens Rapides",
  services: "Services",
  contact: "Contact",
  newsletter: {
    title: "Newsletter",
    placeholder: "Votre email",
    button: "S'abonner",
  },
  copyright: "© 2025 SENEGAL INGENIERIE ET CONSEILS. Tous droits réservés.",
  socialMedia: [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
  ],
};

export interface ContactSection {
  title: string;
  subtitle: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  formFields: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    phone: {
      placeholder: string;
    };
    subject: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    submit: {
      text: string;
    };
  };
  mapLocation: {
    lat: number;
    lng: number;
  };
}

export const contactSection: ContactSection = {
  title: "Contactez-nous",
  subtitle: "Parlons de votre projet",
  address: {
    street: "123 Rue Félix Faure",
    city: "Dakar",
    country: "Sénégal",
  },
  phone: "+221 33 123 45 67",
  email: "contact@senic.sn",
  formFields: {
    name: {
      label: "Nom",
      placeholder: "Votre nom",
    },
    email: {
      label: "Email",
      placeholder: "Votre email",
    },
    phone: {
      placeholder: "Votre numéro",
    },
    subject: {
      label: "Sujet",
      placeholder: "Sujet de votre message",
    },
    message: {
      label: "Message",
      placeholder: "Votre message",
    },
    submit: { text: "Envoyer" },
  },
  mapLocation: {
    lat: 14.6937,
    lng: -17.4441,
  },
};
