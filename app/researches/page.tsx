import HeroSection from "./_components/HeroSection";
import ResearchesTab from "./_components/ResearchesTab";

export interface ResearchArticle {
  id: number;
  author: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
}

// mock data
const mostRecentArticles: ResearchArticle[] = [
  {
    id: 1,
    author: "HealthTech Daily",
    title: "AI Predicts Diabetes Risk Years Before Symptoms",
    description:
      "Predictive algorithms identify early risk markers, helping doctors intervene sooner and prevent complications.",
    date: "Feb 2, 2025",
    image: "/news-1.png",
    tags: ["#Diagnostics", "#Anesthesia", "#Predictive Models"],
  },
  {
    id: 2,
    author: "MedAI Reports",
    title: "Machine Learning Significantly Boosts Cancer Detection Accuracy",
    description:
      "Deep learning models outperform traditional scans, catching tumors at earlier stages and improving survival chances.",
    date: "Feb 2, 2025",
    image: "/news-2.png",
    tags: ["#Medical Imaging", "#Radiology"],
  },
  {
    id: 3,
    author: "Future Medicine AI",
    title: "AI Tools Rapidly Speed Up Rare Disease Diagnosis",
    description:
      "Automated pattern recognition cuts diagnostic delays, giving patients faster access to care and specialist treatment.",
    date: "Feb 1, 2025",
    image: "/news-3.png",
    tags: ["#Diagnostics", "#Predictive Models"],
  },
  {
    id: 4,
    author: "HealthTech Daily",
    title: "AI Predicts Diabetes Risk Years Before Symptoms",
    description:
      "Predictive algorithms identify early risk markers, helping doctors intervene sooner and prevent complications.",
    date: "Feb 2, 2025",
    image: "/news-4.png",
    tags: ["#Diagnostics", "#Anesthesia", "#Predictive Models"],
  },
  {
    id: 6,
    author: "Future Medicine AI",
    title: "AI Tools Rapidly Speed Up Rare Disease Diagnosis",
    description:
      "Automated pattern recognition cuts diagnostic delays, giving patients faster access to care and specialist treatment.",
    date: "Feb 1, 2025",
    image: "/news-6.png",
    tags: ["#Diagnostics", "#Predictive Models"],
  },
  {
    id: 7,
    author: "HealthTech Daily",
    title: "AI Predicts Diabetes Risk Years Before Symptoms",
    description:
      "Predictive algorithms identify early risk markers, helping doctors intervene sooner and prevent complications.",
    date: "Feb 2, 2025",
    image: "/news-7.png",
    tags: ["#Diagnostics", "#Anesthesia", "#Predictive Models"],
  },
  {
    id: 8,
    author: "MedAI Reports",
    title: "Machine Learning Significantly Boosts Cancer Detection Accuracy",
    description:
      "Deep learning models outperform traditional scans, catching tumors at earlier stages and improving survival chances.",
    date: "Feb 2, 2025",
    image: "/news-8.png",
    tags: ["#Medical Imaging", "#Radiology"],
  },
  {
    id: 9,
    author: "Future Medicine AI",
    title: "AI Tools Rapidly Speed Up Rare Disease Diagnosis",
    description:
      "Automated pattern recognition cuts diagnostic delays, giving patients faster access to care and specialist treatment.",
    date: "Feb 1, 2025",
    image: "/news-3.png",
    tags: ["#Diagnostics", "#Predictive Models"],
  },
];

const savedArticles: ResearchArticle[] = [
  {
    id: 4,
    author: "Neural Health Labs",
    title: "Revolutionary AI System Detects Alzheimer's 10 Years Early",
    description:
      "Breakthrough neural network analysis of brain scans shows unprecedented accuracy in predicting cognitive decline before symptoms appear.",
    date: "Jan 28, 2025",
    image: "/news-4.png",
    tags: ["#Neurology", "#Predictive Models"],
  },
  {
    id: 5,
    author: "Precision Medicine Today",
    title: "AI-Powered Drug Discovery Reduces Development Time by 70%",
    description:
      "Machine learning algorithms accelerate pharmaceutical research, identifying promising compounds faster than traditional methods.",
    date: "Jan 25, 2025",
    image: "/news-5.png",
    tags: ["#Drug Discovery", "#AI Research"],
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <ResearchesTab mostRecentArticles={mostRecentArticles} savedArticles={savedArticles} />
    </div>
  );
}
