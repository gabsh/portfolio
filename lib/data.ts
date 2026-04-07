import { StaticImageData } from "next/image";

export interface Photo {
  name: string;
  image: StaticImageData;
  settings?: { focal?: string; aperture?: string; shutter?: string; iso?: string; };
}

export interface Album {
  id: string;
  title: string;
  photos: Photo[];
}

export const albums: Album[] = [
  {
    id: "work in progress",
    title: "work in progress",
    photos: [
     
    ]
  }
];

export interface Project {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'FSight',
    description: 'RAG pipeline to query SEC 10-K annual filings for major tech companies. Ask questions, select a company, and get answers with source citations.',
    image: '/FSIGHT.png',
    githubLink: 'https://github.com/gabsh/FSight',
    liveLink: 'https://fsight.fr',
    tags: ['RAG', 'FastAPI', 'Vue 3', 'Qdrant', 'OpenAI', 'Docker'],
  },
];

export interface TimelineItem {
  id: string;
  dateRange?: string;
  title: string;
  company: string;
  location?: string;
  description?: string;
  bullets?: string[];
  tags?: string;
  isCurrent: boolean;
  icon?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    dateRange: '2023 – 2025',
    title: 'BPM Developer',
    company: 'JE2D (Energy Design Office)',
    location: 'Lunéville, France',
    description: 'BPM development, API integration and AI-powered automation in an energy design office.',
    bullets: [
      'Designed and optimized business process models using Iterop to enhance production and service delivery based on internal developments and business requirements.',
      'Built an automated ticketing system using Microsoft Power Apps, Power Automate, and Microsoft Graph for support and continuous improvement requests.',
      'Led a proof of concept (POC) for AI-powered data extraction from internal documents (contracts, invoices), including CNN-based signature detection and OCR.',
      'Improved interoperability between CRM (Salesforce), ERP, BPM, and Microsoft Platform tools via API integrations using Postman and Insomnia.',
      'Improved Excel tools with VBA to align with business evolution and service requirements, enhance interoperability between platforms: enable data retrieval and Excel generation directly from Iterop.',
    ],
    tags: 'BPM, Iterop, Power Platform, API Integration, PyTorch',
    isCurrent: false,
    icon: '💼',
  },
  {
    id: '2',
    dateRange: '2023 – 2025',
    title: 'Master\'s in Computer Science Applied to Business Management (MIAGE)',
    company: 'Institut des Sciences du Digital, Management & Cognition (IDMC)',
    location: 'Nancy, France',
    description: 'Specialization in Data, Machine Learning, Business Intelligence, and Software Engineering.',
    bullets: [
      'Advanced coursework in Data Science, Machine Learning, Data Manipulation, and Business Intelligence.',
      'Software Engineering methodologies and Project Management.',
      'Applied data modeling and enterprise information systems.',
    ],
    tags: 'Data Science, Machine Learning, BI, Software Engineering, Project Management',
    isCurrent: false,
    icon: '🎓',
  },
  {
    id: '3',
    dateRange: 'Sept 2022 – Jun 2023',
    title: 'Bachelor\'s in Mathematics and Computer Science Applied to Social Sciences (MIASHS)',
    company: 'Institut des Sciences du Digital, Management & Cognition (IDMC)',
    location: 'Nancy, France',
    description: 'Background in Applied Mathematics, Statistics, and Computer Science.',
    bullets: [
      'Strong foundation in Applied Mathematics and Statistics.',
      'Data analysis, modeling, and programming.',
      'Interdisciplinary approach combining Computer Science and Social Sciences.',
    ],
    tags: 'Mathematics, Statistics, Data Analysis, Programming',
    isCurrent: false,
    icon: '🎓',
  },
  {
    id: '4',
    dateRange: 'Apr–Jun 2022',
    title: 'Web Developer',
    company: 'EMC2 (Agricultural Cooperative)',
    location: 'Bras-sur-Meuse, France',
    description: 'Development of internal web applications and authentication system research.',
    bullets: [
      'Developed internal web applications using JavaScript and PL/SQL with Oracle databases.',
      'Used Bootstrap for responsive and user-friendly interfaces.',
      'Conducted feasibility study and proof-of-concept (POC) for implementing a Single Sign-On (SSO) solution integrated with Active Directory.',
    ],
    tags: 'JavaScript, PL/SQL, Oracle, Bootstrap, SSO, Active Directory',
    isCurrent: false,
    icon: '💼',
  },
  {
    id: '5',
    dateRange: 'Sept 2020 – Jun 2022',
    title: 'Associate Degree in Computer Science (DUT Informatique)',
    company: 'IUT Charlemagne',
    location: 'Nancy, France',
    description: 'Education in Software Development, Databases, Networks, and Systems.',
    bullets: [
      'Software Engineering, Algorithms, and Design Patterns.',
      'Web development and database design.',
      'Strong programming experience and systems fundamentals.',
    ],
    tags: 'Software Engineering, Algorithms, Web Development, Databases, Systems (Linux)',
    isCurrent: false,
    icon: '🎓',
  },
  {
    id: '6',
    title: 'Scientific Baccalaureate',
    company: 'Lycée Marguerite',
    location: 'Verdun, France',
    isCurrent: false,
    icon: '🎓',
  },
];
