// export interface Job {
//   id: string;
//   title: string;
//   company_name: string;
//   location: string;
//   description_preview: string;
//   salary_range?: string;
//   job_type: string;
//   category: {
//     id: string;
//     name: string;
//   };
//   posted_at_formatted: string;
//   is_featured: boolean;
//   // author: string;
//   // isSaved: boolean;
//   // tags: string[];
// }

// export const jobsData: Job[] = [
//   {
//     id: "1",
//     title: "AI-Enhanced Clinical Research Coordinator",
//     company: "AI Job Finder",
//     description:
//       "As a Clinical Research Coordinator, you'll manage patient trials, ensure regulatory compliance, and leverage AI for data analysis to accelerate medical breakthroughs.",
//     tags: ["ClinicalResearch", "AIHealthcare", "PatientTrials"],
//     salary: "Competitive Salary",
//     location: "USA",
//     type: "Remote",
//     publishedDate: "July 12",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "2",
//     title: "Medical AI Ethics Consultant",
//     company: "AI Job Finder",
//     description:
//       "Play a critical role as a Medical AI Ethics Consultant, advising healthcare organizations on ethical use of AI to ensure fairness, transparency, and compliance.",
//     tags: ["AIEthics", "eHealth", "MedicalInsights", "RemoteHealth"],
//     salary: "105k/yr",
//     location: "USA",
//     type: "Part-Time",
//     publishedDate: "July 12",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "3",
//     title: "Healthcare Data Analyst with AI Specialization",
//     company: "AI Job Finder",
//     description:
//       "Analyze datasets from health records using AI algorithms to uncover insights. Collaborate with medical teams to predict trends and improve patient outcomes.",
//     tags: ["DataAnalytics", "Healthcare", "AI", "Insights"],
//     salary: "105k/yr",
//     location: "USA",
//     type: "Part-Time",
//     publishedDate: "July 12",
//     author: "AI Job Finder",
//     isSaved: true,
//   },
//   {
//     id: "4",
//     title: "Telemedicine Nurse Practitioner",
//     company: "AI Job Finder",
//     description:
//       "Provide virtual consultations and AI-assisted diagnostics in telemedicine. Focus on patient monitoring, treatment, and cutting-edge healthcare technology.",
//     tags: ["Telemedicine", "AIHealthcare", "RemoteCare"],
//     salary: "95k/yr",
//     location: "Remote",
//     type: "Full-Time",
//     publishedDate: "July 13",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "5",
//     title: "Biomedical AI Engineer",
//     company: "AI Job Finder",
//     description:
//       "Design AI models for medical devices and imaging. Collaborate with engineers and clinicians to deliver innovative healthcare solutions.",
//     tags: ["Biomedical", "AIModels", "HealthTech"],
//     salary: "120k/yr",
//     location: "USA",
//     type: "Hybrid",
//     publishedDate: "July 13",
//     author: "AI Job Finder",
//     isSaved: true,
//   },
//   {
//     id: "6",
//     title: "AI-Powered Radiology Specialist",
//     company: "AI Job Finder",
//     description:
//       "Interpret medical images with AI assistance. Support clinicians by enhancing diagnostic speed and accuracy through deep learning tools.",
//     tags: ["Radiology", "DeepLearning", "MedicalImaging"],
//     salary: "130k/yr",
//     location: "Canada",
//     type: "Remote",
//     publishedDate: "July 14",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "7",
//     title: "AI Clinical Trial Data Scientist",
//     company: "AI Job Finder",
//     description:
//       "Develop AI models for analyzing clinical trial datasets, improving patient recruitment and outcome predictions.",
//     tags: ["ClinicalTrials", "DataScience", "AIAnalytics"],
//     salary: "110k/yr",
//     location: "Germany",
//     type: "Full-Time",
//     publishedDate: "July 14",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "8",
//     title: "AI Health Policy Advisor",
//     company: "AI Job Finder",
//     description:
//       "Advise governments and healthcare organizations on policies for AI integration while ensuring compliance and ethical use.",
//     tags: ["Policy", "AIHealthcare", "Ethics"],
//     salary: "100k/yr",
//     location: "USA",
//     type: "Part-Time",
//     publishedDate: "July 14",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "9",
//     title: "Wearable Tech AI Specialist",
//     company: "AI Job Finder",
//     description:
//       "Create AI-powered algorithms for wearable health devices. Enhance real-time monitoring and predictive analytics for patients.",
//     tags: ["Wearables", "AI", "RemoteHealth"],
//     salary: "115k/yr",
//     location: "UK",
//     type: "Full-Time",
//     publishedDate: "July 15",
//     author: "AI Job Finder",
//     isSaved: true,
//   },
//   {
//     id: "10",
//     title: "AI-Powered Emergency Response Analyst",
//     company: "AI Job Finder",
//     description:
//       "Leverage AI to optimize emergency room resource allocation and patient triage in real-time scenarios.",
//     tags: ["EmergencyCare", "AI", "Triage"],
//     salary: "95k/yr",
//     location: "USA",
//     type: "Hybrid",
//     publishedDate: "July 15",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "11",
//     title: "Genomics AI Research Scientist",
//     company: "AI Job Finder",
//     description:
//       "Use AI to analyze genomic data, identify disease markers, and accelerate drug discovery.",
//     tags: ["Genomics", "AIResearch", "Bioinformatics"],
//     salary: "140k/yr",
//     location: "Switzerland",
//     type: "Full-Time",
//     publishedDate: "July 15",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "12",
//     title: "AI-Powered Drug Discovery Specialist",
//     company: "AI Job Finder",
//     description:
//       "Develop machine learning models to predict drug interactions and accelerate pharmaceutical R&D pipelines.",
//     tags: ["DrugDiscovery", "AI", "PharmaTech"],
//     salary: "150k/yr",
//     location: "USA",
//     type: "Full-Time",
//     publishedDate: "July 16",
//     author: "AI Job Finder",
//     isSaved: true,
//   },
//   {
//     id: "13",
//     title: "AI-Powered Virtual Health Coach",
//     company: "AI Job Finder",
//     description:
//       "Build AI-driven digital assistants that guide patients on fitness, diet, and wellness goals.",
//     tags: ["HealthCoach", "AI", "VirtualCare"],
//     salary: "85k/yr",
//     location: "Remote",
//     type: "Part-Time",
//     publishedDate: "July 16",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "14",
//     title: "Robotics Surgeon Assistant Engineer",
//     company: "AI Job Finder",
//     description:
//       "Design AI algorithms for robotic surgery assistance, improving surgical accuracy and patient safety.",
//     tags: ["Robotics", "Surgery", "AI"],
//     salary: "145k/yr",
//     location: "Japan",
//     type: "Full-Time",
//     publishedDate: "July 16",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "15",
//     title: "AI Cybersecurity Analyst in Healthcare",
//     company: "AI Job Finder",
//     description:
//       "Protect healthcare AI systems from cyber threats. Monitor networks and ensure compliance with data privacy standards.",
//     tags: ["Cybersecurity", "HealthcareAI", "DataProtection"],
//     salary: "125k/yr",
//     location: "Remote",
//     type: "Full-Time",
//     publishedDate: "July 17",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "16",
//     title: "AI-Powered Patient Engagement Specialist",
//     company: "AI Job Finder",
//     description:
//       "Develop AI chatbots and systems to engage patients, answer questions, and enhance patient satisfaction.",
//     tags: ["PatientEngagement", "AIChatbots", "Healthcare"],
//     salary: "90k/yr",
//     location: "USA",
//     type: "Hybrid",
//     publishedDate: "July 17",
//     author: "AI Job Finder",
//     isSaved: true,
//   },
//   {
//     id: "17",
//     title: "AI Mental Health App Developer",
//     company: "AI Job Finder",
//     description:
//       "Create AI applications for mental health therapy, providing predictive analysis and personalized support.",
//     tags: ["MentalHealth", "AI", "AppDevelopment"],
//     salary: "100k/yr",
//     location: "Remote",
//     type: "Full-Time",
//     publishedDate: "July 17",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "18",
//     title: "AI-Powered Rehabilitation Specialist",
//     company: "AI Job Finder",
//     description:
//       "Leverage AI to design rehabilitation programs for patients recovering from injuries or surgeries.",
//     tags: ["Rehabilitation", "AI", "Healthcare"],
//     salary: "95k/yr",
//     location: "USA",
//     type: "Part-Time",
//     publishedDate: "July 18",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
//   {
//     id: "19",
//     title: "AI Diagnostics Software Engineer",
//     company: "AI Job Finder",
//     description:
//       "Develop AI software for medical diagnostics, supporting doctors with fast and accurate test results.",
//     tags: ["Diagnostics", "AI", "SoftwareEngineering"],
//     salary: "135k/yr",
//     location: "India",
//     type: "Full-Time",
//     publishedDate: "July 18",
//     author: "AI Job Finder",
//     isSaved: true,
//   },
//   {
//     id: "20",
//     title: "AI-Powered Public Health Data Scientist",
//     company: "AI Job Finder",
//     description:
//       "Apply AI to analyze population health trends, predict outbreaks, and optimize public health strategies.",
//     tags: ["PublicHealth", "DataScience", "AI"],
//     salary: "125k/yr",
//     location: "USA",
//     type: "Remote",
//     publishedDate: "July 18",
//     author: "AI Job Finder",
//     isSaved: false,
//   },
// ];
