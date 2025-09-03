"use client";
import { useState } from "react";
import { Pagination } from "../../../components/Pagination";
import { Job } from "./../data/jobsData";
import JobCard from "./JobCard";

export default function JobsList({ jobsData }: { jobsData: Job[] }) {
  // const [activeFilter, setActiveFilter] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

  const totalPages = Math.ceil(jobsData.length / jobsPerPage);
  const currentJobs = jobsData.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="lg:col-span-3">
      <div className="space-y-0 border rounded-2xl">
        {currentJobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />
    </div>
  );
}
