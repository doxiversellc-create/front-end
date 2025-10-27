import { PropsWithChildren, Suspense } from "react";

import Footer, { FooterFallback } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo/structured-data";

const MainGroupLayout = ({ children }: PropsWithChildren) => {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema]} />
      <Navbar />
      {children}
      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainGroupLayout;
