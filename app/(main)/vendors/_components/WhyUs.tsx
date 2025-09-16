import Image from "next/image";

const whyUsContent = [
  {
    id: 1,
    icon: "/shapes/people.svg",
    title: "Reach a Targeted Audience",
    description:
      "Gain visibility among a growing community of healthcare professionals actively searching for AI solutions.",
  },
  {
    id: 2,
    icon: "/shapes/medal-star.svg",
    title: "Build Credibility",
    description:
      "Be part of a curated list trusted for its unbiased insights and community-driven reviews.",
  },
  {
    id: 3,
    icon: "/shapes/messages-2.svg",
    title: "Engage decision-makers",
    description:
      "From frontline clinicians to practice managers & healthcare organizations who are seeking practical, vetted tools.",
  },
];
const WhyUs = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-20 py-16 text-center md:py-24">
      <div>
        <span className="bg-background text-foreground z-10 w-fit rounded-full border px-4 py-2 text-sm font-medium">
          For Vendors
        </span>
        <h1 className="font-outfit mt-5 text-4xl font-medium tracking-tight">
          Why Exhibit with Us?
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-14">
        {whyUsContent.map(item => (
          <div key={item.id} className="flex flex-col items-start text-start">
            <Image src={item.icon} alt={`${item.title} icon`} width={40} height={40} />
            <p className="font-outfit mt-16 text-xl font-semibold">{item.title}</p>
            <p className="text-secondary-foreground mt-5">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
