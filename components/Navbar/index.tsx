import Logo from "@/components/Logo";
import DesktopAuthButtons from "@/components/Navbar/DesktopAuthButtons";
import DesktopNav from "@/components/Navbar/DesktopNav";
import MobileNav from "@/components/Navbar/MobileNav";
import { fetcher } from "@/lib/fetcher";

export interface NavLink {
  id: number;
  title: string;
  url: string;
  is_external: boolean;
  is_active: boolean;
  order: number;
}

// Dropdown menu with nested menu items
export interface DropdownMenu {
  id: number;
  title: string;
  menu_items: NavLink[];
  is_active: boolean;
  order: number;
}

// Full API response
export interface NavbarResponse {
  navbar_links: NavLink[];
  dropdown_menus: DropdownMenu[];
}
export type NavLinks = NavLink[];

export default async function Navbar() {
  const { data } = await fetcher<NavbarResponse>("/content/navigation/navbar");

  const defaultNavLinks: NavLink[] = [
    {
      id: 1,
      title: "AI Tools",
      url: "/categories",
      is_external: false,
      is_active: true,
      order: 1,
    },
    {
      id: 2,
      title: "AI Research",
      url: "/researches",
      is_external: false,
      is_active: true,
      order: 2,
    },
    {
      id: 3,
      title: "Newsletter",
      url: "/newsletter-subscription",
      is_external: false,
      is_active: true,
      order: 3,
    },
    {
      id: 4,
      title: "Vendors",
      url: "/vendors",
      is_external: false,
      is_active: true,
      order: 3,
    },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-background/80 border-border/50 border px-6 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav
            NavLinks={data?.navbar_links || defaultNavLinks}
            DropdownMenus={data?.dropdown_menus}
          />
          <DesktopAuthButtons />
          <MobileNav
            NavLinks={data?.navbar_links || defaultNavLinks}
            DropdownMenus={data?.dropdown_menus}
          />
        </div>
      </div>
    </nav>
  );
}
