import { VendorsForm } from "@/app/(main)/vendors/_components/VendorsForm";
import { CMSResponse, socialIcons, SocialMediaIcon } from "@/components/Footer";
import { fetcher } from "@/lib/fetcher";

const VendorsHero = async () => {
  const { data }: { data: CMSResponse | null } = await fetcher<CMSResponse>(
    "/content/navigation/footer"
  );
  return (
    <section className="container mx-auto flex flex-col gap-16 lg:flex-row lg:gap-26 xl:gap-96">
      <div className="lg:w-1/2">
        <p className="font-outfit xl:6xl mt-5 text-4xl font-medium lg:text-5xl">
          Showcase your healthcare AI tool on Doxiverse
        </p>
        <p className="mt-6 lg:mt-8">
          Join Doxiverse, a hub founded by physicians and trusted by thousands of healthcare
          professionals, doctors, hospitals, and care teams actively exploring the latest AI tools
          to enhance patient care.
        </p>

        <div className="mt-24 hidden flex-col gap-4 lg:flex">
          <p>Follow for more!</p>
          <div className="flex justify-center gap-4 md:justify-start">
            {data?.social_media_links
              ?.filter(item => item.is_active)
              .sort((a, b) => a.order - b.order)
              .map(item => (
                <SocialMediaIcon
                  className="size-11 rounded-full border-2 p-2.5"
                  key={item.id}
                  icon={socialIcons[item.platform] || "/social-media-icons/default.svg"}
                  name={item.platform}
                  href={item.url}
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
