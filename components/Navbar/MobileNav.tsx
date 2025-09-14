"use client";
import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/components/Navbar";
import MobileAuthButtons from "@/components/Navbar/MobileAuthButtons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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

interface MobileNavProps {
  NavLinks: NavLinks;
}
const MobileNav = ({ NavLinks }: MobileNavProps) => {
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
          {NavLinks.map(link => {
            return link.hasChildren ? (
              <DropdownMenuSub key={link.id}>
                <DropdownMenuSubTrigger className="px-3 text-base">
                  {link.title}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="bg-background flex flex-col rounded-xl border backdrop-blur-md">
                    {link.children?.map(childLink => (
                      <DropdownMenuItem key={childLink.id} className="px-4 py-2.5" asChild>
                        <MobileNavItem href={childLink.href}>{childLink.title}</MobileNavItem>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem key={link.id} asChild>
                <MobileNavItem href={link.href || "#"}>{link.title}</MobileNavItem>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuSeparator />
          <MobileAuthButtons />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
