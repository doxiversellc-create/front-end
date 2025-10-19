import { ActionResult } from "@/types/shared.types";

export interface FDAApproval {
  id: string;
  date_of_final_decision: string;
  submission_number: string;
  device: string;
  company: string;
  panel_lead: string;
  primary_product_code: string;
}

export interface FDAApprovalResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FDAApproval[];
}

export interface getFDAApprovalResults extends ActionResult {
  fdaApprovals?: FDAApproval[];
  count?: number;
}
