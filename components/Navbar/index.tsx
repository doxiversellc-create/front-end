import Logo from "@/components/Logo";
import DesktopAuthButtons from "@/components/Navbar/DesktopAuthButtons";
import DesktopNav from "@/components/Navbar/DesktopNav";
import MobileNav from "@/components/Navbar/MobileNav";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-background/80 border-border/50 border px-6 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav />
          <DesktopAuthButtons />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
