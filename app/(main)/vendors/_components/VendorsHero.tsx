import { Info } from "lucide-react";

import { VendorsForm } from "@/app/(main)/vendors/_components/VendorsForm";
import { socialMediaData, SocialMediaIcon } from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

const VendorsHero = () => {
  return (
    <section className="container mx-auto flex flex-col gap-16 px-4 pt-28 md:px-6 lg:flex-row lg:gap-26 lg:px-20 xl:gap-96">
      <div className="lg:w-1/2">
        <SectionHeader className="shadow-none">For Vendors</SectionHeader>
        <p className="font-outfit xl:6xl mt-5 text-4xl font-medium lg:text-5xl">
          Showcase your healthcare AI tool on Doxiverse
        </p>
        <p className="mt-6 lg:mt-8">
          Join Doxiverse, a hub founded by physicians and trusted by thousands of healthcare
          professionals, doctors, hospitals, and care teams actively exploring the latest AI tools
          to enhance patient care.
        </p>
        <div className="mt-24 hidden items-center gap-2 lg:flex">
          <Info size={14} />
          <p>Fields with * are required</p>
        </div>
        <div className="mt-24 hidden flex-col gap-4 lg:flex">
          <p>Follow for more!</p>
          <div className="flex justify-center gap-4 md:justify-start">
            {socialMediaData.map(item => (
              <SocialMediaIcon
                className="size-11 rounded-full border-2 p-2.5"
                key={item.name}
                icon={item.icon}
                name={item.name}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <VendorsForm />
      </div>
    </section>
  );
};

export default VendorsHero;
