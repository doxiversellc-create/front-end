/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

export default function ServicesSection({
  offers_section_title,
  offers_section_subtitle,
  content,
}: {
  offers_section_title: string;
  offers_section_subtitle: string;
  content: any;
}) {
  const featureCardsData: FeatureCardsData[] = [
    {
      id: 1,
      title: content.offer_one_title,
      description: content.offer_one_description,
      isWide: false,
    },
    {
      id: 2,
      title: content.offer_two_title,
      description: content.offer_two_description,
      isWide: false,
    },
    {
      id: 3,
      title: content.offer_three_title,
      description: content.offer_three_description,
      isWide: false,
    },
    {
      id: 4,
      title: content.offer_four_title,
      description: content.offer_four_description,
      isWide: false,
    },
    {
      id: 5,
      title: content.offer_five_title,
      description: content.offer_five_description,
      isWide: true,
      hasButton: true,
      buttonText: content.offer_five_cta_text,
    },
  ];

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="from-foreground/15 to-foreground/0 rounded-3xl bg-gradient-to-b p-[1px]">
        <div className="bg-background min-w-full rounded-3xl p-1.5">
          <div
            className="relative flex min-h-[calc(100vh-2rem)] min-w-full flex-col items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat p-8 text-center md:min-h-[calc(100vh-3rem)] md:p-12 lg:min-h-[calc(100vh-4rem)] lg:p-16"
            style={{
              backgroundImage: `url(/shapes/services-bg.svg)`,
            }}
          >
            <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
              <Image
                src="/shapes/top-category.svg"
                className="hidden brightness-0 invert lg:block"
                alt="top-category"
                width={200}
                height={100}
              />
            </div>
            <div className="relative z-10 space-y-8">
              <SectionHeader>{offers_section_title}</SectionHeader>
              <h2 className="font-outfit mx-auto max-w-[703px] text-3xl leading-tight font-medium md:text-4xl lg:text-[40px]">
                <span className="text-balance">{offers_section_subtitle}</span>
              </h2>
              <div className="mx-auto mt-14 grid w-full max-w-[1141px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    <div className={cn("min-h-full w-full", isWide ? "md:col-span-2 lg:col-span-2" : "")}>
      <div
        className={cn(
          "via-background to-background h-full rounded-3xl bg-gradient-to-r from-[#B2D7FF] p-[5px]",
          id === 1 || id == 3 || id == 4 ? "bg-gradient-to-r" : "bg-gradient-to-bl"
        )}
      >
        <div className="bg-background h-full min-w-full rounded-3xl border">
          <div
            className={cn(
              "bg-background group border-muted relative flex h-full w-full gap-6 rounded-3xl border p-6 transition-shadow lg:gap-12",
              id === 2 ? "flex-col-reverse" : "flex-col",
              id === 5 ? "flex-col md:flex-row-reverse" : ""
            )}
          >
            <div
              className={cn(
                "flex h-full w-full items-center justify-end text-6xl font-bold",
                isWide ? "items-end lg:text-7xl" : "text-6xl"
              )}
            >
              <p
                className={cn(
                  "font-ff-path from-foreground/75 to-foreground/30 bg-gradient-to-b bg-clip-text text-6xl font-semibold text-transparent opacity-30 lg:text-7xl"
                )}
              >
                0{id}
              </p>
            </div>
            {id === 5 ? (
              <div
                className={cn(
                  "relative flex h-full w-full flex-col items-start justify-between gap-3"
                )}
              >
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-outfit text-xl font-semibold lg:text-2xl">{title}</h3>
                  <p className="font-inter text-start text-sm lg:text-base">{description}</p>
                </div>
                {hasButton && buttonText && (
                  <Button className="rounded-full px-6 py-2 font-medium">{buttonText}</Button>
                )}
              </div>
            ) : (
              <div className={cn("relative flex h-full w-full flex-col items-start gap-3")}>
                <h3 className="font-outfit text-xl font-semibold lg:text-2xl">{title}</h3>
                <p className="font-inter text-start text-sm lg:text-base">{description}</p>
                {hasButton && buttonText && (
                  <Button className="rounded-full px-6 py-6 font-medium">{buttonText}</Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
