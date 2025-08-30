import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function ServicesSection() {
  return (
    <div className="min-h-screen w-full p-4 md:p-6 lg:p-8 ">
      {/* <div className="min-w-full"> */}
      <div className="bg-gradient-to-b from-foreground/15 to-foreground/0 p-[1px] rounded-3xl">
        <div className="bg-background p-1.5 min-w-full rounded-3xl">
          <div
            className="relative min-w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/shapes/hero-bg.svg)`,
            }}
          >
            {/* Content */}
            <div className="relative z-10 space-y-8 max-w-3xl">
              <SectionHeader>What We Offer</SectionHeader>
              {/* Section Heading */}
              <h2 className="text-3xl max-w-[703px] md:text-4xl font-medium font-outfit lg:text-[40px leading-tight  mx-auto">
                <span className="text-balance">
                  Your Gateway to Smarter, Faster, Better Healthcare
                </span>
              </h2>
              {/* AI Badge */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
