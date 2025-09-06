import Image from "next/image";

import { GradientSeparator } from "@/components/GradientSeparator";

// Example DB data
const aboutData = {
  missionTitle: "Mission Statement",
  missionSubtitle: "Helping physicians navigate healthcare AI with clarity, trust, and purpose.",
  sections: [
    {
      id: 1,
      texts: [
        "At the heart of this platform is a simple belief: <strong> AI should serve physicians, not overwhelm them.</strong>",
        "We`re a physician-founded initiative built to help healthcare professionals <strong>cut through the noise</strong> and discover AI tools that work — saving time, improving workflow, and enhancing patient care.",
        "As practicing doctors ourselves, we`ve experienced firsthand how fragmented and time-consuming it can be to stay updated with the rapidly expanding world of healthcare AI. That's why we created this platform — <strong>a central hub of trustworthy, well-researched, and clearly explained AI tools.</strong>",
      ],
      image: {
        url: "/about-1.jpg",
        alt: "Doctors using AI tools",
      },
    },
    {
      id: 2,
      texts: [
        "Whether you're a solo provider, part of a small clinic, or running a larger institution, our mission is to make it easier for you to find the right solutions — fast. From documentation automation to imaging support, revenue cycle management to remote patient monitoring, we bring clarity and confidence to your AI journey.",
        "We don`t believe AI will replace physicians — but we do believe it can make us better, more efficient, and less burned out.",
        "This site is the first step in a larger vision: to create a <strong>credible, physician-led AI resource</strong> that helps the medical community embrace innovation without sacrificing trust or clinical quality.",
      ],
      image: {
        url: "/about-2.jpg",
        alt: "Healthcare AI innovation",
      },
    },
  ],
  expectations: [
    { title: "Curated AI Tools", desc: "with clear, honest insights" },
    { title: "Independent, Unbiased Reviews", desc: "not pay-to-play listings" },
    { title: "Credible Information", desc: "grounded in clinical relevance" },
    { title: "A Focus on Workflow", desc: "and burnout reduction" },
  ],
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen px-8 md:px-16">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />

      {/* Header Section */}
      <section className="container mx-auto pt-20 text-center">
        <span className="bg-background text-foreground z-10 rounded-full px-4 py-2 text-sm font-medium">
          About Us
        </span>
        <h1 className="font-outfit mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          {aboutData.missionTitle}
        </h1>
        <p className="text-foreground mx-auto mt-6 max-w-xl text-lg font-semibold md:text-xl">
          {aboutData.missionSubtitle}
        </p>
      </section>

      {/* Mission Sections */}
      {aboutData.sections.map((section, index) => (
        <section
          key={section.id}
          className="relative container mx-auto grid items-start gap-16 space-y-8 px-4 py-12 md:grid-cols-12 md:px-8 lg:px-16"
        >
          {index % 2 === 0 ? (
            <>
              {/* Text Left */}
              <div className="text-foreground z-10 order-1 space-y-6 text-lg leading-relaxed md:order-none md:col-span-6">
                {section.texts.map(t => (
                  <p key={t.slice(1, 7)} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </div>
              {/* Image Right (extends below text) */}
              <div className="relative w-full md:col-span-6">
                <div className="relative h-[350px] w-full md:h-[500px]">
                  <Image
                    src={section.image.url}
                    alt={section.image.alt}
                    fill
                    className="rounded-2xl object-cover object-bottom"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image Left (starts above text) */}
              <div className="relative -mt-24 w-full md:col-span-6 md:-mt-32">
                <div className="relative h-[350px] w-full md:h-[500px]">
                  <Image
                    src={section.image.url}
                    alt={section.image.alt}
                    fill
                    className="rounded-2xl object-cover object-top"
                  />
                </div>
              </div>
              {/* Text Right */}
              <div className="text-foreground z-10 order-2 space-y-6 text-lg leading-relaxed md:order-1 md:col-span-6">
                {section.texts.map(t => (
                  <p key={t.slice(1, 7)} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </div>
            </>
          )}
        </section>
      ))}

      {/* What You Can Expect */}
      <section className="container mx-auto py-20 text-center md:px-8">
        <h2 className="font-outfit mb-16 text-3xl font-bold md:text-4xl">What You Can Expect</h2>
        <GradientSeparator variant="dotted" />
        <div className="grid grid-cols-2 gap-3 pt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {aboutData.expectations.map(item => (
            <div className="items-left flex flex-col text-left" key={item.title}>
              <div className="bg-primary mb-4 h-4 w-4 rounded-full" />
              <h3 className="mb-1 text-base font-semibold md:text-lg">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground mx-auto mt-20 max-w-2xl [text-wrap:balance]">
          We`re just getting started — and we`re building this for you. Welcome to a smarter, more
          focused way to explore healthcare AI.
        </p>
      </section>
    </div>
  );
}
