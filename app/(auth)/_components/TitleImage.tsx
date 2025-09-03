import Image from "next/image";
import Logo from "../../../components/Logo";

const TitleImage = () => {
  return (
    <div className="relative flex items-center h-full overflow-hidden rounded-l-2xl rounded-r-3xl">
      <Image src={"/auth_page_image.webp"} alt="auth page image" fill className="object-fill" />
      <div className="absolute top-10 w-full flex items-center justify-center">
        <Logo />
      </div>
    </div>
  );
};

export default TitleImage;
