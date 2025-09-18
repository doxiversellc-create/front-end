// "use client";

// import { Bookmark } from "lucide-react";

// import { AuthModal } from "@/components/AuthModal";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/contexts/AuthContext";

// export default function BookmarkButton({
//   isBookmarked,
//   count,
// }: {
//   isBookmarked: boolean;
//   count: number;
// }) {
//   const { user } = useAuth();
//   return user ? (
//     <Button variant="outline" className="flex h-6 w-6 items-center justify-center rounded-full">
//       <Bookmark className="h-5 w-5" />
//     </Button>
//   ) : (
//     <AuthModal
//       trigger={
//         <Button variant="outline" className="flex h-6 w-6 items-center justify-center rounded-full">
//           <Bookmark className="h-5 w-5" />
//         </Button>
//       }
//       title="Sign up to Save Tools"
//       description="Create an account to bookmark and manage your favorite tools."
//     />
//   );
// }

"use client";

import { Bookmark } from "lucide-react";

import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

export default function BookmarkButton({
  isBookmarked,
  count,
}: {
  isBookmarked: boolean;
  count: number;
}) {
  const { user } = useAuth();

  const button = (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full",
          isBookmarked && "bg-primary hover:bg-primary/90 text-white"
        )}
      >
        <Bookmark className={cn("h-5 w-5", isBookmarked ? "fill-current" : "stroke-current")} />
      </Button>
      <span className="text-muted-foreground text-lg">{count}</span>
    </div>
  );

  return user ? (
    button
  ) : (
    <AuthModal
      trigger={button}
      title="Sign up to Save Tools"
      description="Create an account to bookmark and manage your favorite tools."
    />
  );
}
