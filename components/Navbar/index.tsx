import Logo from "@/components/Logo";
import DesktopAuthButtons from "@/components/Navbar/DesktopAuthButtons";
import DesktopNav from "@/components/Navbar/DesktopNav";
import MobileNav from "@/components/Navbar/MobileNav";

export type NavLinks = typeof NavLinks;
const NavLinks: {
  id: string; // Added id
  title: string;
  href?: string;
  hasChildren: boolean;
  children?: {
    id: string; // Added id
    title: string;
    description?: string;
    href: string;
  }[];
}[] = [
  {
    id: "ai-tools-hub",
    title: "AI Tools Hub",
    href: "/ai-tools",
    hasChildren: false,
  },
  {
    id: "resources",
    title: "Resources",
    hasChildren: true,
    children: [
      {
        id: "resources-ai-research",
        title: "AI Research",
        description: "Explore the latest studies and breakthroughs in AI research.",
        href: "/researches",
      },
      {
        id: "resources-fda-updates",
        title: "FDA Updates",
        description: "Track the latest regulatory approvals and guidelines for AI in healthcare.",
        href: "/fda-update",
      },
      {
        id: "resources-ai-news",
        title: "AI News",
        description: "Catch up on the latest headlines and industry trends in the world of AI.",
        href: "/ai-news",
      },
    ],
  },
  {
    id: "ai-jobs",
    title: "AI Jobs",
    href: "/ai-jobs",
    hasChildren: false,
  },
  {
    id: "blogs",
    title: "Blogs",
    hasChildren: true,
    children: [
      {
        id: "blogs-overview",
        title: "Blogs",
        description: "Read insightful articles and analysis from our team of AI experts.",
        href: "/blogs",
      },
      {
        id: "blogs-newsletters",
        title: "Newsletters",
        description: "Get exclusive insights and curated AI content delivered to your inbox.",
        href: "/newsletter-subscription",
      },
    ],
  },
  {
    id: "vendors",
    title: "Vendors",
    href: "#",
    hasChildren: false,
  },
  {
    id: "about-us",
    title: "About Us",
    hasChildren: true,
    children: [
      {
        id: "about-us-main",
        title: "About Us",
        href: "/about-us",
      },
      {
        id: "about-us-contact",
        title: "Contact us",
        href: "/contact-us",
      },
    ],
  },
];
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-background/80 border-border/50 border px-6 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav NavLinks={NavLinks} />
          <DesktopAuthButtons />
          <MobileNav NavLinks={NavLinks} />
        </div>
      </div>
    </nav>
  );
}
