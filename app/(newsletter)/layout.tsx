import { PropsWithChildren } from "react";

import Navbar from "@/components/Navbar";

const NewsetterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-h-dvh">
      <Navbar />
      {children}
    </div>
  );
};

export default NewsetterLayout;
