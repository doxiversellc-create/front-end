import { CustomImage } from "@/components/CustomImage";

interface ArticleDetailHeroProps {
  title: string;
  excerpt: string;
  featuredImage: string;
}
export default function ArticleDetailHero({
  excerpt,
  featuredImage,
  title,
}: ArticleDetailHeroProps) {
  return (
    <div className="bg-background2 relative mt-7 w-full px-4 py-5 lg:px-0 lg:py-10">
      <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-5">
        <p className="font-outfit text-center text-4xl font-semibold tracking-[1px] md:text-5xl md:text-[56px] lg:leading-[1.05]">
          {title}{" "}
        </p>
        <p className="text-md font-inter text-center md:text-lg">{excerpt}</p>
        <CustomImage
          className="z-20 h-full max-h-[664px] w-full rounded-xl object-cover lg:mt-3 lg:rounded-3xl"
          src={featuredImage}
          alt={`${title} banner image`}
          width={1223}
          height={1080}
        />
      </div>
    </div>
  );
}
