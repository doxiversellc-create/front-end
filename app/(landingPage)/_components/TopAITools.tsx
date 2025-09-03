"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

interface AITool {
  id: number;
  company: string;
  name: string;
  description: string;
  icon: string;
}

const aiToolsData: { [key: string]: AITool[] } = {
  "Patient engagement": [
    {
      id: 1,
      company: "Open AI",
      name: "Chat GPT",
      description: "Advanced conversational AI for clinical documentation.",
      icon: "/ai-logo/logo1.png",
    },
    {
      id: 2,
      company: "Open AI",
      name: "Notable Health",
      description: "Intelligent automation for healthcare operations",
      icon: "/ai-logo/logo2.png",
    },
    {
      id: 3,
      company: "Microsoft",
      name: "Copilot",
      description: "AI-powered productivity tools for healthcare workflows",
      icon: "/ai-logo/logo3.png",
    },
    {
      id: 4,
      company: "Google",
      name: "Med-PaLM",
      description: "Medical AI assistant for patient communication",
      icon: "/ai-logo/logo4.png",
    },
    {
      id: 5,
      company: "Facebook",
      name: "Dragon Medical",
      description: "Medical AI assistant for patient communication",
      icon: "/ai-logo/logo12.png",
    },
  ],
  "Clinical Documentation": [
    {
      id: 5,
      company: "Nuance",
      name: "Dragon Medical",
      description: "Voice recognition for clinical documentation",
      icon: "/ai-logo/logo5.png",
    },
    {
      id: 6,
      company: "Abridge",
      name: "Clinical Notes AI",
      description: "Automated clinical note generation from conversations",
      icon: "/ai-logo/logo6.png",
    },
    {
      id: 7,
      company: "Suki",
      name: "AI Assistant",
      description: "Voice-enabled AI assistant for physicians",
      icon: "/ai-logo/logo7.png",
    },
  ],
  "Imaging & Diagnostics": [
    {
      id: 8,
      company: "Aidoc",
      name: "AI Radiology",
      description: "AI-powered medical imaging analysis",
      icon: "/ai-logo/logo8.png",
    },
    {
      id: 9,
      company: "Zebra Medical",
      name: "AI Imaging",
      description: "Deep learning for medical image interpretation",
      icon: "/ai-logo/logo9.png",
    },
  ],
  "Billing & compliance": [
    {
      id: 10,
      company: "Olive AI",
      name: "Revenue Cycle",
      description: "AI automation for healthcare revenue cycle",
      icon: "/ai-logo/logo10.png",
    },
    {
      id: 11,
      company: "Appriss Health",
      name: "Compliance AI",
      description: "Automated compliance monitoring and reporting",
      icon: "/ai-logo/logo11.png",
    },
  ],
};

