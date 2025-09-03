"use client";
import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import JobCard from "./_components/JobCard";
import Sidebar from "./_components/Sidebar";
import { jobsData } from "./data/jobsData";

const Index = () => {
  // const [activeFilter, setActiveFilter] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

  const totalPages = Math.ceil(jobsData.length / jobsPerPage);
  const currentJobs = jobsData.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

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
          <div className="lg:col-span-3">
            <div className="space-y-0 border rounded-2xl">
              {currentJobs.map(job => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              totalPages={totalPages}
            />
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
