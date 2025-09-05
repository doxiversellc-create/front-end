import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo.svg" alt="Doxiverse Logo" width={32} height={32} className="w-8 h-8" />
    <span className="font-medium text-2xl font-outfit">Doxiverse</span>
  </Link>
);

export default Logo;
