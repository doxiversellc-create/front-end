import Link from "next/link";

import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div>
      <Navbar />
      <section className="relative px-4 md:px-6 lg:px-8">
        <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b to-transparent" />
        <section className="container mx-auto flex max-w-md flex-col items-center py-24 text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <span className="bg-background text-foreground z-10 w-fit rounded-full border px-4 py-1 text-sm font-medium">
            404
          </span>
          <h1 className="font-outfit mt-5 text-4xl font-medium tracking-tight md:text-6xl">
            Oops! Page Not Found
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-md text-center md:max-w-xl md:text-lg lg:max-w-2xl">
            The page you&apos;re looking for might have been moved, deleted, or maybe the URL was
            mistyped.
          </p>
          <div className="mt-6 flex gap-4">
            <BackButton />
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
