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
  items: {
    id: number;
    title: string;
    description: string;
  }[];
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
    email: "senicconsultance@gmail.com",
    phone: "+221 76 487 17 40",
    address: "Mbour - Somone Canda, Senegal",
  },
  social: {
    linkedin: "https://linkedin.com/company/senic",
    twitter: "https://twitter.com/senic",
    facebook: "https://facebook.com/senic",
    whatsapp: "https://wa.me/221764871740",
  },
};

export const navigationLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "À Propos", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Objectifs", href: "#aims" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const heroSection: HeroSection = {
  headline: "SENEGAL INGENIERIE ET CONSEILS (S.E.N.I.C.)",
  subheading: "Votre partenaire de confiance pour l'excellence technique",
  description:
    "Nous fournissons des solutions d'ingénierie complètes pour vos projets de construction et d'infrastructure.",
  cta: "En savoir plus",
};

export const heroSection2 = {
  headline: "SERVICES D'INGÉNIERIE PROFESSIONNELS",
  subheading: "Votre partenaire de confiance pour l'excellence technique",
  cta: "En savoir plus",
  backgroundImage:
    "https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2560&auto=format&fit=crop",
  slides: [
    {
      id: 1,
      headline: "SERVICES D'INGÉNIERIE PROFESSIONNELS",
      subheading: "Votre partenaire de confiance pour l'excellence technique",
    },
    {
      id: 2,
      headline: "SOLUTIONS TECHNIQUES INNOVANTES",
      subheading: "Des approches sur mesure pour vos projets de construction",
    },
    {
      id: 3,
      headline: "EXPERTISE MULTIDISCIPLINAIRE",
      subheading:
        "Une équipe dédiée pour accompagner chaque étape de votre projet",
    },
  ],
};

