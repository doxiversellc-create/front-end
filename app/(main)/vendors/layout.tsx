import { PropsWithChildren } from "react";

import VendorsNav from "@/app/(main)/vendors/_components/VendorsNav";

const VendorsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative grid min-h-screen grid-cols-1 px-4 pt-14 md:px-6 md:pt-20 lg:px-20 lg:pt-28">
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b from-[#9FCFEE] via-[#9fceee1e] to-transparent" />
      <VendorsNav />
      {children}
    </div>
  );
};

export default VendorsLayout;
