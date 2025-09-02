"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/useMobile";
import { Plus } from "lucide-react";
import { useState } from "react";

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
];

const FDATable = () => {
  const [currentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const isMobile = useIsMobile();
  const itemsPerPage = 10;

  const toggleRowExpansion = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  // const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = mockData.slice(startIndex, startIndex + itemsPerPage);

  if (isMobile) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {currentData.map(item => (
              <Card key={item.id} className="p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.dateOfFinalDecision}
                      </span>
                      <a href="#" className="text-sm font-medium text-primary hover:underline">
                        {item.submissionNumber}
                      </a>
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{item.device}</h3>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => toggleRowExpansion(item.id)}>
                    <Plus size={16} />
                  </Button>
                </div>

                {expandedRows.has(item.id) && (
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Company: </span>
                      <span className="text-sm font-medium">{item.company}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Panel: </span>
                      <span className="text-sm font-medium">{item.panel}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Primary Product Code: </span>
                      <span className="text-sm font-medium">{item.primaryProductCode}</span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b border-border">
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
                {currentData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="py-4 px-4 text-foreground">{item.dateOfFinalDecision}</td>
                    <td className="py-4 px-4">
                      <a href="#" className="text-primary hover:underline font-medium">
                        {item.submissionNumber}
                      </a>
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
      </div>
    </section>
  );
};

export default FDATable;
