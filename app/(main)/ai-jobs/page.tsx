import { Suspense } from "react";

import JobFilters from "./_components/JobFilters";
import JobsList from "./_components/JobsList";
import Sidebar from "./_components/Sidebar";
import { jobsData } from "./_data/jobsData";

const AiJobs = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-20">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <main className="mx-auto max-w-7xl">
        <section className="pt-14 pb-12 text-left">
          <span className="bg-background rounded-full px-3 py-2 text-sm font-semibold">
            AI Jobs
          </span>
          <h1 className="font-outfit mt-4 text-[40px] font-semibold tracking-tight">
            Jobs you might find Useful
          </h1>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <JobFilters />
        </Suspense>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <Suspense fallback={<div>Loading...</div>}>
            <JobsList jobsData={jobsData} />
          </Suspense>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AiJobs;
