import Image from "next/image";
import Link from "next/link";

interface SocialMediaData {
  icon: string;
  name: string;
  href: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Footer() {
  const socialMediaData: SocialMediaData[] = [
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
  return (
    <footer className="bg-background py-12 md:py-12 px-4 md:px-6 lg:px-8 font-inter">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Doxiverse Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-medium text-2xl font-outfit">Doxiverse</span>
            </Link>
            <p className="mt-8 opacity-80 leading-relaxed max-w-xs">
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
            <p className="opacity-70 leading-relaxed">
              Question or feedback? we&apos;d love to listen form you.
            </p>
            <div className="flex gap-4 mt-8">
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
        <div className="mt-12 pt-8  gradient-top-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className=" text-sm">
            <span className="font-semibold opacity-100">©Doxiverse</span>,{" "}
            <span className="opacity-70">All rights reserved 2025</span>
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="opacity-70 hover:opacity-100 transition-colors">
              Terms of Use
            </a>
            <span className="text-muted-foreground/70">•</span>
            <a href="#" className="opacity-70 hover:opacity-100 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href} className="nav-link opacity-70 hover:opacity-100 transition-colors">
      {children}
    </Link>
  );
}

function SocialMediaIcon({ icon, name, href }: SocialMediaData) {
  return (
    <Link
      href={href}
      className="w-8 h-8 p-1  rounded-sm flex items-center justify-center hover:bg-primary/10 transition-colors"
    >
      <Image src={icon} alt={name} width={23} height={23} />
    </Link>
  );
}
