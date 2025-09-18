import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/SectionHeader";
import { LandingPageContent } from "@/types/content.types";

// Define the Category interface
interface Category {
  title: string;
}

// Define the CategoryCardProps interface for the CategoryCard component
interface CategoryCardProps {
  title: string;
}

// Define the TopCategories component
export default function TopCategories({ content }: { content: LandingPageContent }) {
  const { categories_title, categories_subtitle } = content;
  const Categories: Category[] = [
    {
      title: "Clinical Documentation",
    },
    {
      title: "Research & Drug Development",
    },
    {
      title: "Imaging & Diagnostics",
    },
    {
      title: "Practice Management",
    },
    {
      title: "Patient Engagement",
    },
    {
      title: "Billing & compliance",
    },
  ];

  if (!Categories) {
    return null;
  }

  return (
    <section className="mt-10 w-full p-4 md:p-6 lg:mt-14 lg:p-8">
      <div className="gradient-top-border relative min-w-full rounded-3xl px-2 pb-2">
        <div className="to-border rounded-3xl bg-gradient-to-b from-black/0 p-[1px]">
          <div className="bg-background rounded-3xl px-1.5 pb-1.5">
            <div className="bg-background relative min-w-full overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
              {/* Dot Pattern Background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, #2d2e2eee 1px, transparent 1px)`,
                  backgroundSize: "15px 15px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="from-background/30 absolute inset-0 bg-gradient-to-b via-[#A9D5F0]/20 to-[#A9D5F0]" />
              <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
                <Image src="/shapes/top-category.svg" alt="top-category" width={200} height={100} />
              </div>
              <div className="relative z-10 mt-5 space-y-5 pb-7 text-center md:pb-3">
                {/* Top Categories Badge */}
                <SectionHeader>{categories_title}</SectionHeader>

                {/* Section Heading */}
                <h2 className="font-outfit lg:text-[40px mx-auto max-w-[703px] text-3xl leading-tight font-medium md:text-4xl">
                  <span className="text-balance">{categories_subtitle}</span>
                </h2>

                {/* Category Cards Grid */}
                <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-4 md:mt-16 md:gap-6">
                  {/* Row 1 */}
                  {Categories.map(category => (
                    <CategoryCard key={category.title} title={category.title} />
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

const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <Link
      href=""
      className="bg-background border-border flex items-center gap-3 rounded-full border-[1.5px] px-4 py-2.5 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="font-outfit text-md font-medium md:text-lg">{title}</span>
    </Link>
  );
};
