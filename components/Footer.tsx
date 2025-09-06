import Image from "next/image";
import Link from "next/link";

import { cn } from "../lib/utils";

interface SocialMediaData {
  icon: string;
  name: string;
  href: string;
  className?: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const socialMediaData: SocialMediaData[] = [
  {
    icon: "/social-media-icons/facebook.svg",
    name: "Facebook",
    href: "/",
  },
  {
    icon: "/social-media-icons/instagram.svg",
    name: "Instagram",
    href: "/",
  },
  {
    icon: "/social-media-icons/linkedin.svg",
    name: "Linkedin",
    href: "/",
  },
  {
    icon: "/social-media-icons/x.svg",
    name: "X",
    href: "/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background font-inter gradient-top-border mt-6 px-4 py-12 md:px-6 md:py-12 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Doxiverse Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-outfit text-2xl font-medium">Doxiverse</span>
            </Link>
            <p className="mt-8 max-w-xs leading-relaxed opacity-80">
              Founded by physicians, Doxiverse is the one-stop hub for AI tools
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4 lg:ml-12">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/">Vendors</FooterLink>
              </li>
              <li>
                <FooterLink href="/">Contact Us</FooterLink>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/">AI Tools</FooterLink>
              </li>
              <li>
                <FooterLink href="/">Researches</FooterLink>
              </li>
              <li>
                <FooterLink href="/">News</FooterLink>
              </li>
              <FooterLink href="/">AI Jobs</FooterLink>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <p className="leading-relaxed opacity-70">
              Question or feedback? we&apos;d love to listen form you.
            </p>
            <div className="mt-8 flex gap-4">
              {socialMediaData.map(item => (
                <SocialMediaIcon
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="gradient-top-border mt-12 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-sm">
            <span className="font-semibold opacity-100">©Doxiverse</span>,{" "}
            <span className="opacity-70">All rights reserved 2025</span>
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/documents/terms-of-use"
              className="opacity-70 transition-colors hover:opacity-100"
            >
              Terms of Use
            </Link>
            <span className="text-muted-foreground/70">•</span>
            <Link
              href="/documents/privacy-policy"
              className="opacity-70 transition-colors hover:opacity-100"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href} className="nav-link opacity-70 transition-colors hover:opacity-100">
      {children}
    </Link>
  );
}

export function SocialMediaIcon({ icon, name, href, className }: SocialMediaData) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-primary/10 flex h-8 w-8 items-center justify-center rounded-sm p-1 transition-colors",
        className
      )}
    >
      <Image src={icon} alt={name} width={23} height={23} />
    </Link>
  );
}
