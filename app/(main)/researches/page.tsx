"use client";

import { Suspense } from "react";
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

const allResearchArticles: ResearchArticle[] = [
  // Page 1 - Most Recent (10 articles)
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
    author: "Neural Health Labs",
    title: "Revolutionary AI System Detects Alzheimer's 10 Years Early",
    description:
      "Breakthrough neural network analysis of brain scans shows unprecedented accuracy in predicting cognitive decline before symptoms appear.",
    date: "Feb 1, 2025",
    image: "/news-4.png",
    tags: ["#Neurology", "#Predictive Models"],
  },
  {
    id: 5,
    author: "Precision Medicine Today",
    title: "AI-Powered Drug Discovery Reduces Development Time by 70%",
    description:
      "Machine learning algorithms accelerate pharmaceutical research, identifying promising compounds faster than traditional methods.",
    date: "Jan 31, 2025",
    image: "/news-1.png",
    tags: ["#Drug Discovery", "#AI Research"],
  },
  {
    id: 6,
    author: "Digital Health Weekly",
    title: "Smart Wearables Detect Heart Problems Before Symptoms Appear",
    description:
      "Advanced sensors and AI algorithms continuously monitor cardiac health, alerting users to potential issues early.",
    date: "Jan 31, 2025",
    image: "/news-6.png",
    tags: ["#Cardiology", "#Wearables", "#Predictive Models"],
  },
  {
    id: 7,
    author: "AI Medical Journal",
    title: "Virtual Nurses Reduce Hospital Readmission Rates by 45%",
    description:
      "AI-powered virtual assistants provide continuous patient monitoring and care coordination after discharge.",
    date: "Jan 30, 2025",
    image: "/news-7.png",
    tags: ["#Virtual Care", "#Patient Monitoring"],
  },
  {
    id: 8,
    author: "TechMed Innovations",
    title: "AI Chatbots Improve Mental Health Support Access",
    description:
      "Natural language processing enables 24/7 mental health screening and initial intervention for patients in need.",
    date: "Jan 30, 2025",
    image: "/news-8.png",
    tags: ["#Mental Health", "#Chatbots", "#Accessibility"],
  },
  {
    id: 9,
    author: "Robotic Surgery Today",
    title: "AI-Guided Surgical Robots Achieve 99% Precision Rate",
    description:
      "Computer vision and machine learning enable robotic systems to perform complex procedures with unprecedented accuracy.",
    date: "Jan 29, 2025",
    image: "/news-9.png",
    tags: ["#Robotics", "#Surgery", "#Precision Medicine"],
  },
  {
    id: 10,
    author: "Genomics AI Lab",
    title: "Machine Learning Accelerates Genetic Disease Identification",
    description:
      "Advanced algorithms analyze genetic sequences to identify disease markers faster than traditional methods.",
    date: "Jan 29, 2025",
    image: "/news-1.png",
    tags: ["#Genomics", "#Genetic Testing", "#Diagnostics"],
  },

  // Page 2 (10 articles)
  {
    id: 11,
    author: "Emergency Medicine AI",
    title: "AI Triage Systems Reduce Emergency Room Wait Times",
    description:
      "Intelligent patient prioritization systems help emergency departments manage resources more effectively.",
    date: "Jan 28, 2025",
    image: "/news-2.png",
    tags: ["#Emergency Medicine", "#Triage", "#Resource Management"],
  },
  {
    id: 12,
    author: "Pharmaceutical AI Weekly",
    title: "AI Identifies New Uses for Existing Medications",
    description:
      "Drug repurposing algorithms discover novel therapeutic applications for approved medications.",
    date: "Jan 28, 2025",
    image: "/news-3.png",
    tags: ["#Drug Discovery", "#Repurposing", "#AI Research"],
  },
  {
    id: 13,
    author: "Pathology Innovations",
    title: "Digital Pathology AI Improves Cancer Diagnosis Speed",
    description:
      "Automated tissue analysis reduces pathologist workload while maintaining diagnostic accuracy.",
    date: "Jan 27, 2025",
    image: "/news-4.png",
    tags: ["#Pathology", "#Cancer Detection", "#Automation"],
  },
  {
    id: 14,
    author: "Rehabilitation Tech",
    title: "AI-Powered Prosthetics Learn User Movement Patterns",
    description:
      "Smart prosthetic devices adapt to individual user behavior for more natural movement control.",
    date: "Jan 27, 2025",
    image: "/news-1.png",
    tags: ["#Prosthetics", "#Rehabilitation", "#Adaptive Technology"],
  },
  {
    id: 15,
    author: "Dermatology AI Center",
    title: "Computer Vision Detects Skin Cancer with Dermatologist-Level Accuracy",
    description:
      "Image recognition algorithms analyze skin lesions to identify potential malignancies early.",
    date: "Jan 26, 2025",
    image: "/news-6.png",
    tags: ["#Dermatology", "#Cancer Detection", "#Computer Vision"],
  },
  {
    id: 16,
    author: "Sleep Medicine Tech",
    title: "AI Sleep Analysis Reveals New Insights into Sleep Disorders",
    description:
      "Machine learning models analyze sleep patterns to identify previously unknown sleep disorder markers.",
    date: "Jan 26, 2025",
    image: "/news-7.png",
    tags: ["#Sleep Medicine", "#Pattern Analysis", "#Diagnostics"],
  },
  {
    id: 17,
    author: "Pediatric AI Research",
    title: "AI Helps Predict Childhood Development Delays",
    description:
      "Early intervention algorithms identify at-risk children for timely developmental support.",
    date: "Jan 25, 2025",
    image: "/news-8.png",
    tags: ["#Pediatrics", "#Development", "#Early Intervention"],
  },
  {
    id: 18,
    author: "Ophthalmology Innovations",
    title: "AI Retinal Scans Detect Diabetic Retinopathy Early",
    description:
      "Automated eye examinations identify diabetic complications before vision loss occurs.",
    date: "Jan 25, 2025",
    image: "/news-9.png",
    tags: ["#Ophthalmology", "#Diabetes", "#Retinal Imaging"],
  },
  {
    id: 19,
    author: "Nutrition AI Lab",
    title: "Machine Learning Personalizes Dietary Recommendations",
    description:
      "AI algorithms create customized nutrition plans based on individual health profiles and preferences.",
    date: "Jan 24, 2025",
    image: "/news-1.png",
    tags: ["#Nutrition", "#Personalized Medicine", "#Lifestyle"],
  },
  {
    id: 20,
    author: "Infectious Disease AI",
    title: "AI Models Predict Disease Outbreak Patterns",
    description:
      "Epidemiological algorithms help public health officials prepare for and prevent disease outbreaks.",
    date: "Jan 24, 2025",
    image: "/news-2.png",
    tags: ["#Epidemiology", "#Public Health", "#Outbreak Prediction"],
  },

  // Page 3 (10 articles)
  {
    id: 21,
    author: "Medical Imaging AI",
    title: "AI Enhances MRI Image Quality and Reduces Scan Times",
    description:
      "Advanced reconstruction algorithms improve image clarity while making scans faster and more comfortable.",
    date: "Jan 23, 2025",
    image: "/news-3.png",
    tags: ["#Medical Imaging", "#MRI", "#Image Enhancement"],
  },
  {
    id: 22,
    author: "Chronic Care Management",
    title: "AI Helps Manage Chronic Diseases with Predictive Analytics",
    description:
      "Continuous monitoring systems predict disease flare-ups and adjust treatment plans accordingly.",
    date: "Jan 23, 2025",
    image: "/news-4.png",
    tags: ["#Chronic Disease", "#Predictive Analytics", "#Disease Management"],
  },
  {
    id: 23,
    author: "Pharmacy AI Solutions",
    title: "AI Reduces Medication Errors in Hospital Settings",
    description: "Smart dispensing systems and drug interaction checkers improve patient safety.",
    date: "Jan 22, 2025",
    image: "/news-1.png",
    tags: ["#Pharmacy", "#Medication Safety", "#Hospital Systems"],
  },
  {
    id: 24,
    author: "Orthopedic Innovations",
    title: "AI-Guided Joint Replacement Surgery Improves Outcomes",
    description: "Computer-assisted surgical planning enhances precision in orthopedic procedures.",
    date: "Jan 22, 2025",
    image: "/news-6.png",
    tags: ["#Orthopedics", "#Surgery", "#Joint Replacement"],
  },
  {
    id: 25,
    author: "Anesthesia AI Research",
    title: "Smart Anesthesia Systems Personalize Sedation Levels",
    description:
      "AI monitors patient responses in real-time to optimize anesthesia delivery during surgery.",
    date: "Jan 21, 2025",
    image: "/news-7.png",
    tags: ["#Anesthesia", "#Patient Monitoring", "#Personalized Medicine"],
  },
  {
    id: 26,
    author: "Wound Care Technology",
    title: "AI-Powered Wound Assessment Speeds Healing Process",
    description:
      "Computer vision analyzes wound characteristics to recommend optimal treatment protocols.",
    date: "Jan 21, 2025",
    image: "/news-8.png",
    tags: ["#Wound Care", "#Computer Vision", "#Treatment Optimization"],
  },
  {
    id: 27,
    author: "Fertility AI Lab",
    title: "Machine Learning Improves IVF Success Rates",
    description:
      "AI algorithms analyze embryo quality and optimize timing for fertility treatments.",
    date: "Jan 20, 2025",
    image: "/news-9.png",
    tags: ["#Fertility", "#IVF", "#Reproductive Medicine"],
  },
  {
    id: 28,
    author: "Pain Management AI",
    title: "AI Helps Develop Personalized Pain Treatment Plans",
    description:
      "Machine learning analyzes patient data to create individualized pain management strategies.",
    date: "Jan 20, 2025",
    image: "/news-1.png",
    tags: ["#Pain Management", "#Personalized Medicine", "#Treatment Planning"],
  },
  {
    id: 29,
    author: "Allergy Research AI",
    title: "AI Identifies Previously Unknown Allergy Triggers",
    description:
      "Pattern recognition algorithms discover new environmental and food allergy connections.",
    date: "Jan 19, 2025",
    image: "/news-2.png",
    tags: ["#Allergy Research", "#Environmental Health", "#Pattern Recognition"],
  },
  {
    id: 30,
    author: "Geriatric Medicine AI",
    title: "AI Assists in Early Detection of Age-Related Cognitive Decline",
    description: "Cognitive assessment tools help identify elderly patients at risk for dementia.",
    date: "Jan 19, 2025",
    image: "/news-3.png",
    tags: ["#Geriatrics", "#Cognitive Assessment", "#Dementia Prevention"],
  },

  // Page 4 (10 articles)
  {
    id: 31,
    author: "Preventive Medicine AI",
    title: "AI Develops Personalized Prevention Strategies",
    description:
      "Risk assessment algorithms create tailored prevention plans based on individual health profiles.",
    date: "Jan 18, 2025",
    image: "/news-4.png",
    tags: ["#Preventive Medicine", "#Risk Assessment", "#Personalized Healthcare"],
  },
  {
    id: 32,
    author: "Pulmonology Innovations",
    title: "AI Improves Early Detection of Lung Diseases",
    description:
      "Respiratory pattern analysis helps identify lung conditions before symptoms become severe.",
    date: "Jan 18, 2025",
    image: "/news-1.png",
    tags: ["#Pulmonology", "#Respiratory Health", "#Early Detection"],
  },
  {
    id: 33,
    author: "Gastroenterology AI",
    title: "Machine Learning Enhances Colonoscopy Accuracy",
    description: "AI-assisted endoscopy improves polyp detection rates during routine screenings.",
    date: "Jan 17, 2025",
    image: "/news-6.png",
    tags: ["#Gastroenterology", "#Colonoscopy", "#Cancer Screening"],
  },
  {
    id: 34,
    author: "Endocrinology Research",
    title: "AI Optimizes Insulin Delivery for Diabetic Patients",
    description:
      "Smart insulin pumps adjust dosing based on continuous glucose monitoring and lifestyle factors.",
    date: "Jan 17, 2025",
    image: "/news-7.png",
    tags: ["#Endocrinology", "#Diabetes Management", "#Insulin Therapy"],
  },
  {
    id: 35,
    author: "Nephrology AI Center",
    title: "AI Predicts Kidney Disease Progression",
    description:
      "Predictive models help nephrologists intervene early to slow kidney function decline.",
    date: "Jan 16, 2025",
    image: "/news-8.png",
    tags: ["#Nephrology", "#Kidney Disease", "#Disease Progression"],
  },
  {
    id: 36,
    author: "Hematology Innovations",
    title: "AI Improves Blood Cancer Diagnosis and Treatment",
    description:
      "Machine learning analyzes blood cell patterns to enhance leukemia and lymphoma detection.",
    date: "Jan 16, 2025",
    image: "/news-9.png",
    tags: ["#Hematology", "#Blood Cancer", "#Diagnostic Accuracy"],
  },
  {
    id: 37,
    author: "Immunology AI Lab",
    title: "AI Helps Understand Autoimmune Disease Mechanisms",
    description:
      "Pattern analysis reveals new insights into how autoimmune conditions develop and progress.",
    date: "Jan 15, 2025",
    image: "/news-1.png",
    tags: ["#Immunology", "#Autoimmune Disease", "#Disease Mechanisms"],
  },
  {
    id: 38,
    author: "Transplant Medicine AI",
    title: "Machine Learning Improves Organ Matching Success",
    description:
      "AI algorithms optimize donor-recipient compatibility for better transplant outcomes.",
    date: "Jan 15, 2025",
    image: "/news-2.png",
    tags: ["#Transplant Medicine", "#Organ Matching", "#Compatibility"],
  },
  {
    id: 39,
    author: "Sports Medicine AI",
    title: "AI Prevents Athletic Injuries Through Movement Analysis",
    description:
      "Biomechanical analysis identifies injury risk factors in athletes before problems occur.",
    date: "Jan 14, 2025",
    image: "/news-3.png",
    tags: ["#Sports Medicine", "#Injury Prevention", "#Biomechanics"],
  },
  {
    id: 40,
    author: "Travel Medicine Tech",
    title: "AI Provides Personalized Travel Health Recommendations",
    description:
      "Travel risk assessment algorithms create customized health advice for international travelers.",
    date: "Jan 14, 2025",
    image: "/news-4.png",
    tags: ["#Travel Medicine", "#Risk Assessment", "#Personalized Advice"],
  },

  // Page 5 (10 articles)
  {
    id: 41,
    author: "Plastic Surgery AI",
    title: "AI Enhances Reconstructive Surgery Planning",
    description:
      "3D modeling and simulation tools help surgeons plan complex reconstructive procedures.",
    date: "Jan 13, 2025",
    image: "/news-1.png",
    tags: ["#Plastic Surgery", "#3D Modeling", "#Surgical Planning"],
  },
  {
    id: 42,
    author: "Toxicology Research AI",
    title: "Machine Learning Identifies Drug Toxicity Early",
    description:
      "AI models predict potential toxic effects of new medications before clinical trials.",
    date: "Jan 13, 2025",
    image: "/news-6.png",
    tags: ["#Toxicology", "#Drug Safety", "#Predictive Modeling"],
  },
  {
    id: 43,
    author: "Nuclear Medicine AI",
    title: "AI Improves Nuclear Imaging Interpretation",
    description:
      "Advanced algorithms enhance the accuracy of nuclear medicine scans for disease detection.",
    date: "Jan 12, 2025",
    image: "/news-7.png",
    tags: ["#Nuclear Medicine", "#Medical Imaging", "#Disease Detection"],
  },
  {
    id: 44,
    author: "Occupational Health AI",
    title: "AI Monitors Workplace Health Risks",
    description:
      "Smart sensors and analytics identify occupational hazards before they impact worker health.",
    date: "Jan 12, 2025",
    image: "/news-8.png",
    tags: ["#Occupational Health", "#Workplace Safety", "#Risk Monitoring"],
  },
  {
    id: 45,
    author: "Telemedicine Innovations",
    title: "AI Enhances Remote Patient Consultations",
    description:
      "Virtual examination tools and diagnostic aids improve the quality of telehealth visits.",
    date: "Jan 11, 2025",
    image: "/news-9.png",
    tags: ["#Telemedicine", "#Remote Care", "#Virtual Consultations"],
  },
  {
    id: 46,
    author: "Medical Ethics AI",
    title: "AI Helps Navigate Complex Medical Ethics Decisions",
    description:
      "Decision support systems assist healthcare providers with challenging ethical dilemmas.",
    date: "Jan 11, 2025",
    image: "/news-1.png",
    tags: ["#Medical Ethics", "#Decision Support", "#Healthcare Ethics"],
  },
  {
    id: 47,
    author: "Quality Improvement AI",
    title: "Machine Learning Enhances Healthcare Quality Metrics",
    description:
      "AI analysis of patient outcomes helps hospitals improve care quality and safety measures.",
    date: "Jan 10, 2025",
    image: "/news-2.png",
    tags: ["#Quality Improvement", "#Patient Outcomes", "#Healthcare Safety"],
  },
  {
    id: 48,
    author: "Medical Education AI",
    title: "AI Personalizes Medical Training Programs",
    description:
      "Adaptive learning systems customize medical education based on individual learning styles.",
    date: "Jan 10, 2025",
    image: "/news-3.png",
    tags: ["#Medical Education", "#Adaptive Learning", "#Training Programs"],
  },
  {
    id: 49,
    author: "Health Economics AI",
    title: "AI Optimizes Healthcare Resource Allocation",
    description:
      "Predictive analytics help healthcare systems allocate resources more efficiently and cost-effectively.",
    date: "Jan 9, 2025",
    image: "/news-4.png",
    tags: ["#Health Economics", "#Resource Allocation", "#Healthcare Efficiency"],
  },
  {
    id: 50,
    author: "Global Health AI",
    title: "AI Addresses Healthcare Disparities Worldwide",
    description:
      "Machine learning identifies and helps address healthcare inequities across different populations.",
    date: "Jan 9, 2025",
    image: "/news-1.png",
    tags: ["#Global Health", "#Healthcare Equity", "#Population Health"],
  },
];

