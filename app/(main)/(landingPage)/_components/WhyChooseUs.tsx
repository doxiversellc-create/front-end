import Link from "next/link";

import { File, LampDesk, LucideIcon, MegaphoneIcon, PanelsTopLeft } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

interface WhyChooseUsData {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export default function WhyChooseUs() {
  const whyChooseUsData: WhyChooseUsData[] = [
    {
      id: 1,
      title: "Unbiased Reviews",
      icon: File,
      description:
        "Your Trusted hub for unbiased reviews, Latest updates, and practical AI solutions for clinicians and Health care professionals.",
    },
    {
      id: 2,
      title: "Physical-Led Initiative",
      icon: LampDesk,
      description:
        "Founded and guided by healthcare professionals, ensuring real-world relevance and practical solutions.",
    },
    {
      id: 3,
      title: "Up-to-Date Information",
      icon: PanelsTopLeft,
      description:
        "Stay ahead with continuously updated AI tools, medical technologies, and healthcare industry trends.",
    },
    {
      id: 4,
      title: "Community Driven Insight",
      icon: MegaphoneIcon,
      description:
        "Built for professionals, empowering experts and peers to share experiences and drive smarter healthcare solutions.",
    },
  ];
  return (
    <div className="mx-auto mt-4 mb-10 w-full max-w-[1146px] space-y-6 px-4 md:space-y-8 md:px-6 lg:space-y-10 lg:px-3 xl:px-0">
      <div className="flex w-full flex-col items-center justify-center gap-3 lg:items-baseline lg:justify-between lg:gap-5">
        <SectionHeader className="w-fit">Why choose Us?</SectionHeader>
        <div className="mx-auto flex w-full flex-wrap items-center justify-between space-y-4 self-center lg:items-baseline lg:self-start">
          <h2 className="font-outfit mx-auto w-full max-w-[680px] items-center text-center text-3xl leading-tight font-medium md:text-4xl lg:mx-0 lg:items-start lg:text-left lg:text-[40px]">
            <span className="text-balance">
              The Right Technology Partner for Your Healthcare Business
            </span>
          </h2>

          <Link
            href="/why-choose-us"
            className="hover:bg-muted float-end hidden rounded-full border px-5 py-3 lg:block"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2 lg:gap-8">
        {whyChooseUsData.map(item => (
          <WhyChooseUsCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex">
        <Link
          href="/why-choose-us"
          className="hover:bg-muted mx-auto rounded-full border px-5 py-3 lg:hidden"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

const WhyChooseUsCard = ({ title, icon: Icon, description }: WhyChooseUsData) => {
  return (
    <div
      className={cn(
        "from-primary/40 via-primary/5 to-background mx-auto h-full max-w-[556px] rounded-3xl bg-gradient-to-r p-[5px]"
      )}
    >
      <div className="bg-background h-full rounded-3xl border p-6">
        <div className="flex h-full items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border">
            <Icon className="size-6" />
          </div>
          <div className="flex h-full flex-col justify-between space-y-8">
            <h3 className="font-outfit text-xl font-semibold lg:text-2xl">{title}</h3>
            <p className="font-inter text-base leading-relaxed md:text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
