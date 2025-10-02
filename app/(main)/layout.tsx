import { PropsWithChildren, Suspense } from "react";

import Footer, { FooterFallback } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MainGroupLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainGroupLayout;
