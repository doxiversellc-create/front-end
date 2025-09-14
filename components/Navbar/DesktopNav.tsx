import Link from "next/link";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNavItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="nav-link opacity-70 transition-colors hover:opacity-100">
      {children}
    </Link>
  );
};
const DesktopNav = () => (
  <div className="hidden items-center gap-6 lg:flex xl:gap-8">
    <DesktopNavItem href="/ai-tools">AI Tools Hub</DesktopNavItem>
    <DesktopNavItem href="/researches">AI Pulse Blog</DesktopNavItem>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 opacity-70 transition-colors hover:opacity-100">
        <span>News</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background/90 rounded-xl border backdrop-blur-md">
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

    <DesktopNavItem href="/news"> AI Jobs</DesktopNavItem>
    <DesktopNavItem href="/vendors">Vendors</DesktopNavItem>
    <DesktopNavItem href="/about">About Us</DesktopNavItem>
  </div>
);

export default DesktopNav;
