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
    <div className="relative mb-4 flex flex-col overflow-hidden rounded-lg">
      <div className="relative aspect-[16/9] w-full">
        <Image src={image} alt={title} fill className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <p className="text-muted-foreground text-xs">{date}</p>
        <h3 className="font-outfit max-w-[500px] text-base font-semibold md:text-lg">{title}</h3>
        <p className="text-muted-foreground line-clamp-2 max-w-[500px] text-sm">{description}</p>
        <Link href="#" className="mt-2 flex text-sm font-medium underline">
          <span> Read More</span> <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