// Saved articles (separate from main articles)
const savedArticles: ResearchArticle[] = [
  {
    id: 101,
    author: "Neural Health Labs",
    title: "Revolutionary AI System Detects Alzheimer's 10 Years Early",
    description:
      "Breakthrough neural network analysis of brain scans shows unprecedented accuracy in predicting cognitive decline before symptoms appear.",
    date: "Jan 28, 2025",
    image: "/news-4.png",
    tags: ["#Neurology", "#Predictive Models"],
  },
  {
    id: 102,
    author: "Precision Medicine Today",
    title: "AI-Powered Drug Discovery Reduces Development Time by 70%",
    description:
      "Machine learning algorithms accelerate pharmaceutical research, identifying promising compounds faster than traditional methods.",
    date: "Jan 25, 2025",
    image: "/news-1.png",
    tags: ["#Drug Discovery", "#AI Research"],
  },
  {
    id: 103,
    author: "Robotic Surgery Today",
    title: "AI-Guided Surgical Robots Achieve 99% Precision Rate",
    description:
      "Computer vision and machine learning enable robotic systems to perform complex procedures with unprecedented accuracy.",
    date: "Jan 20, 2025",
    image: "/news-9.png",
    tags: ["#Robotics", "#Surgery", "#Precision Medicine"],
  },
];

export default function ResearchesPage() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ResearchesTab allResearchArticles={allResearchArticles} savedArticles={savedArticles} />
      </Suspense>
    </div>
  );
}
