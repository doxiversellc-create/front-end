import { PropsWithChildren } from "react";

import Navbar from "@/components/Navbar";

const NewsLetterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-h-dvh">
      <Navbar />
      {children}
    </div>
  );
};

export default NewsLetterLayout;
