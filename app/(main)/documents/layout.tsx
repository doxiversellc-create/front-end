import DocumentsNav from "./_components/DocumentsNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mb-20 w-full max-w-[1040px] px-4 py-8 md:px-12 lg:px-20">
      <DocumentsNav />
      {children}
    </div>
  );
}
