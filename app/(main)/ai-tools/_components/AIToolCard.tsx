import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Tool } from "./../_components/ClientToolsPage";

interface AIToolCardProps {
  tool: Tool;
}
export function AIToolCard({ tool }: AIToolCardProps) {
  return (
    <div
      key={tool.id}
      className="max-w-[280px] flex-none rounded-2xl shadow transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      {/* Tool Icon */}
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          <Image
            src={tool.logo_url || "/default-tool-logo.webp"}
            alt={tool.name}
            width={100}
            height={100}
            className="size-28 rounded-full lg:size-36"
          />

          {/* Tool Info */}
          <div className="flex h-full flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  href={`/ai-tools/${tool.id}`}
                  className="hover:text-primary font-outfit text-lg font-semibold md:text-xl lg:text-2xl"
                >
                  {tool.name}
                </Link>
              </div>
              <Link href={`/ai-tools/${tool.id}`}>
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
            <p className="font-inter md:text-md mt-8 line-clamp-2 min-h-[40px] text-sm opacity-90">
              {tool.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
