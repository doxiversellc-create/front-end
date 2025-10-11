/* eslint-disable simple-import-sort/imports */
import Link from "next/link";

import { ChevronDown } from "lucide-react";

import { DropdownMenu, NavLinks } from "@/components/Navbar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu as UIDropdownMenu,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DesktopNavItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const DesktopNavItem = ({ children, className, href }: DesktopNavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900",
        className
      )}
    >
      {children}
    </Link>
  );
};

interface DesktopNavProps {
  NavLinks: NavLinks;
  DropdownMenus?: DropdownMenu[];
}

const DesktopNav = ({ NavLinks, DropdownMenus = [] }: DesktopNavProps) => (
  <div className="hidden items-center gap-6 lg:flex xl:gap-8">
    {NavLinks.map(link => (
      <DesktopNavItem key={link.id} href={link.url}>
        {link.title}
      </DesktopNavItem>
    ))}

    {DropdownMenus.map(menu => (
      <UIDropdownMenu key={menu.id}>
        <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 focus:ring-0 focus:outline-none">
          <span>{menu.title}</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex w-60 flex-col rounded-lg border border-gray-200 bg-white p-1 shadow-md">
          {menu.menu_items.map(item => (
            <DropdownMenuItem key={item.id} className="p-0" asChild>
              <DesktopNavItem href={item.url} className="w-full text-gray-700 hover:bg-gray-100">
                {item.title}
              </DesktopNavItem>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </UIDropdownMenu>
    ))}
  </div>
);

export default DesktopNav;
