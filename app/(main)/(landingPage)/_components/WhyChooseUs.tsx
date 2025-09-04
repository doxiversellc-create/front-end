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
    <div className="w-full max-w-[1146px] mx-auto mt-4 mb-10 space-y-6 md:space-y-8 px-4 md:px-6 lg:px-3 xl:px-0 lg:space-y-10">
      <div className="flex flex-col items-center lg:items-baseline w-full justify-center lg:justify-between gap-3 lg:gap-5">
        <SectionHeader className="w-fit">Why choose Us?</SectionHeader>
        <div className="flex self-center lg:self-start mx-auto flex-wrap justify-between items-center lg:items-baseline w-full space-y-4">
          <h2 className="max-w-[680px] items-center lg:items-start text-center w-full mx-auto lg:mx-0 lg:text-left text-3xl md:text-4xl lg:text-[40px] font-medium font-outfit leading-tight">
            <span className="text-balance ">
              The Right Technology Partner for Your Healthcare Business
            </span>
          </h2>

          <Link
            href="/why-choose-us"
            className="lg:block hidden float-end rounded-full border px-5 py-3 hover:bg-muted"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center justify-center max-w-6xl mx-auto">
        {whyChooseUsData.map(item => (
          <WhyChooseUsCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex">
        <Link
          href="/why-choose-us"
          className="lg:hidden mx-auto  rounded-full border px-5 py-3 hover:bg-muted"
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
        "bg-gradient-to-r from-primary/40 via-primary/5 max-w-[556px] mx-auto h-full to-background p-[5px] rounded-3xl"
      )}
    >
      <div className="bg-background border rounded-3xl h-full p-6     ">
        <div className="flex items-start gap-4 h-full">
          <div className="flex items-center justify-center w-12 h-12 border rounded-full flex-shrink-0">
            <Icon className="size-6" />
          </div>
          <div className="space-y-8 h-full flex flex-col justify-between">
            <h3 className="text-xl lg:text-2xl font-outfit font-semibold">{title}</h3>
            <p className="font-inter text-base md:text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
