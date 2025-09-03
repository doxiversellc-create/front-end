"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Minus, Plus } from "lucide-react";

import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/useMobile";
import { mockData } from "../_data/fda-table-data";

const FDATable = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMobile = useIsMobile();
  const FDASectionRef = useRef<HTMLDivElement>(null);
  const PAGE_SIZE = 10;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (FDASectionRef.current) {
      const yOffset = -40; // offset for sticky header
      const y = FDASectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "instant" });
    }
  }, [currentPage]);

  const toggleRowExpansion = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const totalPages = Math.ceil(mockData.length / PAGE_SIZE);
  const paginatedData = mockData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  if (isMobile) {
    return (
      <section className="pt-0" ref={FDASectionRef}>
        <div className="container mx-auto">
          <Card className="shadow-card overflow-hidden border-none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left pb-3 px-2 text-xs font-medium text-foreground">
                      Date of Final Decision
                    </th>
                    <th className="text-left pb-3 px-2 text-xs font-medium text-foreground">
                      Submission Number
                    </th>
                    <th className="text-left pb-3 px-2 text-xs font-medium text-foreground">
                      Device
                    </th>
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map(item => (
                    <React.Fragment key={item.id}>
                      <tr
                        key={item.id}
                        className="border-b cursor-pointer"
                        onClick={() => toggleRowExpansion(item.id)}
                      >
                        <td className="py-3 px-2 text-xs text-foreground">
                          {item.dateOfFinalDecision}
                        </td>
                        <td className="py-3 px-2">
                          <Link
                            href={`/fda-update/${item.id}`}
                            className="text-primary hover:underline text-xs font-medium"
                            onClick={e => e.stopPropagation()} // prevent row toggle
                          >
                            {item.submissionNumber}
                          </Link>
                        </td>
                        <td className="py-3 px-2 text-xs text-foreground">{item.device}</td>
                        <td className="py-3 px-2 text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={e => {
                              e.stopPropagation(); // prevent row toggle from parent <tr>
                              toggleRowExpansion(item.id);
                            }}
                            className="h-8 w-8 p-0 text-muted-foreground rounded-full"
                          >
                            {expandedRows.has(item.id) ? <Minus size={18} /> : <Plus size={18} />}
                          </Button>
                        </td>
                      </tr>

                      {expandedRows.has(item.id) && (
                        <tr className="border-b ">
                          <td colSpan={4} className="px-3 pb-4 py-3">
                            <div className="pt-2  border-border space-y-2">
                              <div className="text-xs border-b pb-2">
                                <span className="text-muted-foreground">Company: </span>
                                <span className="font-medium text-foreground">{item.company}</span>
                              </div>
                              <div className="text-xs border-b pb-2 ">
                                <span className="text-muted-foreground">Panel: </span>
                                <span className="font-medium text-foreground">{item.panel}</span>
                              </div>
                              <div className="text-xs pb-2">
                                <span className="text-muted-foreground">
                                  Primary Product Code:{" "}
                                </span>
                                <span className="font-medium text-foreground">
                                  {item.primaryProductCode}
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
            />
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4" ref={FDASectionRef}>
      <div className="container mx-auto">
        <Card className="shadow-card overflow-hidden border-none">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left pb-4 px-4 font-medium text-foreground">
                    Date of Final Decision
                  </th>
                  <th className="text-left pb-4 px-4 font-medium text-foreground">
                    Submission Number
                  </th>
                  <th className="text-left pb-4 px-4 font-medium text-foreground">Device</th>
                  <th className="text-left pb-4 px-4 font-medium text-foreground">Company</th>
                  <th className="text-left pb-4 px-4 font-medium text-foreground">Panel (lead)</th>
                  <th className="text-left pb-4 px-4 font-medium text-foreground">
                    Primary product code
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4 text-foreground">{item.dateOfFinalDecision}</td>
                    <td className="py-4 px-4">
                      <Link
                        href={`/fda-update/${item.id}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {item.submissionNumber}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-foreground">{item.device}</td>
                    <td className="py-4 px-4 text-foreground">{item.company}</td>
                    <td className="py-4 px-4 text-foreground">{item.panel}</td>
                    <td className="py-4 px-4 text-foreground">{item.primaryProductCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default FDATable;
