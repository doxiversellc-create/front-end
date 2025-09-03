import JobsList from "./_components/JobsList";
import Sidebar from "./_components/Sidebar";
import { jobsData } from "./data/jobsData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className=" py-24 text-left md:text-center">
          <span className="text-sm px-3 py-2 font-semibold rounded-full bg-background">
            AI Jobs
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight font-outfit">
            Jobs you might find Useful
          </h1>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <JobsList jobsData={jobsData} />

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
