/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import Link from "next/link";

import { fetcher } from "@/lib/fetcher";
import { cn } from "../lib/utils";

export interface CMSLink {
  id: number;
  title: string;
  url: string;
  is_external: boolean;
  is_active: boolean;
  order: number;
}

export interface CMSSection {
  id: number;
  title: string;
  links: CMSLink[];
  is_active: boolean;
  order: number;
}

export interface CMSSocial {
  id: number;
  platform: string;
  url: string;
  is_active: boolean;
  order: number;
}

export interface CMSResponse {
  company_name: string;
  company_description: string;
  footer_sections: CMSSection[];
  get_in_touch_title: string;
  get_in_touch_description: string;
  social_media_links: CMSSocial[];
  footer_copyright: string;
  legal_links: CMSLink[];
}

// Map CMS platform → icon
export const socialIcons: Record<string, string> = {
  facebook: "/social-media-icons/facebook.svg",
  instagram: "/social-media-icons/instagram.svg",
  linkedin: "/social-media-icons/linkedin.svg",
  x: "/social-media-icons/x.svg",
};

export default async function Footer() {
  const { data }: { data: CMSResponse | null } = await fetcher<CMSResponse>(
    "/content/navigation/footer"
  );

  if (!data) {
    return <FooterFallback />;
  }

  return (
    <footer className="bg-background font-inter gradient-top-border mt-6 px-4 py-12 md:px-6 md:py-12 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt={`${data.company_name} Logo`}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-outfit text-2xl font-medium">{data.company_name}</span>
            </Link>
            <p className="mt-8 max-w-xs leading-relaxed opacity-80">{data.company_description}</p>
          </div>

          {/* Footer Sections */}
          {data.footer_sections
            ?.filter(section => section.is_active)
            .sort((a, b) => a.order - b.order)
            .map(section => (
              <div key={section.id} className="space-y-4 lg:ml-12">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links
                    ?.filter(link => link.is_active)
                    .sort((a, b) => a.order - b.order)
                    .map(link => (
                      <li key={link.id}>
                        <FooterLink href={link.url} external={link.is_external}>
                          {link.title}
                        </FooterLink>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{data.get_in_touch_title}</h3>
            <p className="leading-relaxed opacity-70">{data.get_in_touch_description}</p>
            <div className="mt-8 flex gap-4">
              {data.social_media_links
                ?.filter(item => item.is_active)
                .sort((a, b) => a.order - b.order)
                .map(item => (
                  <SocialMediaIcon
                    key={item.id}
                    icon={socialIcons[item.platform] || "/social-media-icons/default.svg"}
                    name={item.platform}
                    href={item.url}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="gradient-top-border mt-12 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-sm">{data.footer_copyright}</p>
          <div className="flex items-center gap-6 text-sm">
            {data.legal_links
              ?.filter(link => link.is_active)
              .sort((a, b) => a.order - b.order)
              .map((link, idx) => (
                <div key={link.id} className="flex items-center gap-2">
                  <FooterLink href={link.url} external={link.is_external}>
                    {link.title}
                  </FooterLink>
                  {idx < data.legal_links.length - 1 && (
                    <span className="text-muted-foreground/70">•</span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 transition-colors hover:opacity-100"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="opacity-70 transition-colors hover:opacity-100">
      {children}
    </Link>
  );
}

export function SocialMediaIcon({
  icon,
  name,
  href,
  className,
}: {
  icon: string;
  name: string;
  href: string;
  className?: string;
}) {
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

export function FooterFallback() {
  return (
    <footer className="bg-background font-inter gradient-top-border mt-6 px-4 py-12 md:px-6 md:py-12 lg:px-8">
      <div className="mx-auto max-w-[1180px] animate-pulse">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Logo */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-muted h-8 w-32 rounded" />
            <div className="bg-muted mt-6 h-16 w-48 rounded" />
          </div>

          {/* Column placeholders */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="bg-muted h-6 w-24 rounded" />
              <ul className="space-y-3">
                {[...Array(4)].map((__, j) => (
                  <li key={j} className="bg-muted h-4 w-20 rounded" />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="gradient-top-border mt-12 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <div className="bg-muted h-4 w-48 rounded" />
          <div className="flex gap-4">
            <div className="bg-muted h-4 w-24 rounded" />
            <div className="bg-muted h-4 w-24 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// TODO

interface SocialMediaData {
  icon: string;
  name: string;
  href: string;
  className?: string;
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
