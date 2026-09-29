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
    tags: ['RAG', 'FastAPI', 'Vue 3', 'Qdrant', 'OpenAI', 'Docker', 'Kubernetes'],
  },
  {
    name: 'MLens',
    description: 'Sentiment classification benchmark comparing embedding × classifier combinations (TF-IDF, BoW, LR, SVM, LightGBM, XGBoost…) on the Stanford IMDB dataset. Tracks experiments with MLflow and serves predictions with LIME explanations via FastAPI and a Vue 3 frontend.',
    image: '/MLENS.png',
    githubLink: 'https://github.com/gabsh/mlens',
    liveLink: 'https://mlens.fr',
    tags: ['FastAPI', 'Vue 3', 'scikit-learn', 'MLflow', 'LIME', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Palettify',
    description: 'Abandoned : Tool that extracts visual identity of any website from its URL. Takes a screenshot via Playwright, for now only runs color quantization, and caches results in PostgreSQL. Includes a library browsing past analyses.',
    githubLink: 'https://github.com/gabsh/palettify',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Playwright', 'Docker', 'Kubernetes'],
  },
];

export const profile = {
  role: 'Full-Stack Developer',
  intro:
    "Graduate of a Master's degree in MIAGE (software engineering & data science track). I mainly work with Python (FastAPI) and Spring Boot, complemented by frontend frameworks (Vue, Angular) — skills built through work-study, internships, and personal projects deployed on my own VPS (Docker, Kubernetes, GitHub Actions). Self-taught, curious, and actively following the tech ecosystem.",
  contacts: {
    email: 'gabin.hemm@gmail.com',
    linkedin: 'https://linkedin.com/in/gabin-hemmerle',
    github: 'https://github.com/gabsh',
  },
};

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['Java (Spring Boot / Hibernate)', 'REST APIs', 'Python (FastAPI, Flask)', 'VBA', 'PHP', 'Golang (Gin)'],
  },
  {
    category: 'Frontend',
    items: ['Node.js / Bun', 'Angular', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Svelte'],
  },
  {
    category: 'Data Science',
    items: ['Python (Pandas, Scikit-Learn, PyTorch, NumPy)', 'Supervised & unsupervised ML', 'MLflow', 'Qlik Sense', 'Alteryx', 'KNIME'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'NGINX', 'Git', 'Linux (Ubuntu / WSL)', 'Prometheus', 'Ansible', 'Power Platform'],
  },
];
