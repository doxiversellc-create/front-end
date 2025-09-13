import Link from "next/link";

import { ChevronDown } from "lucide-react";

import { NavLinks } from "@/components/Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DesktopNavItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}
const DesktopNavItem = ({ children, className, href }: DesktopNavItemProps) => {
  return (
    <Link href={href} className={cn("nav-link transition-colors", className)}>
      {children}
    </Link>
  );
};

interface DesktopNavProps {
  NavLinks: NavLinks;
}
const DesktopNav = ({ NavLinks }: DesktopNavProps) => (
  <div className="hidden items-center gap-6 lg:flex xl:gap-8">
    {NavLinks.map(link => {
      return link.hasChildren ? (
        <DropdownMenu key={link.id}>
          <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 opacity-70 transition-colors hover:opacity-100">
            <span>{link.title}</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background py flex w-60 flex-col rounded-xl border p-0.5 backdrop-blur-md">
            {link.children?.map(childLink => (
              <DropdownMenuItem
                key={childLink.id}
                className="focus:bg-background px-4 py-2.5"
                asChild
              >
                <DesktopNavItem href={childLink.href} className="hover:bg-white">
                  {childLink.title}
                </DesktopNavItem>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DesktopNavItem key={link.id} href={link.href || ""}>
          {link.title}
        </DesktopNavItem>
      );
    })}
  </div>
);

export default DesktopNav;
