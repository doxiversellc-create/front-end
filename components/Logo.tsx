import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image src="/main-logo.svg" alt="Doxiverse Logo" width={150} height={40} />
  </Link>
);

export default Logo;
