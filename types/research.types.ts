import { ActionResult } from "@/types/shared.types";

export interface ResearchArticle {
  id: number;
  title: string;
  abstract_preview: string;
  authors_list: string;
  journal: string;
  publication_date: string;
  pubmed_url: string;
  doi: string;
}

export interface ResearchArticlesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResearchArticle[];
}

export interface getResearchArticlesResult extends ActionResult {
  articles?: ResearchArticle[];
}
