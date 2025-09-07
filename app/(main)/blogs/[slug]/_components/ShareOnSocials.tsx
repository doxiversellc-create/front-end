"use client";

import Image from "next/image";

import { Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SocialMediaData {
  icon: string;
  name: string;
  shareUrl: string;
}

const socialMediaData: SocialMediaData[] = [
  {
    icon: "/social-media-icons/linkedin.svg",
    name: "LinkedIn",
    shareUrl: "/",
  },
  {
    icon: "/social-media-icons/x.svg",
    name: "X",
    shareUrl: "/",
  },
  {
    icon: "/social-media-icons/facebook.svg",
    name: "Facebook",
    shareUrl: "/",
  },
];

export default function ShareOnSocials({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"sm"} className="flex items-center gap-2 md:hidden">
            <Share2 className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-3 flex w-fit rounded-full">
          {socialMediaData.map(item => (
            <DropdownMenuItem key={item.name} className="flex items-center gap-2 rounded-full">
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <p className="text-sm font-medium">{item.name}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div
        className={cn(
          "sticky top-24 left-0 hidden flex-col items-center rounded-full border md:flex"
        )}
      >
        <div className="bg-muted flex flex-col items-center gap-2.5 rounded-t-full border-b p-4">
          <Share2 className="size-5" />
          <p className="writing-mode-vertical font-inter text-sm font-medium tracking-[0.2em] uppercase">
            Share this article
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col">
          {socialMediaData.map(item => (
            <button
              key={item.name}
              className={cn(
                "hover:bg-muted/30 group border p-4 transition-all duration-200 hover:scale-105 hover:shadow-md",
                item.name === "Facebook" && "rounded-b-full"
              )}
              title={`Share on ${item.name}`}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className="size-5 transition-transform duration-200 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
