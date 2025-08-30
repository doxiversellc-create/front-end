import React from "react";
import Image from "next/image";

import {
  FileText,
  Scan,
  Settings,
  Users,
  DollarSign,
  FlaskConical,
  LucideIcon,
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";

// Define the Category interface
interface Category {
  icon: LucideIcon;
  title: string;
}

// Define the CategoryCardProps interface for the CategoryCard component
interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
}

// Define the TopCategories component
export default function TopCategories() {
  const Categories: Category[] = [
    {
      icon: FileText,
      title: "Clinical Documentation",
    },
    {
      icon: FlaskConical,
      title: "Research & Drug Development",
    },
    {
      icon: Scan,
      title: "Imaging & Diagnostics",
    },
    {
      icon: Settings,
      title: "Practice Management",
    },
    {
      icon: Users,
      title: "Patient Engagement",
    },
    {
      icon: DollarSign,
      title: "Billing & compliance",
    },
  ];

  if (!Categories) {
    return null;
  }

  return (
    <section className=" w-full p-4 md:p-6 lg:p-8 mt-10 lg:mt-14 ">
      <div className="min-w-full relative px-2 pb-2 rounded-3xl gradient-top-border">
        <div className="bg-gradient-to-b from-black/0  to-border p-[1px] rounded-3xl">
          <div className="bg-background pb-1.5 px-1.5 rounded-3xl">
            <div className="relative min-w-full rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden bg-background">
              {/* Dot Pattern Background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, #2d2e2eee 1px, transparent 1px)`,
                  backgroundSize: "15px 15px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="bg-gradient-to-b absolute inset-0  from-background/30 via-[#A9D5F0]/20 to-[#A9D5F0]" />
              <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
                <Image src="/shapes/top-category.svg" alt="top-category" width={200} height={100} />
              </div>
              <div className="relative z-10 text-center space-y-5 mt-5 pb-7 md:pb-3">
                {/* Top Categories Badge */}
                <SectionHeader>Top Categories</SectionHeader>

                {/* Section Heading */}
                <h2 className="text-3xl max-w-[703px] md:text-4xl font-medium font-outfit lg:text-[40px leading-tight  mx-auto">
                  <span className="text-balance">
                    Browse Key Areas Where Technology Transforms Healthcare
                  </span>
                </h2>

                {/* Category Cards Grid */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-6xl mx-auto mt-10 md:mt-16">
                  {/* Row 1 */}
                  {Categories.map(category => (
                    <CategoryCard
                      key={category.title}
                      icon={category.icon}
                      title={category.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CategoryCard = ({ icon: Icon, title }: CategoryCardProps) => {
  return (
    <div className="flex items-center gap-3 bg-background rounded-full pl-2.5 pr-6 py-2.5 border-[1.5px] border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-medium font-outfit  text-md md:text-lg">{title}</span>
    </div>
  );
};
