import Image from "next/image";

import Logo from "@/components/Logo";

const TitleImage = () => {
  return (
    <div className="relative flex items-center h-full overflow-hidden rounded-l-2xl rounded-r-3xl">
      <Image src={"/auth_page_image.webp"} alt="auth page image" fill className="object-fill" />
      <div className="absolute top-10 w-full flex items-center justify-center">
        <Logo />
      </div>
      <div className="absolute  w-full h-full flex items-center justify-center top-0">
        <div className="max-w-md text-center flex flex-col gap-5 max-lg:px-2">
          <h1 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold font-outfit">
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
