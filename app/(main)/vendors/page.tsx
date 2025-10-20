import SubmitNow from "@/app/(main)/vendors/_components/SubmitNow";
import VendorsHero from "@/app/(main)/vendors/_components/VendorsHero";
import WhyUs from "@/app/(main)/vendors/_components/WhyUs";

interface VendorsPageProps {
  searchParams: Promise<{ tool_name: string }>;
}
const VendorsPage = async ({ searchParams }: VendorsPageProps) => {
  const { tool_name } = await searchParams;
  return (
    <div>
      <VendorsHero toolName={tool_name} />
      <WhyUs />
      <SubmitNow />
    </div>
  );
};

export default VendorsPage;
