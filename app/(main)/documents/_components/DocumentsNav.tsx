"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const documents = [
  {
    title: "Doxiverse Terms of Use",
    href: "/documents/terms-of-use",
  },
  {
    title: "Doxiverse Privacy Policy",
    href: "/documents/privacy-policy",
  },
  {
    title: "Doxiverse Disclaimer",
    href: "/documents/disclaimer",
  },
  {
    title: "Vendor Terms and Conditions",
    href: "/documents/vendor/terms",
  },
  {
    title: "Vendor Privacy Policy",
    href: "/documents/vendor/privacy-policy",
  },
];

export default function DocumentsNav() {
  const pathname = usePathname();

  return (
    <nav className="my-16">
      <h2 className="mb-7 text-2xl font-semibold">Documents</h2>
      <ul className="list-disc space-y-4 pl-4">
        {documents.map(doc => (
          <li
            key={doc.href}
            className="text-muted-foreground hover:text-foreground underline transition-all duration-300 hover:font-semibold"
          >
            <Link
              href={doc.href}
              className={`hover:text-foreground -mt-1 block transition-colors ${
                pathname === doc.href ? "text-foreground font-bold" : "text-muted-foreground"
              }`}
            >
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
