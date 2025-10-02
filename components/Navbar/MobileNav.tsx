"use client";
import Image from "next/image";
import Link from "next/link";

import { DropdownMenu as DropdownMenuType, NavLinks } from "@/components/Navbar";
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
import { cn } from "@/lib/utils";

interface MobileNavItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
const MobileNavItem = ({ children, href, className }: MobileNavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        className
      )}
    >
      {children}
    </Link>
  );
};

interface MobileNavProps {
  NavLinks: NavLinks;
  DropdownMenus?: DropdownMenuType[];
}

const MobileNav = ({ NavLinks, DropdownMenus = [] }: MobileNavProps) => {
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
          {/* Flat NavLinks */}
          {NavLinks.map(link => (
            <DropdownMenuItem key={link.id} asChild className="cursor-pointer">
              <MobileNavItem href={link.url}>{link.title}</MobileNavItem>
            </DropdownMenuItem>
          ))}

          {/* Dropdown menus */}
          {DropdownMenus.map(menu => (
            <DropdownMenuSub key={menu.id}>
              <DropdownMenuSubTrigger className="cursor-pointer px-3 text-base font-medium text-gray-700 hover:text-gray-900">
                {menu.title}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-background flex flex-col gap-y-1 rounded-xl border backdrop-blur-md">
                  {menu.menu_items.map(childLink => (
                    <DropdownMenuItem key={childLink.id} className="cursor-pointer p-2" asChild>
                      <MobileNavItem href={childLink.url} className="w-full hover:bg-gray-100">
                        {childLink.title}
                      </MobileNavItem>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}

          <DropdownMenuSeparator />
          <MobileAuthButtons />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
