export const portfolioCategories = [
  "All Categories",
  "Corporate & Business",
  "Corporate Website",
  "E-Commerce",
  "Education & Consulting",
  "Health & Wellness",
  "Health, Beauty & Wellness",
  "Hotel Website",
  "Real Estate & Construction",
  "Travel & Hospitality",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioProject = {
  id: string;
  title: string;
  client: string;
  category: Exclude<PortfolioCategory, "All Categories">;
  description: string;
  image: string;
  url: string;
  featured?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "templepure-incense",
    title: "TemplePure Incense",
    client: "TemplePure (SS Enterprises)",
    category: "E-Commerce",
    description:
      "A sustainable e-commerce store developed for TemplePure, selling premium charcoal-free incense and organic products handcrafted from re.",
    image: "/portfolio/templepure-incense.png",
    url: "https://templepureincense.com/",
    featured: true,
  },
  {
    id: "packagingbazaar",
    title: "PackagingBazaar",
    client: "PackagingBazaar",
    category: "E-Commerce",
    description:
      "A dedicated B2B e-commerce marketplace developed for PackagingBazaar, connecting buyers directly with verified sellers for premium pack.",
    image: "/portfolio/packagingbazaar.png",
    url: "https://packagingbazaar.co.in/",
    featured: true,
  },
  {
    id: "synq-platform",
    title: "SYNQ Platform",
    client: "SYNQ Platform",
    category: "Corporate & Business",
    description:
      "A modern B2B SaaS website developed for SYNQ Platform, a business health intelligence tool that monitors risk, revenue churn, and team.",
    image: "/portfolio/synq-platform.png",
    url: "https://synqplatform.com/",
    featured: true,
  },
  {
    id: "pressvac-engineering",
    title: "PRESSVAC Engineering",
    client: "PRESSVAC",
    category: "Corporate & Business",
    description:
      "A professional B2B corporate website developed for PRESSVAC, a trusted provider of industrial vacuum pumps, compressors, and precision.",
    image: "/portfolio/pressvac-engineering.png",
    url: "https://pressvac.com/",
    featured: true,
  },
  {
    id: "northern-railway-i-card-portal",
    title: "Northern Railway I-Card Portal",
    client: "Northern Railway - Moradabad Division",
    category: "Corporate & Business",
    description:
      "A secure Smart Identity Card generation portal developed for the Personnel Department of Northern Railway (Moradabad Division) for seam.",
    image: "/portfolio/northern-railway-i-card-portal.png",
    url: "http://idmbdiv.in/",
  },
  {
    id: "navkaar-real-estate",
    title: "Navkaar Real Estate",
    client: "Navkaar Real Estate",
    category: "Real Estate & Construction",
    description:
      "A professional real estate property portal developed for Navkaar Real Estate, showcasing premium luxury apartments, villas, and commerc.",
    image: "/portfolio/navkaar-real-estate.png",
    url: "https://navkaarrealestate.com/",
    featured: true,
  },
  {
    id: "glow-makeover",
    title: "Glow Makeover",
    client: "Glow Makeover",
    category: "Health & Wellness",
    description:
      "A professional beauty and salon-at-home booking platform developed for Glow Makeover, offering premium bridal makeup, party styling, an.",
    image: "/portfolio/glow-makeover.png",
    url: "https://glowmakeover.co.in/",
    featured: true,
  },
  {
    id: "yukti-arya",
    title: "Yukti Arya",
    client: "Yukti Arya",
    category: "Health, Beauty & Wellness",
    description:
      "A professional personal branding and consultation website developed for Yukti Arya, offering expert services in Vastu Shastra, Astrolog.",
    image: "/portfolio/yukti-arya.png",
    url: "https://yuktiarya.com/",
  },
  {
    id: "quick-construction-solutions",
    title: "Quick Construction Solutions",
    client: "Quick Construction Solutions Pvt. Ltd.",
    category: "Real Estate & Construction",
    description:
      "A professional corporate website developed for Quick Construction Solutions, showcasing their services in residential and commercial bu.",
    image: "/portfolio/quick-construction-solutions.png",
    url: "http://quickconstructionsolutions.com/",
  },
  {
    id: "1scoop-protein",
    title: "1Scoop Protein",
    client: "1Scoop Protein",
    category: "E-Commerce",
    description:
      "A modern e-commerce platform developed for 1Scoop Protein, offering 100% authentic fitness supplements, whey protein, and sports nutrit.",
    image: "/portfolio/1scoop-protein.png",
    url: "https://1scoopprotein.com/",
  },
  {
    id: "bohosaaz-marketplace",
    title: "Bohosaaz Marketplace",
    client: "Bohosaaz",
    category: "E-Commerce",
    description:
      "A multi-vendor e-commerce marketplace developed for Bohosaaz, designed to showcase and sell premium handcrafted apparel, jewelry, and a.",
    image: "/portfolio/bohosaaz-marketplace.png",
    url: "https://bohosaaz.com/en",
    featured: true,
  },
  {
    id: "dps-palladio",
    title: "DPS Palladio",
    client: "BP Infra Group",
    category: "Real Estate & Construction",
    description:
      "A dedicated real estate microsite developed for DPS Palladio by BP Infra Group, showcasing their premium 2.5, 3, and 4 BHK luxury apart.",
    image: "/portfolio/dps-palladio.png",
    url: "https://dpspalladio.in/",
  },
  {
    id: "bp-infra-group",
    title: "BP Infra Group",
    client: "BP Infra Group",
    category: "Real Estate & Construction",
    description:
      "A professional corporate and real estate website developed for BP Infra Group, showcasing their luxury and affordable housing projects.",
    image: "/portfolio/bp-infra-group.png",
    url: "https://bpinfragroup.com/",
  },
  {
    id: "wizmytrip",    title: "WizMyTrip",
    client: "WizMyTrip Pvt. Ltd.",
    category: "Travel & Hospitality",
    description:
      "A comprehensive travel and tour booking portal developed for WizMyTrip, offering customized holiday packages, MICE corporate tours, and.",
    image: "/portfolio/wizmytrip.png",
    url: "https://wizmytrip.com/",
  },
  {
    id: "yogsaathi",
    title: "YogSaathi",
    client: "YogSaathi (Healthy Horizons Pvt. Ltd.)",
    category: "Health & Wellness",
    description:
      "A comprehensive online yoga and wellness platform developed for YogSaathi, offering live daily sessions, flexible memberships, and holi.",
    image: "/portfolio/yogsaathi.png",
    url: "https://yogsaathi.com/",
    featured: true,
  },
  {
    id: "hotel-caravan-centre",
    title: "Hotel Caravan Centre",
    client: "Hotel Caravan Centre, Leh",
    category: "Hotel Website",
    description:
      "A premium hospitality and hotel booking website developed for Hotel Caravan Centre, showcasing their luxury stays, modern amenities, an.",
    image: "/portfolio/hotel-caravan-centre.png",
    url: "https://www.hotelcaravancentre.com/",
  },
  {
    id: "quick-construction-solutions-2",
    title: "Quick Construction Solutions",
    client: "Quick Construction Solutions Pvt. Ltd.",
    category: "Real Estate & Construction",
    description:
      "A professional corporate website developed for Quick Construction Solutions, showcasing their services in residential and commercial bu.",
    image: "/portfolio/quick-construction-solutions.png",
    url: "http://quickconstructionsolutions.com/",
  },
  {
    id: "optimyz-learning",
    title: "Optimyz Learning",
    client: "Optimyz Learning",
    category: "Education & Consulting",
    description:
      "A modern educational and coaching platform developed for Optimyz Learning, offering courses on personality development, communication s.",
    image: "/portfolio/optimyz-learning.png",
    url: "https://optimyzlearning.com/",
    featured: true,
  },
  {
    id: "aimascend",
    title: "AimAscend",
    client: "Aim & Ascend",
    category: "Education & Consulting",
    description:
      "A modern educational and career counseling portal developed for Aim & Ascend, offering study abroad guidance, immigration services, and.",
    image: "/portfolio/aimascend.png",
    url: "https://aimascend.com/",
  },
  {
    id: "trippyjiffy",
    title: "TrippyJiffy",
    client: "TrippyJiffy Travel",
    category: "Travel & Hospitality",
    description:
      "A modern and responsive travel website developed for TrippyJiffy, designed to showcase travel packages, global destinations, and curate.",
    image: "/portfolio/trippyjiffy.png",
    url: "https://www.trippyjiffy.com/",
    featured: true,
  },
  {
    id: "admissionjagran-advisory",
    title: "AdmissionJagran Advisory",
    client: "AdmissionJagran Advisory",
    category: "Education & Consulting",
    description:
      "A dynamic educational consultancy portal developed for AdmissionJagran Advisory, offering expert college admission guidance, course sho.",
    image: "/portfolio/admissionjagran-advisory.png",
    url: "https://www.admissionjagran.com/",
  },
  {
    id: "soulheart-global-consulting",
    title: "SoulHeart Global Consulting",
    client: "SoulHeart Global",
    category: "Corporate & Business",
    description:
      "A professional corporate and recruitment portal developed for SoulHeart Global Consulting, offering executive search, global sourcing,.",
    image: "/portfolio/soulheart-global-consulting.png",
    url: "http://soulheartglobalconsulting.com/",
  },
  {
    id: "onog-group",
    title: "ONOG Group",
    client: "ONOG Group",
    category: "Corporate & Business",
    description:
      "A comprehensive corporate portal developed for ONOG Group, an Indian conglomerate, showcasing their diverse business verticals includin.",
    image: "/portfolio/onog-group.png",
    url: "https://onoggroup.com/",
  },
  {
    id: "onog-industries",
    title: "ONOG Industries",
    client: "ONOG Industries Limited",
    category: "Corporate & Business",
    description:
      "A dynamic and modern corporate website developed for ONOG Industries Limited, showcasing their initiatives in Green Energy, Real Estate.",
    image: "/portfolio/onog-industries.png",
    url: "https://onogindustries.com/",
  },
  {
    id: "spexio-technologies",
    title: "Spexio Technologies",
    client: "Spexio Technologies Pvt. Ltd.",
    category: "Corporate & Business",
    description:
      "A professional corporate portal developed for Spexio Technologies, offering staff augmentation, IT modernization, and comprehensive rec.",
    image: "/portfolio/spexio-technologies.png",
    url: "https://spexiotech.com/",
  },
  {
    id: "nca-it-solution",
    title: "NCA IT Solution",
    client: "NCA IT Solution Noida",
    category: "Corporate & Business",
    description:
      "A professional corporate and educational platform developed for NCA IT Solution Noida, showcasing their software development services a.",
    image: "/portfolio/nca-it-solution.png",
    url: "https://ncaitnoida.com/",
  },
  {
    id: "gyan-bharti-coaching",
    title: "Gyan Bharti Coaching",
    client: "Gyan Bharti Coaching",
    category: "Education & Consulting",
    description:
      "A modern and responsive educational website developed for Gyan Bharti Coaching, an institute specializing in competitive exam preparati.",
    image: "/portfolio/gyan-bharti-coaching.png",
    url: "https://gyanbharticoaching.in/",
  },
  {
    id: "aqms-consulting",
    title: "AQMS Consulting",
    client: "AQMS Consulting Pvt. Ltd.",
    category: "Corporate Website",
    description:
      "A professional corporate website developed for AQMS Consulting to showcase their business transformation, operational excellence, and t.",
    image: "/portfolio/aqms-consulting.png",
    url: "https://aqms.in/",
  },
  {
    id: "pulchritudo",
    title: "Pulchritudo",
    client: "Pulchritudo",
    category: "E-Commerce",
    description:
      "A visually stunning and responsive e-commerce platform developed for Pulchritudo, showcasing premium beauty, skincare, and wellness pro.",
    image: "/portfolio/pulchritudo.png",
    url: "https://pulchritudo.in/",
  },
  {
    id: "hotel-park-regency",
    title: "Hotel Park Regency",
    client: "Hotel Park Regency",
    category: "Travel & Hospitality",
    description:
      "A premium hotel booking and hospitality website developed for Hotel Park Regency to showcase their luxury rooms, dining, and event spac.",
    image: "/portfolio/hotel-park-regency.png",
    url: "https://parkregency.in/",
  },
  {
    id: "cielo-coatings",
    title: "Cielo Coatings",
    client: "Cielo Coatings (Cielo Petro Chemicals)",
    category: "Corporate Website",
    description:
      "A professional B2B corporate website developed for Cielo Coatings to showcase their premium wood, metal, and glass coating products.",
    image: "/portfolio/cielo-coatings.png",
    url: "https://cielocoatings.com/",
  },
  {
    id: "aulnova-techsoft",
    title: "AulNova Techsoft",
    client: "AulNova Techsoft",
    category: "Corporate Website",
    description:
      "A professional corporate website developed for AulNova Techsoft, an IT services company, to showcase their software development, AI sol.",
    image: "/portfolio/aulnova-techsoft.png",
    url: "https://aulnovatechsoft.com/",
  },
  {
    id: "avyanta-hotels",
    title: "Avyanta Hotels",
    client: "Avyanta Hotels",
    category: "Travel & Hospitality",
    description:
      "A modern and responsive hotel booking website developed for Avyanta Hotels, showcasing luxury stays with a seamless online reservation.",
    image: "/portfolio/avyanta-hotels.png",
    url: "https://avyantahotels.com/",
  },
  {
    id: "cadets-academy",
    title: "Cadets Academy",
    client: "Bhardwaj Sir",
    category: "Education & Consulting",
    description:
      "High-performance educational website developed for Cadets Academy, Delhi’s premier coaching institute for NDA, CDS, and SSB Interviews..",
    image: "/portfolio/cadets-academy.png",
    url: "https://cadetsacademy.com/",
  },
  {
    id: "templepure-incense-2",
    title: "Templepure Incense",
    client: "Templepure Incense",
    category: "E-Commerce",
    description:
      "We developed a modern e-commerce website for Temple Pure Incense, designed to showcase and sell natural incense sticks and cones with a.",
    image: "/portfolio/templepure-incense.png",
    url: "https://templepureincense.com/",
  },
  {
    id: "tirppyjiffy",
    title: "TirppyJiffy",
    client: "TirppyJiffy",
    category: "Travel & Hospitality",
    description:
      "We developed a modern and responsive travel website for Trippy Jiffy, designed to showcase travel packages, destinations, and experienc.",
    image: "/portfolio/tirppyjiffy.jpg",
    url: "https://trippyjiffy.com/",
  },
  {
    id: "indiva-hospitality",
    title: "Indiva Hospitality",
    client: "Indiva Hospitality",
    category: "Travel & Hospitality",
    description:
      "We developed a modern and fully responsive hotel website for Indiva Hospitality using React and Node.js, focusing on seamless user expe.",
    image: "/portfolio/indiva-hospitality.jpg",
    url: "https://indivahospitality.com/",
  },
  {
    id: "onog-industries-2",
    title: "ONOG Industries",
    client: "ONOG Industries",
    category: "Corporate & Business",
    description:
      "We developed a modern and responsive corporate website for ONOG Industries, focusing on clean design, user-friendly navigation, and cle.",
    image: "/portfolio/onog-industries.jpg",
    url: "https://onogindustries.in/",
  },
];

export const portfolioStats = {
  activeProjects: portfolioProjects.length,
  featuredWork: portfolioProjects.filter((project) => project.featured).length,
  categories: portfolioCategories.length - 1,
  label: "360°",
  labelText: "Digital Solutions",
};
