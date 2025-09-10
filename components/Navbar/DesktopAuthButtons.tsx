import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const DesktopAuthButtons = () => {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button
        variant="ghost"
        className="rounded-full px-5 opacity-70 transition-all duration-200 hover:opacity-100 hover:shadow-sm"
      >
        <Link href={`/login?next=${pathname}`}>Login</Link>
      </Button>
      <Button className="flex items-center gap-1">
        Sign up <ArrowUpRight />
      </Button>
    </div>
  );
};

export default DesktopAuthButtons;
