"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { ChevronUp, Plus } from "lucide-react";

import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/useMobile";

interface FDAApproval {
  id: string;
  dateOfFinalDecision: string;
  submissionNumber: string;
  device: string;
  company: string;
  panel: string;
  primaryProductCode: string;
}

const mockData: FDAApproval[] = [
  {
    id: "1",
    dateOfFinalDecision: "11/15/2024",
    submissionNumber: "K242062",
    device: "1CMR Pro",
    company: "Mycardium AI Limited",
    panel: "Pathology",
    primaryProductCode: "NMN",
  },
  {
    id: "2",
    dateOfFinalDecision: "06/26/1998",
    submissionNumber: "P970058",
    device: "M1000 IMAGECHECKER",
    company: "Hologic, Inc.",
    panel: "Radiology",
    primaryProductCode: "MYN",
  },
  {
    id: "3",
    dateOfFinalDecision: "09/02/1998",
    submissionNumber: "P980025",
    device: "AUTOPAP(R) 300 QC AUTOMATIC PAP SCREENERQC SYSTEM",
    company: "BD DIAGNOSTICS",
    panel: "Pathology",
    primaryProductCode: "MNM",
  },
  {
    id: "4",
    dateOfFinalDecision: "09/02/1998",
    submissionNumber: "K003301",
    device: "RAPIDSCREEN RS-2000",
    company: "RIVERAIN MEDICAL GRO",
    panel: "Radiology",
    primaryProductCode: "MYN",
  },
  {
    id: "5",
    dateOfFinalDecision: "03/16/2006",
    submissionNumber: "P040028",
    device: "LUMA CERVICAL IMAGING SYSTEM",
    company: "SPECTRA SCIENCE",
    panel: "Obstetrics/Gynecology",
    primaryProductCode: "MWM",
  },
  {
    id: "6",
    dateOfFinalDecision: "07/17/2008",
    submissionNumber: "K081140",
    device: "VISENSIA",
    company: "OBS MEDICAL",
    panel: "Cardiovascular",
    primaryProductCode: "MHX",
  },
  {
    id: "7",
    dateOfFinalDecision: "05/15/2008",
    submissionNumber: "K080762",
    device: "IB NEURO, VERSION 1.0",
    company: "IMAGING BIOMETRICS, LL",
    panel: "Radiology",
    primaryProductCode: "LNH",
  },
  {
    id: "8",
    dateOfFinalDecision: "07/30/2008",
    submissionNumber: "K080896",
    device: "PATHWORK DIAGNOSTICS TISSUE OF ORIGIN TEST",
    company: "PATHWORK DIAGNOSTIC",
    panel: "Clinical Toxicology",
    primaryProductCode: "OIW",
  },
  {
    id: "9",
    dateOfFinalDecision: "09/02/1998",
    submissionNumber: "P980025",
    device: "AUTOPAP(R) 300 QC AUTOMATIC PAP SCREENERQC SYSTEM",
    company: "BD DIAGNOSTICS",
    panel: "Pathology",
    primaryProductCode: "MNM",
  },
  {
    id: "10",
    dateOfFinalDecision: "09/02/1998",
    submissionNumber: "K003301",
    device: "RAPIDSCREEN RS-2000",
    company: "RIVERAIN MEDICAL GRO",
    panel: "Radiology",
    primaryProductCode: "MYN",
  },
  {
    id: "11",
    dateOfFinalDecision: "03/16/2006",
    submissionNumber: "P040028",
    device: "LUMA CERVICAL IMAGING SYSTEM",
    company: "SPECTRA SCIENCE",
    panel: "Obstetrics/Gynecology",
    primaryProductCode: "MWM",
  },
  {
    id: "12",
    dateOfFinalDecision: "07/17/2008",
    submissionNumber: "K081140",
    device: "VISENSIA",
    company: "OBS MEDICAL",
    panel: "Cardiovascular",
    primaryProductCode: "MHX",
  },
  {
    id: "13",
    dateOfFinalDecision: "05/15/2008",
    submissionNumber: "K080762",
    device: "IB NEURO, VERSION 1.0",
    company: "IMAGING BIOMETRICS, LL",
    panel: "Radiology",
    primaryProductCode: "LNH",
  },
  {
    id: "14",
    dateOfFinalDecision: "07/30/2008",
    submissionNumber: "K080896",
    device: "PATHWORK DIAGNOSTICS TISSUE OF ORIGIN TEST",
    company: "PATHWORK DIAGNOSTIC",
    panel: "Clinical Toxicology",
    primaryProductCode: "OIW",
  },
  {
    id: "15",
    dateOfFinalDecision: "09/02/1998",
    submissionNumber: "P980025",
    device: "AUTOPAP(R) 300 QC AUTOMATIC PAP SCREENERQC SYSTEM",
    company: "BD DIAGNOSTICS",
    panel: "Pathology",
    primaryProductCode: "MNM",
  },
  {
    id: "16",
    dateOfFinalDecision: "09/02/1998",
    submissionNumber: "K003301",
    device: "RAPIDSCREEN RS-2000",
    company: "RIVERAIN MEDICAL GRO",
    panel: "Radiology",
    primaryProductCode: "MYN",
  },
  {
    id: "17",
    dateOfFinalDecision: "03/16/2006",
    submissionNumber: "P040028",
    device: "LUMA CERVICAL IMAGING SYSTEM",
    company: "SPECTRA SCIENCE",
    panel: "Obstetrics/Gynecology",
    primaryProductCode: "MWM",
  },
  {
    id: "18",
    dateOfFinalDecision: "07/17/2008",
    submissionNumber: "K081140",
    device: "VISENSIA",
    company: "OBS MEDICAL",
    panel: "Cardiovascular",
    primaryProductCode: "MHX",
  },
  {
    id: "19",
    dateOfFinalDecision: "05/15/2008",
    submissionNumber: "K080762",
    device: "IB NEURO, VERSION 1.0",
    company: "IMAGING BIOMETRICS, LL",
    panel: "Radiology",
    primaryProductCode: "LNH",
  },
  {
    id: "20",
    dateOfFinalDecision: "07/30/2008",
    submissionNumber: "K080896",
    device: "PATHWORK DIAGNOSTICS TISSUE OF ORIGIN TEST",
    company: "PATHWORK DIAGNOSTIC",
    panel: "Clinical Toxicology",
    primaryProductCode: "OIW",
  },
  {
    id: "21",
    dateOfFinalDecision: "07/30/2008",
    submissionNumber: "K080896",
    device: "PATHWORK DIAGNOSTICS TISSUE OF ORIGIN TEST",
    company: "PATHWORK DIAGNOSTIC",
    panel: "Clinical Toxicology",
    primaryProductCode: "OIW",
  },
];

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
      const yOffset = -60; // offset for sticky header
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
      <section className="py-8">
        <div className="container mx-auto">
          <Card className="shadow-card overflow-hidden border-none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-3 px-2 text-xs font-medium text-foreground">
                      Date of Final Decision
                    </th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-foreground">
                      Submission Number
                    </th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-foreground">
                      Device
                    </th>
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map(item => (
                    <>
                      <tr key={item.id} className="border-b">
                        <td className="py-3 px-2 text-xs text-foreground">
                          {item.dateOfFinalDecision}
                        </td>
                        <td className="py-3 px-2">
                          <a href="#" className="text-primary hover:underline text-xs font-medium">
                            {item.submissionNumber}
                          </a>
                        </td>
                        <td className="py-3 px-2 text-xs text-foreground">{item.device}</td>
                        <td className="py-3 px-2 text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleRowExpansion(item.id)}
                            className="h-8 w-8 p-0 text-muted-foreground rounded-full"
                          >
                            {expandedRows.has(item.id) ? (
                              <ChevronUp size={18} />
                            ) : (
                              <Plus size={18} />
                            )}
                          </Button>
                        </td>
                      </tr>
                      {expandedRows.has(item.id) && (
                        <tr className="border-b ">
                          <td colSpan={4} className="px-3 pb-4 py-3">
                            <div className="pt-2  border-border space-y-2">
                              <div className="text-xs">
                                <span className="text-muted-foreground">Company: </span>
                                <span className="font-medium text-foreground">{item.company}</span>
                              </div>
                              <div className="text-xs">
                                <span className="text-muted-foreground">Panel: </span>
                                <span className="font-medium text-foreground">{item.panel}</span>
                              </div>
                              <div className="text-xs">
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
                    </>
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
    <section className="py-12" ref={FDASectionRef}>
      <div className="container mx-auto">
        <Card className="shadow-card overflow-hidden border-none">
          {" "}
          {/* Removed border */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-4 px-4 font-medium text-foreground">
                    Date of Final Decision
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">
                    Submission Number
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Device</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Company</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Panel (lead)</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">
                    Primary product code
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4 text-foreground">{item.dateOfFinalDecision}</td>
                    <td className="py-4 px-4">
                      <Link href="#" className="text-primary hover:underline font-medium">
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
