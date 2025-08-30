"use client";

import Link from "next/link";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface MobileNavItem {
  children: React.ReactNode;
  href: string;
}

// Main Navbar Component
export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mx-4 lg:mx-8">
      <div className="backdrop-blur-md bg-background/80 rounded-full px-6 py-3">
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
const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo.svg" alt="Doxiverse Logo" width={32} height={32} className="w-8 h-8" />
    <span className="font-medium text-2xl font-outfit">Doxiverse</span>
  </Link>
);

// Desktop Navigation Component
const DesktopNav = () => (
  <div className="hidden lg:flex items-center gap-6 xl:gap-8">
    <DesktopNavItem href="/ai-tools">AI Tools Hub</DesktopNavItem>
    <DesktopNavItem href="/blog">AI Pulse Blog</DesktopNavItem>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 opacity-70 hover:opacity-100 transition-colors">
        <span>News</span>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="backdrop-blur-md bg-background/90 border rounded-xl shadow-lg">
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
    <Link href={href} className="nav-link opacity-70 hover:opacity-100 transition-colors">
      {children}
    </Link>
  );
};

// Desktop Auth Buttons Component
const DesktopAuthButtons = () => (
  <div className="hidden lg:flex items-center gap-3">
    <Button
      variant="ghost"
      className="opacity-70 hover:opacity-100 rounded-full hover:shadow-sm transition-all duration-200 px-5"
    >
      Login
    </Button>
    <Button className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-200 text-primary-foreground rounded-full px-6">
      Sign up
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
          className="lg:hidden cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 flex flex-col gap-2  backdrop-blur-md bg-background/90 border rounded-xl shadow-lg"
      >
        <DropdownMenuItem asChild>
          <MobileNavItem href="/ai-tools">AI Tools Hub</MobileNavItem>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <MobileNavItem href="/blog">AI Pulse Blog</MobileNavItem>
        </DropdownMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between w-full px-2 py-1.5 text-sm opacity-70 hover:opacity-100 hover:bg-muted/70 rounded-sm">
            <span>News</span>
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="left"
            className="backdrop-blur-md bg-background/90 border rounded-xl shadow-lg"
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
            className="opacity-70 hover:opacity-100 hover:bg-button/15 px-3 py-2 rounded-md"
          >
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="w-full bg-primary not-first-of-type:hover:bg-button">
          <Link
            href="/signup"
            className="text-primary-foreground  px-3 py-2 rounded-md font-medium"
          >
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
      className="nav-link opacity-70 hover:bg-button/15 px-3 py-2 rounded-md hover:opacity-100 "
    >
      {children}
    </Link>
  );
};
