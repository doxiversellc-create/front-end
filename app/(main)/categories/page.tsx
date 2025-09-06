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
    <div className="bg-background min-h-screen">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <main className="container mx-auto py-12 md:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-outfit text-foreground mb-2 text-center text-2xl font-bold sm:text-left">
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
        <div className="bg-primary text-primary-foreground mx-auto mt-8 flex w-1/2 items-center justify-center rounded-full sm:hidden">
          <Button asChild className="w-1/2 rounded-full">
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
