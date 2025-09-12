import { fetchPageContent } from "@/actions/content.actions";
import { AIToolCard } from "./_components/AIToolCard";
import ClientToolsPage from "./_components/ClientToolsPage";

const aiTools: { [key: string]: AIToolCard[] } = {
  "Patient Engagement": [
    {
      id: 1,
      company: "Open AI",
      name: "Chat GPT",
      description: "Advanced conversational AI for clinical documentation.",
      icon: "/ai-logo/logo1.png",
      category: "",
    },
    {
      id: 2,
      company: "Open AI",
      name: "Notable Health",
      description: "Intelligent automation for healthcare operations",
      icon: "/ai-logo/logo2.png",
      category: "",
    },
    {
      id: 3,
      company: "Microsoft",
      name: "Copilot",
      description: "AI-powered productivity tools for healthcare workflows",
      icon: "/ai-logo/logo3.png",
      category: "",
    },
    {
      id: 4,
      company: "Google",
      name: "Med-PaLM",
      description: "Medical AI assistant for patient communication",
      icon: "/ai-logo/logo4.png",
      category: "",
    },
    {
      id: 5,
      company: "Facebook",
      name: "Dragon Medical",
      description: "Medical AI assistant for patient communication",
      icon: "/ai-logo/logo12.png",
      category: "",
    },
  ],
  "Clinical Documentation": [
    {
      id: 5,
      company: "Nuance",
      name: "Dragon Medical",
      description: "Voice recognition for clinical documentation",
      icon: "/ai-logo/logo5.png",
      category: "",
    },
    {
      id: 6,
      company: "Abridge",
      name: "Clinical Notes AI",
      description: "Automated clinical note generation from conversations",
      icon: "/ai-logo/logo6.png",
      category: "",
    },
    {
      id: 7,
      company: "Suki",
      name: "AI Assistant",
      description: "Voice-enabled AI assistant for physicians",
      icon: "/ai-logo/logo7.png",
      category: "",
    },
  ],
  "Imaging & Diagnostics": [
    {
      id: 8,
      company: "Aidoc",
      name: "AI Radiology",
      description: "AI-powered medical imaging analysis",
      icon: "/ai-logo/logo8.png",
      category: "",
    },
    {
      id: 9,
      company: "Zebra Medical",
      name: "AI Imaging",
      description: "Deep learning for medical image interpretation",
      icon: "/ai-logo/logo9.png",
      category: "",
    },
  ],
  "Billing & Compliance": [
    {
      id: 10,
      company: "Olive AI",
      name: "Revenue Cycle",
      description: "AI automation for healthcare revenue cycle",
      icon: "/ai-logo/logo10.png",
      category: "",
    },
    {
      id: 11,
      company: "Appriss Health",
      name: "Compliance AI",
      description: "Automated compliance monitoring and reporting",
      icon: "/ai-logo/logo11.png",
      category: "",
    },
  ],
};

interface ToolsPageProps {
  searchParams: Promise<{
    category?: string;
    page?: string;
  }>;
}

export async function generateMetadata() {
  const { content } = await fetchPageContent("ai-tools");

  return {
    title: content.title,
    description: content?.description || "Discover Top AI Tools",
  };
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const { content } = await fetchPageContent("ai-tools");

  const resolvedSearchParams = await searchParams;
  const initialCategory = resolvedSearchParams.category || "Patient Engagement";
  const initialPage = parseInt(resolvedSearchParams.page || "1", 10);

  return (
    <ClientToolsPage
      content={content}
      aiTools={aiTools}
      initialCategory={initialCategory}
      initialPage={initialPage}
    />
  );
}
