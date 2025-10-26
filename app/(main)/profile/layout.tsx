import { PropsWithChildren } from "react";

import ProfileNav from "@/app/(main)/profile/_components/ProfileNav";

const ProfileLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="hero-gradient min-h-dvh px-4 md:px-8 lg:px-16 xl:px-28">
      <div className="container mx-auto">
        <ProfileNav />
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
