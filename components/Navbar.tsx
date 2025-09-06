"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";

interface MobileNavItem {
  children: React.ReactNode;
  href: string;
}

// Main Navbar Component
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-background/80 border-border/50 border px-6 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav />
          <DesktopAuthButtons />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

// Logo component for reusability

// Desktop Navigation Component
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

const DesktopNavItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="nav-link opacity-70 transition-colors hover:opacity-100">
      {children}
    </Link>
  );
};

// Desktop Auth Buttons Component
const DesktopAuthButtons = () => (
  <div className="hidden items-center gap-3 lg:flex">
    <Button
      variant="ghost"
      className="rounded-full px-5 opacity-70 transition-all duration-200 hover:opacity-100 hover:shadow-sm"
    >
      Login
    </Button>
    <Button className="flex items-center gap-1">
      Sign up <ArrowUpRight />
    </Button>
  </div>
);

// Mobile Navigation Component
const MobileNav = () => (
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
        <DropdownMenuItem asChild>
          <Link
            href="/login"
            className="hover:bg-button/15 rounded-md px-3 py-2 opacity-70 hover:opacity-100"
          >
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="bg-primary not-first-of-type:hover:bg-button w-full">
          <Link href="/signup" className="text-primary-foreground rounded-md px-3 py-2 font-medium">
            Sign up
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

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
