import Image from "next/image";
import { GradientSeparator } from "../../components/GradientSeparator";

// Example DB data
const aboutData = {
  missionTitle: "Mission Statement",
  missionSubtitle: "Helping physicians navigate healthcare AI with clarity, trust, and purpose.",
  sections: [
    {
      texts: [
        "At the heart of this platform is a simple belief: <strong> AI should serve physicians, not overwhelm them.</strong>",
        "We`re a physician-founded initiative built to help healthcare professionals <strong>cut through the noise</strong> and discover AI tools that work — saving time, improving workflow, and enhancing patient care.",
        "As practicing doctors ourselves, we`ve experienced firsthand how fragmented and time-consuming it can be to stay updated with the rapidly expanding world of healthcare AI. That's why we created this platform — <strong>a central hub of trustworthy, well-researched, and clearly explained AI tools.</strong>",
      ],
      image: {
        url: "https://i.pinimg.com/1200x/19/e6/92/19e6923a2a1573055e961cd412af48a4.jpg",
        alt: "Doctors using AI tools",
      },
    },
    {
      texts: [
        "Whether you're a solo provider, part of a small clinic, or running a larger institution, our mission is to make it easier for you to find the right solutions — fast. From documentation automation to imaging support, revenue cycle management to remote patient monitoring, we bring clarity and confidence to your AI journey.",
        "We don`t believe AI will replace physicians — but we do believe it can make us better, more efficient, and less burned out.",
        "This site is the first step in a larger vision: to create a <strong>credible, physician-led AI resource</strong> that helps the medical community embrace innovation without sacrificing trust or clinical quality.",
      ],
      image: {
        url: "https://i.pinimg.com/1200x/e2/06/84/e20684d66c226b2dcfc60e514b234762.jpg",
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
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/25 to-transparent pointer-events-none -z-10" />

      {/* Header Section */}
      <section className="container mx-auto  pt-20 text-center">
        <span className="bg-background  z-10 text-foreground px-4 py-2 text-sm rounded-full font-medium">
          About Us
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight font-outfit">
          {aboutData.missionTitle}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground font-semibold max-w-xl mx-auto">
          {aboutData.missionSubtitle}
        </p>
      </section>

      {/* Mission Sections */}
      {aboutData.sections.map((section, index) => (
        <section
          key={index}
          className="container mx-auto grid md:grid-cols-12 gap-16 space-y-8 px-4 md:px-8 lg:px-16 py-12 items-start relative"
        >
          {index % 2 === 0 ? (
            <>
              {/* Text Left */}
              <div className="md:col-span-6 space-y-6 text-foreground text-lg leading-relaxed z-10 order-1 md:order-none">
                {section.texts.map((t, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </div>
              {/* Image Right (extends below text) */}
              <div className="md:col-span-6 relative w-full">
                <div className="w-full h-[350px] md:h-[500px] relative">
                  <Image
                    src={section.image.url}
                    alt={section.image.alt}
                    fill
                    className="object-cover object-bottom rounded-2xl"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image Left (starts above text) */}
              <div className="md:col-span-6 relative w-full -mt-24 md:-mt-32">
                <div className="w-full h-[350px] md:h-[500px] relative">
                  <Image
                    src={section.image.url}
                    alt={section.image.alt}
                    fill
                    className="object-cover object-top rounded-2xl"
                  />
                </div>
              </div>
              {/* Text Right */}
              <div className="md:col-span-6 space-y-6 text-foreground text-lg leading-relaxed z-10 order-2 md:order-1">
                {section.texts.map((t, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </div>
            </>
          )}
        </section>
      ))}

      {/* What You Can Expect */}
      <section className="container mx-auto text-center md:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 font-outfit">What You Can Expect</h2>
        <GradientSeparator variant="dotted" />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 pt-16">
          {aboutData.expectations.map(item => (
            <div className="flex flex-col items-left text-left" key={item.title}>
              <div className="w-4 h-4 rounded-full bg-primary mb-4" />
              <h3 className="font-semibold text-base md:text-lg mb-1">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-20  [text-wrap:balance] text-foreground max-w-2xl mx-auto">
          We`re just getting started — and we`re building this for you. Welcome to a smarter, more
          focused way to explore healthcare AI.
        </p>
      </section>
    </div>
  );
}
