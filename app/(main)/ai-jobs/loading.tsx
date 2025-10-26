import { Plus } from "lucide-react";

import JobFiltersSkeleton from "@/app/(main)/ai-jobs/_components/JobFiltersSkeleton";
import JobsListSkeleton from "@/app/(main)/ai-jobs/_components/JobsListSkeleton";
import HeroGradient from "@/components/HeroGradient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function loading() {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-20">
      <HeroGradient className="h-[50vh]" />

      <main className="mx-auto max-w-7xl">
        <section className="pt-14 pb-12 text-left">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            {/* Title + Subtitle */}
            <div>
              <span className="bg-background rounded-full px-3 py-2 text-sm font-semibold">
                AI Jobs
              </span>
              <h1 className="font-outfit mt-4 text-[40px] font-semibold tracking-tight">
                Jobs you might find Useful
              </h1>
            </div>
            <div>
              {" "}
              <Button className="flex w-full items-center gap-2 md:w-auto">
                <Plus className="h-4 w-4" />
                Post a Job
              </Button>
            </div>
          </div>
        </section>
        <>
          <JobFiltersSkeleton />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <JobsListSkeleton />
            <div className="lg:col-span-1">
              <aside className="space-y-2">
                <Card className="border-none bg-transparent shadow-none">
                  <h3 className="font-outfit text-lg font-semibold">About our Job Sources</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    At Doxiverse, we aggregate health-related AI and healthcare job listings from
                    trusted industry sources, carefully selected for their reliability and
                    expertise.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    Our goal is to connect you with opportunities that reflect the latest
                    advancements in patient care and medical technology, ensuring each role is both
                    impactful and credible.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    We update listings daily to deliver fresh opportunities, connecting talent with
                    cutting-edge healthcare solutions and empowering you to thrive in this evolving
                    field.
                  </p>

                  <div className="">
                    <div className="text-muted-foreground flex space-x-4 text-sm">
                      <a href="/terms" className="hover:text-foreground transition-colors">
                        Terms of Use
                      </a>
                      <span>•</span>
                      <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </Card>
              </aside>
            </div>
          </div>
        </>
      </main>
    </div>
  );
}
