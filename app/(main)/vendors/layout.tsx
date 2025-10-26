import { PropsWithChildren } from "react";

import VendorsNav from "@/app/(main)/vendors/_components/VendorsNav";
import HeroGradient from "@/components/HeroGradient";

const VendorsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col px-4 pt-14 md:px-6 md:pt-20 lg:px-20 lg:pt-28">
      <HeroGradient className="top-0 h-[60vh] md:top-0 lg:top-0" />
      {/* <div className="pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b from-[#9FCFEE] via-[#9fceee1e] to-transparent" /> */}
      <VendorsNav />
      {children}
    </div>
  );
};

export default VendorsLayout;
