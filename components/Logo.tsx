import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo.svg" alt="Doxiverse Logo" width={32} height={32} className="h-8 w-8" />
    <span className="font-outfit text-2xl font-medium">Doxiverse</span>
  </Link>
);

export default Logo;
