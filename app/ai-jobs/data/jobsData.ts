export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  salary?: string;
  location: string;
  type: string;
  publishedDate: string;
  author: string;
  isSaved: boolean;
}

export const jobsData: Job[] = [
  {
    id: "1",
    title: "AI-Enhanced Clinical Research Coordinator",
    company: "AI Job Finder",
    description:
      "As a Clinical Research Coordinator, you'll manage patient trials, ensure regulatory compliance, and leverage AI for data analysis to accelerate medical breakthroughs. Ideal for detail-oriented professionals passionate about advancing patient care through technology. Lead groundbreaking research initiatives at the intersection of AI and healthcare.",
    tags: ["ClinicalResearch", "AIHealthcare", "PatientTrials"],
    salary: "Competitive Salary",
    location: "USA",
    type: "Remote",
    publishedDate: "July 12",
    author: "Ai Job Finder",
    isSaved: false,
  },
  {
    id: "2",
    title: "Medical AI Ethics Consultant",
    company: "AI Job Finder",
    description:
      "Play a critical role as a Medical AI Ethics Consultant, advising healthcare organizations on the ethical use of artificial intelligence to ensure fairness, transparency, and compliance with regulatory standards. Shape the future of responsible AI implementation in medicine.",
    tags: ["AIEthics", "eHealth", "MedicalInsights", "RemoteHealth"],
    salary: "105k/yr",
    location: "USA",
    type: "Part-Time",
    publishedDate: "July 12",
    isSaved: false,

    author: "Ai Job Finder",
  },
  {
    id: "3",
    title: "Healthcare Data Analyst with AI Specialization",
    company: "AI Job Finder",
    description:
      "Analyze vast datasets from electronic health records using AI algorithms to uncover insights that improve outcomes. You'll collaborate with medical teams to predict trends, optimize resource allocation, and drive evidence-based healthcare decisions.",
    tags: ["DataAnalytics", "eHealth", "MedicalInsights", "RemoteHealth"],
    salary: "105k/yr",
    location: "USA",
    type: "Part-Time",
    publishedDate: "July 12",
    isSaved: true,

    author: "Ai Job Finder",
  },
  {
    id: "4",
    title: "Telemedicine Nurse Practitioner",
    company: "AI Job Finder",
    description:
      "Provide virtual consultations and AI-assisted diagnostics in a fast-paced telemedicine environment. This role focuses on remote patient monitoring, prescribing treatments, and integrating cutting-edge technology to deliver exceptional care from anywhere.",
    tags: ["DataAnalytics", "eHealth", "MedicalInsights", "RemoteHealth"],
    salary: "105k/yr",
    location: "USA",
    type: "Part-Time",
    publishedDate: "July 12",
    isSaved: false,

    author: "Ai Job Finder",
  },
  {
    id: "5",
    title: "Biomedical AI Engineer",
    company: "AI Job Finder",
    description:
      "Design and implement AI models for medical devices & imaging systems. This position involves developing algorithms for disease detection, collaborating with engineers and clinicians, and ensuring regulatory compliance for innovative healthcare solutions.",
    tags: ["DataAnalytics", "eHealth", "MedicalInsights", "RemoteHealth"],
    salary: "105k/yr",
    location: "USA",
    type: "Part-Time",
    publishedDate: "July 12",
    isSaved: true,

    author: "Ai Job Finder",
  },
];
