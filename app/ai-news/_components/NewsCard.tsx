import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
};

export default function NewsCard({ image, date, title, description }: NewsCardProps) {
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden mb-4">
      <div className="relative aspect-[16/9] w-full">
        <Image src={image} alt={title} fill className="object-cover rounded-lg" />
      </div>
      <div className="pt-4 flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">{date}</p>
        <h3 className="text-base md:text-lg font-semibold font-outfit max-w-[500px]">{title}</h3>
        <p className=" text-sm  text-muted-foreground line-clamp-2 max-w-[500px]">{description}</p>
        <Link href="#" className="text-sm font-medium mt-2 flex underline">
          <span> Read More</span> <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
