import { Suspense } from "react";
import JobFilters from "./_components/JobFilters";
import JobsList from "./_components/JobsList";
import Sidebar from "./_components/Sidebar";
import { jobsData } from "./_data/jobsData";

const AiJobs = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-20">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/25 to-transparent pointer-events-none -z-10" />
      <main className="max-w-7xl mx-auto">
        <section className="pt-14 pb-12 text-left">
          <span className="text-sm px-3 py-2 font-semibold rounded-full bg-background">
            AI Jobs
          </span>
          <h1 className="mt-4 text-[40px] font-semibold tracking-tight font-outfit">
            Jobs you might find Useful
          </h1>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <JobFilters />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
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
