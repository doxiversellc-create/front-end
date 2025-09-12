"use client";
import Image from "next/image";
import Link from "next/link";

import { ChevronDown } from "lucide-react";

import MobileAuthButtons from "@/components/Navbar/MobileAuthButtons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MobileNavItem {
  children: React.ReactNode;
  href: string;
}
const MobileNavItem = ({ children, href }: MobileNavItem) => {
  return (
    <Link
      href={href}
      className="nav-link hover:bg-button/15 rounded-md px-3 py-2 opacity-70 hover:opacity-100"
    >
      {children}
    </Link>
  );
};

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2">
          <Image
            src="/shapes/hamburger-menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer lg:hidden"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-background/90 flex w-56 flex-col gap-2 rounded-xl border shadow-lg backdrop-blur-md"
        >
          <DropdownMenuItem asChild>
            <MobileNavItem href="/ai-tools">AI Tools Hub</MobileNavItem>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <MobileNavItem href="/researches">AI Pulse Blog</MobileNavItem>
          </DropdownMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-muted/70 flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm opacity-70 hover:opacity-100">
              <span>News</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="left"
              className="bg-background/90 rounded-xl border shadow-lg backdrop-blur-md"
            >
              <DropdownMenuItem asChild>
                <Link href="/news/news-1" className="">
                  News-1
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/news/news-2" className="">
                  News-2
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenuItem asChild>
            <MobileNavItem href="/jobs">AI Jobs</MobileNavItem>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <MobileNavItem href="/vendors">Vendors</MobileNavItem>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <MobileNavItem href="/about">About Us</MobileNavItem>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <MobileAuthButtons />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
