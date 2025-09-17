import SubmitNow from "@/app/(main)/vendors/_components/SubmitNow";
import VendorsHero from "@/app/(main)/vendors/_components/VendorsHero";
import WhyUs from "@/app/(main)/vendors/_components/WhyUs";

const VendorsPage = () => {
  return (
    <div className="relative min-h-screen px-4 md:px-6 lg:px-20">
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b from-[#9FCFEE] via-[#9fceee1e] to-transparent" />

      <VendorsHero />
      <WhyUs />
      <SubmitNow />
    </div>
  );
};

export default VendorsPage;
