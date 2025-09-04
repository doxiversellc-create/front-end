import { PropsWithChildren } from "react";

import TitleImage from "./_components/TitleImage";

const AuthPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-dvh w-full p-5">
      <div className="h-full w-full md:w-2/3 lg:w-3/5 ">{children}</div>
      <div className="fixed top-4 right-4 hidden h-full pb-8 md:block md:w-1/3 lg:w-2/5">
        <TitleImage />
      </div>
    </div>
  );
};

export default AuthPageLayout;
