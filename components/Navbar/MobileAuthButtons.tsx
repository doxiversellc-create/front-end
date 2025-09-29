import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const MobileAuthButtons = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const loginHref = pathname == "/" ? "/login" : `/login?next=${pathname}`;

  if (!user)
    return (
      <>
        <DropdownMenuItem asChild>
          <Link
            href={loginHref}
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
      </>
    );

  return (
    <DropdownMenuItem>
      <Link href={"/profile"} className="flex items-center gap-2">
        <Avatar className="size-10">
          <AvatarImage src={user.profile_image} />
          <AvatarFallback>{user.first_name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="line-clamp-1 text-sm">{user.username}</p>
          <p className="text-muted-foreground line-clamp-1 text-xs">{user.full_name}</p>
        </div>
      </Link>
    </DropdownMenuItem>
  );
};

export default MobileAuthButtons;
