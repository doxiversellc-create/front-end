import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
interface FeatureCardsData {
  id: number;
  title: string;
  description: string;
  isWide: boolean;
  hasButton?: boolean;
  buttonText?: string;
}

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  isWide?: boolean;
  hasButton?: boolean;
  buttonText?: string;
}

export default function ServicesSection() {
  const featureCardsData: FeatureCardsData[] = [
    {
      id: 1,
      title: "Discover Tools",
      description: "Browse our curated directory of AI solutions tailored for healthcare.",
      isWide: false,
    },
    {
      id: 2,
      title: "Get Insights",
      description: "Learn how tools boost efficiency, based on expert analysis and user reviews.",
      isWide: false,
    },
    {
      id: 3,
      title: "Stay Updated",
      description: "Real-time news on AI advancements and regulations.",
      isWide: false,
    },
    {
      id: 4,
      title: "For Vendors",
      description: "Exhibit your AI to reach thousands of professionals.",
      isWide: false,
    },
    {
      id: 5,
      title: "Community-Driven",
      description: "A space to submit reviews and help peers. Are you using an AI tool?",
      isWide: true,
      hasButton: true,
      buttonText: "Submit review",
    },
  ];
  return (
    <div className=" w-full p-4 md:p-6 lg:p-8 ">
      <div className="bg-gradient-to-b from-foreground/15 to-foreground/0 p-[1px] rounded-3xl">
        <div className="bg-background p-1.5 min-w-full rounded-3xl">
          <div
            className="relative min-w-full min-h-[calc(100vh-2rem)]  md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/shapes/services-bg.svg)`,
            }}
          >
            <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
              <Image
                src="/shapes/top-category.svg"
                className="invert brightness-0 hidden lg:block"
                alt="top-category"
                width={200}
                height={100}
              />
            </div>
            <div className="relative z-10 space-y-8 ">
              <SectionHeader>What We Offer</SectionHeader>
              <h2 className="text-3xl max-w-[703px] md:text-4xl font-medium font-outfit lg:text-[40px] leading-tight  mx-auto">
                <span className="text-balance">
                  Your Gateway to Smarter, Faster, Better Healthcare
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6 w-full max-w-[1141px] mx-auto">
                {featureCardsData.map(card => (
                  <FeatureCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    isWide={card.isWide}
                    hasButton={card.hasButton}
                    buttonText={card.buttonText}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  id,
  title,
  description,
  isWide = false,
  hasButton = false,
  buttonText,
}: FeatureCardProps) {
  return (
    <div className={cn("w-full min-h-full  ", isWide ? "md:col-span-2 lg:col-span-2" : "")}>
      <div
        className={cn(
          "bg-gradient-to-r from-[#B2D7FF] via-background h-full to-background p-[5px] rounded-3xl",
          id === 1 || id == 3 || id == 4 ? "bg-gradient-to-r" : "bg-gradient-to-bl"
        )}
      >
        <div className="bg-background border min-w-full rounded-3xl h-full">
          <div
            className={cn(
              "relative flex  gap-6 lg:gap-12 w-full h-full bg-background rounded-3xl p-6  transition-shadow group border border-muted",
              id === 2 ? "flex-col-reverse" : "flex-col",
              id === 5 ? "flex-col md:flex-row-reverse" : ""
            )}
          >
            <div
              className={cn(
                "flex items-center justify-end w-full h-full text-6xl font-bold",
                isWide ? "lg:text-7xl items-end" : "text-6xl"
              )}
            >
              <p
                className={cn(
                  "text-6xl lg:text-7xl font-semibold  opacity-30 font-ff-path bg-gradient-to-b  from-foreground/75 to-foreground/30 bg-clip-text text-transparent"
                )}
              >
                0{id}
              </p>
            </div>
            {id === 5 ? (
              <div
                className={cn(
                  "relative w-full flex flex-col items-start justify-between gap-3 h-full"
                )}
              >
                <div className="flex flex-col gap-3 items-start">
                  <h3 className="text-xl lg:text-2xl font-outfit font-semibold">{title}</h3>
                  <p className="text-start text-sm lg:text-base font-inter">{description}</p>
                </div>
                {hasButton && buttonText && (
                  <Button className=" px-6 py-2 rounded-full font-medium">{buttonText}</Button>
                )}
              </div>
            ) : (
              <div className={cn("relative w-full flex flex-col items-start gap-3 h-full")}>
                <h3 className="text-xl lg:text-2xl font-outfit font-semibold">{title}</h3>
                <p className="text-start text-sm lg:text-base font-inter">{description}</p>
                {hasButton && buttonText && (
                  <Button className=" px-6 py-6 rounded-full font-medium">{buttonText}</Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
