import Image from "next/image";

import Logo from "@/components/Logo";

const TitleImage = () => {
  return (
    <div className="relative flex h-full items-center overflow-hidden rounded-l-2xl rounded-r-3xl">
      <Image src={"/auth_page_image.webp"} alt="auth page image" fill className="object-fill" />
      <div className="absolute top-10 flex w-full items-center justify-center">
        <Logo />
      </div>
      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <div className="flex max-w-md flex-col gap-5 text-center max-lg:px-2">
          <h1 className="font-outfit text-3xl font-semibold lg:text-4xl xl:text-5xl">
            The Future Of Healthcare Ai Starts Here
          </h1>
          <p className="text-lg">
            Founded by physicians, Doxiverse is your one-stop hub for healthcare AI tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleImage;
