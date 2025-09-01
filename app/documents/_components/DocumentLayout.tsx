import { ReactNode } from "react";
import DocumentsNav from "./DocumentsNav";

interface DocumentLayoutProps {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}

export default function DocumentLayout({ title, effectiveDate, children }: DocumentLayoutProps) {
  return (
    <div className="w-full mx-auto px-4 lg:px-0 py-8 max-w-[1040px] mb-20">
      <DocumentsNav />

      <article className="prose prose-lg max-w-none space-y-6 lg:space-y-10">
        <h1 className="text-2xl md:text-4xl font-outfit font-semibold">{title}</h1>

        {effectiveDate && (
          <div className="text-muted-foreground mb-8 text-md md:text-lg font-medium">
            Effective Date: {effectiveDate}
          </div>
        )}

        <div className="space-y-5">{children}</div>
      </article>
    </div>
  );
}
