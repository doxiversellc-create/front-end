import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export interface AIToolCard {
  id: number;
  name: string;
  company: string;
  description: string;
  icon: string;
  category: string;
}
interface AIToolCardProps {
  tool: AIToolCard;
}
export function AIToolCard({ tool }: AIToolCardProps) {
  return (
    <div
      key={tool.id}
      className="flex-none max-w-[358px] hover:shadow-lg shadow transition-all duration-300 ease-in-out rounded-2xl "
    >
      {/* Tool Icon */}
      <div className="bg-gradient-to-b from-black/0 h-full to-border p-[1px] rounded-2xl">
        <div className="bg-background p-6 rounded-2xl space-y-6 flex flex-col items-center h-full">
          <Image
            src={tool.icon}
            alt={tool.name}
            width={100}
            height={100}
            className="size-28 lg:size-36 rounded-full"
          />

          {/* Tool Info */}
          <div className="space-y-2 h-full flex flex-col justify-between ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm md:text-base opacity-80">{tool.company}</p>
                <Link
                  // href={`/ai-tools${tool.id}`}
                  href="/ai-tools/notable-health"
                  className="text-lg hover:text-primary md:text-xl font-outfit lg:text-2xl font-semibold "
                >
                  {tool.name}
                </Link>
              </div>
              <Link
                href="/ai-tools/notable-health"
                // href={`/ai-tools${tool.id}`}
                className="hover:bg-primary/10 p-3 rounded-full"
              >
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
            <p className="mt-8 font-inter text- text-sm md:text-md opacity-90 line-clamp-1">
              {tool.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
