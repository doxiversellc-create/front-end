"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NavContent = [
  {
    title: "Profile",
    href: "/profile",
  },
  { title: "Bookmarks", href: "/profile/bookmarks" },
];
const ProfileNav = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-28 w-full items-end border-b">
      {NavContent.map(item => {
        const isActive = pathname == item.href;
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
  );
};

export default ProfileNav;
