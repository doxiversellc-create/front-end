import { ActionResult } from "@/types/shared.types";

export interface Review {
  profile_image_url: string | null;
  first_name: string;
  last_name: string;
  date: string;
  rating: number;
  content: string;
}
export interface AiTool {
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

export interface GetAiToolsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: AiTool[];
}

export interface Feature {
  id: number;
  feature_title: string;
  choice: string;
  custom_text: string;
}
export interface RelatedTool {
  id: number;
  name: string;
  logo_url: string;
}
export interface AiToolDetail extends AiTool {
  video_link: string;
  features: Feature[];
  original_site_url: string;
  related_tools: RelatedTool[];
  is_bookmarked: boolean;
  bookmarks_count: number;
  bookmark_id: number | null;
}

export interface GetAiToolsResult extends ActionResult {
  tools?: AiTool[];
  count?: number;
}
export interface GetAiToolSubCategoriesResult extends ActionResult {
  SubCategories?: SubCategory[];
  count?: number;
}

export interface AiToolSubCategoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SubCategory[];
}

export type GetBookMarkedToolsResponse = AiTool[];

export interface GetBookmarkedAiToolsResult extends ActionResult {
  tools?: AiTool[];
  count?: number;
}

export interface GetAiToolResult extends ActionResult {
  tool?: AiToolDetail;
}
export type GetAiToolDetailRespose = AiToolDetail;
