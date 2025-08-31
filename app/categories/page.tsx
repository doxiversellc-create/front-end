import Link from "next/link";

import { Calendar, ChevronRight, CreditCard, FileText, Scan, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

import CategoryCard from "./_components/CategoryCard";

export const metadata = {
  title: "AI Tool Categories",
  description: "Explore AI tool categories tailored for healthcare professionals.",
};

const categories = [
  {
    id: "practice-management",
    title: "Practice Management",
    description: "Efficient care operations with trusted AI",
    icon: Calendar,
    tools: [
      "Smart Appointment Scheduling",
      "Telehealth Integration",
      "Workflow Optimization Tools",
      "Performance Dashboards",
    ],
  },
  {
    id: "clinical-documentation",
    title: "Clinical Documentation",
    description: "Smarter records with secure AI",
    icon: FileText,
    tools: [
      "EHR & Digital Records",
      "Automated Clinical Notes",
      "Voice-to-Text Transcription",
      "Decision Support Tools",
      "Data Security & Compliance",
    ],
  },
  {
    id: "research-drug-development",
    title: "Research & Drug Development",
    description: "Faster discovery through AI",
    icon: Search,
    tools: [
      "Clinical Trials Management",
      "AI-Driven Drug Discovery",
      "Genomics & Precision Medicine",
      "Safety & Compliance",
    ],
  },
  {
    id: "imaging-diagnostics",
    title: "Imaging & Diagnostics",
    description: "AI-powered insights in imaging",
    icon: Scan,
    tools: [
      "AI Radiology Analysis",
      "Pathology & Lab Insights",
      "Early Disease Detection",
      "3D Imaging & Reconstruction",
      "Medical Image Sharing (PACS)",
    ],
  },

  {
    id: "patient-engagement",
    title: "Patient Engagement",
    description: "Better care through digital tools",
    icon: Users,
    tools: [
      "Patient Self-Service Portals",
      "Virtual Health Assistants",
      "Remote Health Monitoring",
      "Personalized Care Insights",
      "Health Education Platforms",
    ],
  },
  {
    id: "billing-compliance",
    title: "Billing & Compliance",
    description: "Simplified finance with trusted AI",
    icon: CreditCard,
    tools: [
      "Automated Coding & Claims",
      "Revenue Cycle Management",
      "Fraud Detection & Audits",
      "Regulatory Compliance",
    ],
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background ">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/25 to-transparent" />
      <main className=" container mx-auto md:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="flex px-4 flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold sm:text-left text-center font-outfit text-foreground mb-2">
              All AI Tool Categories
            </h1>
          </div>
          {/* Button for desktop only */}
        </div>

        {/* Categories Grid */}
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(category => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>

        {/* Button for mobile only */}
        <div className="rounded-full w-1/2 mx-auto mt-8 sm:hidden flex items-center justify-center bg-primary text-primary-foreground">
          <Button asChild className="rounded-full w-1/2">
            <Link href="/ai-tools" className="flex items-center justify-center">
              See All AI Tools
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
