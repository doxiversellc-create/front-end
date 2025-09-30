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
      // const yOffset = -40; // offset for sticky header
      // const y = FDASectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: 0, behavior: "instant" });
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
                    <th className="text-foreground px-2 pb-3 text-left text-xs font-medium">
                      Date of Final Decision
                    </th>
                    <th className="text-foreground px-2 pb-3 text-left text-xs font-medium">
                      Submission Number
                    </th>
                    <th className="text-foreground px-2 pb-3 text-left text-xs font-medium">
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
                        className="cursor-pointer border-b"
                        onClick={() => toggleRowExpansion(item.id)}
                      >
                        <td className="text-foreground px-2 py-3 text-xs">
                          {item.dateOfFinalDecision}
                        </td>
                        <td className="px-2 py-3">
                          <Link
                            href={`/fda-update/${item.id}`}
                            className="text-primary text-xs font-medium hover:underline"
                            onClick={e => e.stopPropagation()} // prevent row toggle
                          >
                            {item.submissionNumber}
                          </Link>
                        </td>
                        <td className="text-foreground px-2 py-3 text-xs">{item.device}</td>
                        <td className="px-2 py-3 text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={e => {
                              e.stopPropagation(); // prevent row toggle from parent <tr>
                              toggleRowExpansion(item.id);
                            }}
                            className="text-muted-foreground h-8 w-8 rounded-full p-0"
                          >
                            {expandedRows.has(item.id) ? <Minus size={18} /> : <Plus size={18} />}
                          </Button>
                        </td>
                      </tr>

                      {expandedRows.has(item.id) && (
                        <tr className="border-b">
                          <td colSpan={4} className="px-3 py-3 pb-4">
                            <div className="border-border space-y-2 pt-2">
                              <div className="border-b pb-2 text-xs">
                                <span className="text-muted-foreground">Company: </span>
                                <span className="text-foreground font-medium">{item.company}</span>
                              </div>
                              <div className="border-b pb-2 text-xs">
                                <span className="text-muted-foreground">Panel: </span>
                                <span className="text-foreground font-medium">{item.panel}</span>
                              </div>
                              <div className="pb-2 text-xs">
                                <span className="text-muted-foreground">
                                  Primary Product Code:{" "}
                                </span>
                                <span className="text-foreground font-medium">
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
                  <th className="text-foreground px-4 pb-4 text-left font-medium">
                    Date of Final Decision
                  </th>
                  <th className="text-foreground px-4 pb-4 text-left font-medium">
                    Submission Number
                  </th>
                  <th className="text-foreground px-4 pb-4 text-left font-medium">Device</th>
                  <th className="text-foreground px-4 pb-4 text-left font-medium">Company</th>
                  <th className="text-foreground px-4 pb-4 text-left font-medium">Panel (lead)</th>
                  <th className="text-foreground px-4 pb-4 text-left font-medium">
                    Primary product code
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="text-foreground px-4 py-4">{item.dateOfFinalDecision}</td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/fda-update/${item.id}`}
                        className="text-primary font-medium hover:underline"
                      >
                        {item.submissionNumber}
                      </Link>
                    </td>
                    <td className="text-foreground px-4 py-4">{item.device}</td>
                    <td className="text-foreground px-4 py-4">{item.company}</td>
                    <td className="text-foreground px-4 py-4">{item.panel}</td>
                    <td className="text-foreground px-4 py-4">{item.primaryProductCode}</td>
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
