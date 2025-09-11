import Image from "next/image";

import { fetchPageContent } from "@/actions/content.actions";
import { GradientSeparator } from "@/components/GradientSeparator";

export async function generateMetadata() {
  const { content } = await fetchPageContent("aboutus");

  return {
    title: content.title,
    description: content.description || "Learn more about us.",
  };
}

export default async function AboutUsPage() {
  const { content } = await fetchPageContent("aboutus");

  // Transform DB format to frontend format
  const aboutData = {
    missionTitle: content.subtitle,
    missionSubtitle: content.mission_tagline,
    sections: [
      {
        id: 1,
        texts: content.paragraph_one
          .split("</p>")
          .filter(Boolean)
          .map((p: string) => `${p}</p>`), // split into paragraphs
        image: {
          url: content.image_paragraph_one_url || "/default-1.jpg",
          alt: "Section 1 Image",
        },
      },
      {
        id: 2,
        texts: content.paragraph_two
          .split("</p>")
          .filter(Boolean)
          .map((p: string) => `${p}</p>`),
        image: {
          url: content.image_paragraph_two_url || "/default-2.jpg",
          alt: "Section 2 Image",
        },
      },
    ],
    expectations: [
      { title: content.feature_one_title, desc: content.feature_one_description },
      { title: content.feature_two_title, desc: content.feature_two_description },
      { title: content.feature_three_title, desc: content.feature_three_description },
      { title: content.feature_four_title, desc: content.feature_four_description },
    ],
    footerMessage: content.footer_message,
  };

  return (
    <div className="min-h-screen px-8 md:px-16">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />

      {/* Header Section */}
      <section className="container mx-auto pt-20 text-center">
        <span className="bg-background text-foreground z-10 rounded-full px-4 py-2 text-sm font-medium">
          {content?.page_title}
        </span>
        <h1 className="font-outfit mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          {content.subtitle}
        </h1>
        <p className="text-foreground mx-auto mt-6 max-w-xl text-lg font-semibold md:text-xl">
          {content.mission_tagline}
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
                {section.texts.map((t: string) => (
                  <p key={t.slice(20, 27)} dangerouslySetInnerHTML={{ __html: t }} />
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
                {section.texts.map((t: string) => (
                  <p key={t.slice(20, 27)} dangerouslySetInnerHTML={{ __html: t }} />
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
          {aboutData.footerMessage}
        </p>
      </section>
    </div>
  );
}
