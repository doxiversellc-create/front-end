import { ReactNode } from "react";

import DocumentsNav from "./DocumentsNav";

interface DocumentLayoutProps {
  title: string;
  children: ReactNode;
}

export default function DocumentLayout({ title, children }: DocumentLayoutProps) {
  return (
    <div className="mx-auto mb-20 w-full max-w-[1040px] px-4 py-8 lg:px-0">
      <DocumentsNav />

      <article className="prose prose-lg max-w-none space-y-6 lg:space-y-10">
        <h1 className="font-outfit text-2xl font-semibold md:text-4xl">{title}</h1>

        <div className="space-y-5">{children}</div>
      </article>
    </div>
  );
}
