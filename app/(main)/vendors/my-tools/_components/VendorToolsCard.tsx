import Image from "next/image";
import Link from "next/link";

import { MoveUpRight, Star } from "lucide-react";

import { VendorTool } from "@/types/vendor.types";

interface VendorToolsCardProps {
  tool: VendorTool;
}
const VendorToolsCard = ({ tool }: VendorToolsCardProps) => {
  return (
    <div
      key={tool.tool_id}
      className="w-full max-w-[280px] flex-none rounded-2xl shadow-xs transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      {/* Tool Icon */}
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          <Image
            src={tool.logo_url || "/default-tool-logo.webp"}
            alt={tool.tool_name}
            width={100}
            height={100}
            className="size-28 rounded-full lg:size-36"
          />

          {/* Tool Info */}
          <div className="flex h-full w-full flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex max-w-[180px] items-center justify-start space-x-1">
                <p className="font-outfit flex-1 overflow-hidden text-base font-semibold text-ellipsis whitespace-nowrap md:text-lg lg:text-xl">
                  {tool.tool_name}
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-between">
              {/* Rating section with star and text */}
              <div className="flex items-center space-x-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">
                  {parseFloat(tool.average_rating)?.toFixed(1) || 0}
                </span>
                <span className="text-sm text-gray-500">({tool.total_reviews?.length ?? 0})</span>
              </div>
              <div>
                <Link
                  href={`/ai-tools/${tool.tool_id}`}
                  className="text-primary flex items-center gap-1 font-medium hover:underline"
                >
                  See Details
                  <MoveUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorToolsCard;
