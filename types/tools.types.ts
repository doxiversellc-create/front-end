import { ActionResult } from "@/types/shared.types";

export interface Review {
  profile_image_url: string | null;
  first_name: string;
  last_name: string;
  date: string;
  rating: number;
  content: string;
}
export interface Tool {
  id: number;
  ai_tool?: number;
  name: string;
  summary: string;
  description: string;
  tags: string[] | [];
  logo_url: string | null;
  is_verified: boolean;
  is_premium: boolean;
  is_draft: boolean;
  average_rating: number;
  reviews: Review[];
  categories: Category[];
  is_bookmarked: boolean;
  bookmarks_count: number;
}

export interface SubCategory {
  id: number;
  name: string;
  short_description: string;
  description: string;
}
export interface Category {
  id: number;
  name: string;
  short_description: string;
  description: string;
  isTopCategory: boolean;
  tool_count: number;
  sub_categories: SubCategory[];
}

export interface AiToolsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Tool[];
}

export interface getAiToolsResult extends ActionResult {
  tools?: Tool[];
  count?: number;
}
export interface getAiToolSubCategoriesResult extends ActionResult {
  SubCategories?: SubCategory[];
  count?: number;
}

export interface AiToolSubCategoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SubCategory[];
}

export type BookMarkedToolsResponse = Tool[];

export interface getBookmarkedAiToolsResult extends ActionResult {
  tools?: Tool[];
  count?: number;
}
