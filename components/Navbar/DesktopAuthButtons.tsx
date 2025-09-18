"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const DesktopAuthButtons = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const loginHref = pathname == "/" ? "/login" : `/login?next=${pathname}`;
  if (!user)
    return (
      <>
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            className="rounded-full px-5 opacity-70 transition-all duration-200 hover:opacity-100 hover:shadow-sm"
            asChild
          >
            <Link href={loginHref}>Login</Link>
          </Button>
          <Button className="flex items-center gap-1" asChild>
            <Link href="/signup">
              Sign up <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </>
    );

  return (
    <Avatar className="hidden lg:block">
      <AvatarImage src={user.profile_image} />

      <AvatarFallback>{user.first_name[0]}</AvatarFallback>
    </Avatar>
  );
};

export default DesktopAuthButtons;
