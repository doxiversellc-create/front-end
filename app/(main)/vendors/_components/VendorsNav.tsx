"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SectionHeader from "@/components/SectionHeader";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const NavContent = [
  {
    title: "Submit Tool",
    href: "/vendors",
  },
  { title: "My Tools", href: "/vendors/my-tools" },
];
const VendorsNav = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  return (
    <div
      className={cn(
        "container mx-auto flex w-full flex-col gap-4 transition-all duration-200",
        user ? "mb-10" : "mb-0"
      )}
    >
      <SectionHeader className="w-fit shadow-none">For Vendors</SectionHeader>

      <div
        className={cn("flex h-0 w-full scale-y-0 items-end border-b", user && "h-fit scale-y-100")}
      >
        {NavContent.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "all -mb-px border-b-2 px-4 py-3 transition duration-200",
                isActive ? "text-primary border-primary" : "text-foreground border-transparent"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VendorsNav;
