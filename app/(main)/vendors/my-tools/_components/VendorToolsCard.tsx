import Image from "next/image";
import Link from "next/link";

import { Bookmark, ChevronRight, MessageSquare, MousePointer, Star } from "lucide-react";

import { VendorTool } from "@/types/vendor.types";

interface VendorToolsCardProps {
  tool: VendorTool;
}
const VendorToolsCard = ({ tool }: VendorToolsCardProps) => {
  return (
    <div
      key={tool.tool_id}
      className="w-full max-w-[380px] flex-none rounded-2xl shadow-none transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          <div className="mb-2 flex justify-center">
            <Image
              src={tool.logo_url || "/default-tool-logo.webp"}
              alt={tool.tool_name}
              width={100}
              height={100}
              className="size-28 rounded-full lg:size-36"
            />
          </div>

          <div className="mb-2 text-center">
            <h3 className="text-foreground line-clamp-2 text-xl font-bold">{tool.tool_name}</h3>
          </div>

          <div className="mb-4 flex justify-center">
            <Link
              href={`/ai-tools/${tool.tool_id}`}
              className="group flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline"
            >
              See Details
              <ChevronRight className="h-4 w-4 transition-all group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted/40 flex items-center gap-2 rounded-lg p-2">
              <Bookmark className="size-4 text-blue-500" />

              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Bookmarks</span>

                <div className="w-full font-bold">{tool.total_bookmarks}</div>
              </div>
            </div>
            <div className="bg-muted/40 flex items-center gap-2 rounded-lg p-2">
              <MessageSquare className="size-4 text-green-500" />

              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Reviews</span>

                <div className="w-full font-bold">{tool.total_reviews}</div>
              </div>
            </div>
            <div className="bg-muted/40 flex items-center gap-2 rounded-lg p-2">
              <MousePointer className="size-4 text-purple-500" />

              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Clicks</span>

                <div className="w-full font-bold">{tool.total_clicks}</div>
              </div>
            </div>
            <div className="bg-muted/40 flex items-center gap-2 rounded-lg p-2">
              <Star className="size-4 text-yellow-500" />

              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Avg Rating</span>

                <div className="w-full font-bold">{tool.average_rating}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorToolsCard;