export const aboutSection: AboutSection = {
  title: "A propos de nous (S.E.N.I.C.)",
  description: `SENEGAL INGENIERIE ET CONSEILS (S.E.N.I.C.) est un cabinet d’ingénierie spécialisé dans
l’étude, la conception et la gestion de projets de construction. Fort d’une expertise multidisciplinaire,
nous accompagnons nos clients à chaque étape de leurs projets, en assurant des solutions techniques
adaptées, innovantes et durables.`,
  longDescription: `Notre approche repose sur une vision globale intégrant la faisabilité technique, l’optimisation des coûts
et la gestion efficace des risques. Nous mettons à disposition des maîtres d’ouvrage, entreprises et
institutions, un ensemble de services couvrant les études de conception, le suivi et la gestion de
chantier, le conseil technique, l’audit de structures, le contrôle qualité et la formation.
Notre mission est d’assurer la réussite des projets en garantissant leur conformité aux normes, leur
viabilité financière et leur impact durable. Grâce à une méthodologie rigoureuse et des outils
technologiques avancés tels que le BIM et la modélisation 3D, nous offrons des solutions performantes
pour sécuriser les investissements et optimiser les ressources.
S.E.N.I.C. se positionne ainsi comme un partenaire de confiance pour la réalisation de projets
d’infrastructure et de bâtiment, en alliant expertise technique, innovation et engagement envers la
qualité et la durabilité.`,
  image:
    "https://www.ateliercplusm.com/wp-content/uploads/2020/11/conseil-en-ingenierie-1-scaled.jpeg",
  stats: [
    { value: "3+", label: "Années d'expérience" },
    { value: "10+", label: "Projets réalisés" },
    { value: "5+", label: "Experts qualifiés" },
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
        {
          id: 1,
          title: "Études de faisabilité :",
          description:
            "Analyse des contraintes techniques, environnementales et financières avant le lancement d’un projet.",
        },
        {
          id: 2,
          title: "Conception structurelle :",
          description:
            "Dimensionnement des structures (bâtiments, ponts, routes) en fonction des normes locales et internationales.",
        },
        {
          id: 3,
          title: "Plans d’exécution et dessins techniques :",
          description:
            "Élaboration des plans détaillés pour la construction (béton armé, charpentes métalliques, fondations).",
        },
        {
          id: 4,
          title: "Modélisation 3D et BIM (Building Information Modeling) :",
          description:
            "Visualisation des projets en 3D pour faciliter la coordination entre les différentes parties prenantes.",
        },
      ],
    },
    {
      id: 2,
      title: "Gestion de Projet et Suivi de Chantier",
      icon: Building2,
      description:
        "Planification et gestion des ressources, Suivi et coordination de chantier, Gestion des appels d’offres et des contrats, Gestion des risques",
      items: [
        {
          id: 1,
          title: "Planification et gestion des ressources :",

          description:
            "Élaboration des plannings de travaux, gestion des équipes, allocation des ressources matérielles et humaines.",
        },
        {
          id: 2,
          title: "Suivi et coordination de chantier :",
          description:
            "Supervision quotidienne des travaux, contrôle qualité, respect des délais et des budgets.",
        },
        {
          id: 3,
          title: "Gestion des appels d’offres et des contrats :",
          description:
            "Rédaction des cahiers des charges, analyse des offres, négociation, rédaction et suivi des contrats.",
        },
        {
          id: 4,
          title: "Gestion des risques :",
          description:
            "Identification et anticipation des risques techniques, financiers ou environnementaux.",
        },
      ],
    },
    {
      id: 3,
      title: "Conseil et Assistance Technique",
      icon: Factory,
      description:
        "Assistance à maîtrise d’ouvrage (AMO), Expertise technique et audit de structures, Optimisation des coûts et des matériaux, Conseil en construction durable",
      items: [
        {
          id: 1,
          title: "Assistance à maîtrise d’ouvrage (AMO) :",
          description:
            "Accompagnement du client dans la prise de décision technique et financière tout au long du projet.",
        },
        {
          id: 2,
          title: "Expertise technique et audit de structures :",
          description:
            "Vérification de la conformité des ouvrages existants et recommandations pour des améliorations ou des réparations.",
        },
        {
          id: 3,
          title: "Optimisation des coûts et des matériaux :",
          description:
            "Propositions de solutions techniques pour réduire les coûts sans compromettre la qualité.",
        },
        {
          id: 4,
          title: "Conseil en construction durable :",
          description:
            "Intégration de matériaux écologiques et de solutions énergétiques durables dans les projets.",
        },
      ],
    },
    {
      id: 4,
      title: "Audits techniques et diagnostics de structures",
      icon: Wrench,
      description: "Conception et maintenance d'équipements mécaniques.",
      items: [
        {
          id: 1,
          title: "Audits techniques :",
          description: `Effectuer des inspections et audits techniques pour évaluer l'état des bâtiments et des
infrastructures existantes.`,
        },
        {
          id: 2,
          title: "Diagnostics de structures :",
          description:
            "Identifier les défauts structurels ou les risques potentiels et recommander des actions correctives.",
        },
      ],
    },
    {
      id: 5,
      title: "Contrôle et Qualité",
      icon: Flask,
      description:
        "Contrôle technique des matériaux, Vérification de la conformité aux normes et Gestion des non-conformités et levée des réserves",
      items: [
        {
          id: 1,
          title: "Contrôle technique des matériaux:",
          description:
            "Tests en laboratoire ou sur site pour garantir la qualité des matériaux utilisés (béton, acier, etc.).",
        },
        {
          id: 2,
          title: "Vérification de la conformité aux normes :",
          description:
            "nspections pour s’assurer que les travaux respectent les réglementations locales et internationales.",
        },
        {
          id: 3,
          title: "Gestion des non-conformités et levée des réserves :",
          description: `Suivi des corrections à apporter en cas de
défaillance identifiée lors des inspections.`,
        },
      ],
    },
    {
      id: 6,
      title: "Formation et Sensibilisation",
      icon: Users,
      description:
        "Formation des équipes sur site  et Des Séminaires sur la gestion de projet et la sécurité en chantier",
      items: [
        {
          id: 1,
          title: "Formation des équipes sur site :",
          description: `Sessions de formation pour les ouvriers, techniciens et autres
professionnels sur les bonnes pratiques de construction.`,
        },
        {
          id: 2,
          title: "Séminaires sur la gestion de projet et la sécurité :",
          description: `Organisation de formations pour les chefs de projet
ou les décideurs sur la gestion efficace des chantiers et la sécurité.`,
        },
      ],
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
      name: "Moussa S",
      position: "Particulier",
      company: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mStgAq6UphPdQDqvAGbl9Usi9LSqi1-URQ&s",
      rating: 5,
      content: `J’avais une idée précise du style que je voulais pour ma maison, entre modernité et fonctionnalité. L’équipe de SENIC a su écouter mes besoins et me proposer une conception architecturale à la fois élégante, bien pensée et parfaitement adaptée à mon terrain. Chaque espace a été optimisé, et le rendu final dépasse mes attentes. On sent que c’est un cabinet qui maîtrise à la fois l’esthétique et la technique.`,
    },
    {
      id: 2,
      name: "Oumou StLouis",
      position: "Promotrice immobilière",
      company: "",
      image:
        "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
      rating: 5,
      content: `SENIC ne se contente pas de faire des plans, ils accompagnent vraiment leurs clients. Grâce à eux, j’ai pu constituer un dossier technique solide pour ma banque, avec des plans bien détaillés, un chiffrage précis et un dossier de montage cohérent. Leur expertise a grandement facilité l’obtention de mon crédit immobilier. Franchement, c’est un soutien qu’on ne trouve pas partout. `,
    },
    {
      id: 3,
      name: "OUSMANE S.",
      position: "Particulier",
      company: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mStgAq6UphPdQDqvAGbl9Usi9LSqi1-URQ&s",
      rating: 5,
      content: `Ce que j’ai particulièrement apprécié, c’est leur rigueur sur la gestion des coûts et des quantités. SENIC m’a fourni un métré précis, un plan béton armé détaillé, et même des conseils pour l’approvisionnement en matériaux. Résultat : pas de surprise sur le chantier, et tout s’est déroulé dans le respect du budget. C’est une vraie tranquillité d’esprit.`,
    },
    {
      id: 4,
      name: "Cliente Résidentielle",
      position: "Particulier",
      company: "",
      image:
        "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
      rating: 5,
      content: `Travailler avec SENIC, c’est comme avoir un partenaire de confiance à ses côtés. Ils sont disponibles, à l’écoute, et réactifs à chaque étape du projet. Même après le démarrage des travaux, je pouvais compter sur eux pour répondre à mes questions, adapter les choses si besoin, ou conseiller sur des choix techniques. Cette relation de proximité a vraiment fait la différence.`,
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

export const aimSection = {
  title: "Nos Objectifs",
  description:
    "Accompagnement du client dans la prise de décision technique et financière tout au long du projet",
  aims: [
    "Sécuriser les investissements en assurant que les projets sont techniquement réalisables et financièrement viables.",
    "Optimiser les ressources en termes de temps, de coût, et de matériaux tout en maintenant la qualité.",
    "Minimiser les risques techniques et environnementaux grâce à des études approfondies.",
    "Assurer la conformité avec les normes de construction et de sécurité en vigueur.",
    "Maximiser la durabilité des projets en intégrant des solutions respectueuses de l’environnement et en optimisant l’utilisation des matériaux et des énergies.",
  ],
};

export interface AimSection {
  title: string;
  description: string;
  aims: string[];
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

export const projects = [
  {
    id: 1,
    title: "Villa Moderne Yoff",
    category: "residential",
    year: 2024,
    location: "Yoff, Sénégal",
    client: "SCI MAREMA LO",
    description:
      "Conception et Dimensionnent de la structure en béton armé d’un Immeuble RDC+5 étages+ Terrasse aménagée à Yoff virage. Fondations superficielles sur semelles isolées. Etude validée par le Bureau de contrôle ALPAGES. Septembre novembre 2024",
    tags: ["Béton armé", "Fondations", "Structure"],
    images: [
      "https://res.cloudinary.com/kairemor/image/upload/v1748887878/image1_umt4tg.jpg",
      // "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop",
    ],
    status: "completed",
  },
  {
    id: 2,
    title: "Immeuble RDC+3 étages",
    category: "residential",
    year: 2024,
    location: "Mbour, Sénégal",
    client: "Ndiaga DIOP",
    description:
      "Conception et Dimensionnent de la structure en béton armé d’un Immeuble RDC+3 étages à Mbour . Fondations superficielles sur semelles isolées",
    tags: ["RDC+5", "Complexe sportif", "Fondations superficielles"],
    images: [
      "https://res.cloudinary.com/kairemor/image/upload/v1748990623/image9_qqmvqz.jpg",
      // "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    ],
    status: "completed",
  },
  {
    id: 3,
    title: "Immeuble RDC+2 étages",
    category: "residential",
    year: 2024,
    location: "Thiès, Senégal",
    client: "M. Moussa SOW",
    description:
      "Conception architecturale et Dimensionnent de la structure en béton armé d’un Immeuble RDC+2 étages à Thiès Fondations superficielles sur semelles isolées",
    tags: ["Béton armé", "Fondations profondes", "Parking souterrain"],
    images: [
      "https://res.cloudinary.com/kairemor/image/upload/v1748990633/image3_yo74jq.png",
      // "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&h=600&fit=crop",
    ],
    status: "completed",
  },
  {
    id: 4,
    title: "Villa RDC+1 étages",
    category: "residential",
    year: 2025,
    location: "Sangalkam, Dakar",
    client: "M. Adama DIAGNE",
    description:
      "Ensemble résidentiel de 24 appartements répartis sur 4 bâtiments. Étude complète de structure avec voiles et dalles.",
    tags: ["Résidentiel", "Voiles béton", "Dalles"],
    images: [
      "https://res.cloudinary.com/kairemor/image/upload/v1748990671/image8_eh8xcf.png",
      // "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    ],
    status: "completed",
  },
  {
    id: 5,
    title: "Immeuble RDC+3 étages",
    category: "infrastructure",
    year: 2025,
    location: "Ziguinchor, Sénégal",
    client: "M. Raymond Biagui",
    description:
      "Conception architecturale et Dimensionnent de la structure en béton armé d’un Immeuble RDC+3 étages à Ziguinchor. Fondations superficielles sur semelles isolées",
    tags: ["Béton précontraint", "Pont", "Infrastructure"],
    images: [
      "https://res.cloudinary.com/kairemor/image/upload/v1748990619/image4_pug7hk.png",
      // "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
    ],
    status: "completed",
  },
  {
    id: 6,
    title: "Immeuble RDC+2 étages",
    category: "infrastructure",
    year: 2024,
    location: "Thies, Sénégal",
    client: "M. Saliou Faye",
    description:
      "Conception architecturale et Dimensionnent de la structure en béton armé d’un Immeuble RDC+2 étages à Thies",
    tags: ["Hôtel", "Structure mixte", "Complexe touristique"],
    images: [
      "https://res.cloudinary.com/kairemor/image/upload/v1748990631/image5_z4kj0j.png",
      // "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    ],
    status: "completed",
  },
];

export interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  location: string;
  client: string;
  description: string;
  tags: string[];
  images: string[];
  status: string;
}
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
    street: "Somone Canda, ",
    city: "Mbour",
    country: " Sénégal",
  },
  phone: "+221 76 487 17 40",
  email: "senicconsultance@gmail.com",
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
