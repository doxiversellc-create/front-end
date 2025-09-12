import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <DropdownMenuItem className="flex flex-col items-start gap-0">
      <p className="text-sm">{user.username}</p>
      <p className="text-muted-foreground text-xs">{user.full_name}</p>
    </DropdownMenuItem>
  );
};

export default MobileAuthButtons;