export default function AIToolsSection() {
  const [activeCategory, setActiveCategory] = useState("Patient engagement");
  const [carouselPosition, setCarouselPosition] = useState(0);

  const categories = Object.keys(aiToolsData);
  const currentTools = aiToolsData[activeCategory as keyof typeof aiToolsData] || [];
  const toolsPerPage = 3;

  const nextSlide = () => {
    const maxPosition = Math.max(0, currentTools.length - toolsPerPage);
    setCarouselPosition(prev => Math.min(prev + 1, maxPosition));
  };

  const prevSlide = () => {
    setCarouselPosition(prev => Math.max(prev - 1, 0));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCarouselPosition(0); // Reset carousel position when category changes
  };

  return (
    <div className="w-full max-w-[1141px] mx-auto my-10 space-y-6 md:space-y-8 px-3 md:px-6 lg:px-3 xl:px-0 lg:space-y-10">
      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionHeader className="w-fit">Top AI Tools</SectionHeader>
        <div className="flex flex-wrap justify-between items-center space-y-4">
          <h2 className="max-w-[680px] text-3xl md:text-4xl lg:text-[40px] font-medium font-outfit leading-tight">
            <span className="text-balance">
              Explore the Most Trusted AI Solutions in Healthcare
            </span>
          </h2>

          {/* See All Button - Desktop */}
          <Link
            href={"/"}
            className="hidden md:flex items-center bg-primary hover:bg-primary/90 text-primary-foreground pl-6 pr-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
          >
            See All
            <ArrowUpRight className="size-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {/* Mobile: Show only first 2 categories */}
          {categories.slice(0, 2).map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`md:hidden ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground "
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}

          {categories.slice(0, 3).map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`hidden md:inline-flex lg:hidden px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}

          {/* Desktop: Show all categories */}
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`hidden lg:inline-flex border-2  hover:cursor-pointer px-6 py-3 font-inter rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-muted/60"
              }`}
            >
              {category}
              {category === "Other" && <ChevronRight className="w-4 h-4 ml-2" />}
            </button>
          ))}
          <Link
            href={"/"}
            className="hidden items-center md:inline-flex px-4 py-3 rounded-full font-normal transition-all duration-200 hover:bg-button/10 "
          >
            Other
            <ArrowUpRight className="size-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Tools Display */}
      <div className="relative">
        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <div className="overflow-hidden py-5">
            <div
              className="flex justify-start gap-5 md:gap-6 lg:gap-7 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${carouselPosition * (100 / toolsPerPage)}%)`,
              }}
            >
              {currentTools.map(tool => (
                <div
                  key={tool.id}
                  className="flex-none max-w-[358px] hover:shadow-lg transition-all duration-300 ease-in-out rounded-2xl "
                >
                  {/* Tool Icon */}
                  <div className="bg-gradient-to-b from-black/0 h-full to-border p-[1px] rounded-2xl">
                    <div className="bg-background p-6 rounded-2xl space-y-6 flex flex-col items-center h-full">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={100}
                        height={100}
                        className="size-28 lg:size-36 rounded-full"
                      />

                      {/* Tool Info */}
                      <div className="space-y-2 h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm md:text-base opacity-80">{tool.company}</p>
                            <Link
                              href={"/"}
                              className="text-lg hover:text-primary md:text-xl font-outfit lg:text-2xl font-semibold "
                            >
                              {tool.name}
                            </Link>
                          </div>
                          <Link href={"/"} className="hover:bg-primary/10 p-3 rounded-full">
                            <ArrowUpRight className="size-5" />
                          </Link>
                        </div>
                        <p className="mt-8 font-inter text- text-sm md:text-md opacity-90">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevSlide}
              disabled={carouselPosition === 0 || currentTools.length <= toolsPerPage}
              variant="outline"
              className="size-14 rounded-full text-sm border-2 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="size-7" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={
                carouselPosition >= currentTools.length - toolsPerPage ||
                currentTools.length <= toolsPerPage
              }
              className="size-14 rounded-full text-sm border-2  disabled:cursor-not-allowed"
              variant="outline"
            >
              <ChevronRight className="size-7" />
            </Button>
          </div>
        </div>

        {/* Mobile: Show only 2 tools */}
        <div className="md:hidden space-y-5 flex flex-col items-center justify-center">
          {currentTools.slice(0, 2).map(tool => (
            <div
              key={tool.id}
              className="flex-none w-full max-w-[358px] hover:shadow-lg transition-all duration-300 ease-in-out rounded-2xl "
            >
              {/* Tool Icon */}
              <div className="bg-gradient-to-b from-black/0 h-full to-border p-[1px] rounded-2xl">
                <div className="bg-background p-6 rounded-2xl space-y-6 flex flex-col items-center h-full">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={100}
                    height={100}
                    className="size-28 lg:size-36 rounded-full"
                  />

                  {/* Tool Info */}
                  <div className="space-y-2 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm md:text-base opacity-80">{tool.company}</p>
                        <Link
                          href={"/"}
                          className="text-lg hover:text-primary md:text-xl font-outfit lg:text-2xl font-semibold "
                        >
                          {tool.name}
                        </Link>
                      </div>
                      <Link href={"/"} className="hover:bg-primary/10 p-3 rounded-full">
                        <ArrowUpRight className="size-5" />
                      </Link>
                    </div>
                    <p className="mt-8 font-inter text- text-sm md:text-md opacity-90">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* See All Button - Mobile */}
          <div className="flex justify-center pt-4">
            <Link
              href={"/"}
              className="flex items-center bg-primary not-only:zoom-out-100 hover:bg-primary/90 text-primary-foreground pl-8 pr-6 py-3 rounded-full font-medium shadow-lg hover:shadow-lg transition-all duration-200"
            >
              See All
              <ArrowUpRight className="size-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
