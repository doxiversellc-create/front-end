import { PropsWithChildren } from "react";

import Navbar from "@/components/Navbar";

const NewsetterLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NewsetterLayout;
