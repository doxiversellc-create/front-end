import { PropsWithChildren } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MainGroupLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainGroupLayout;
