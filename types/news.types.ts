import { ActionResult } from "./shared.types";

export interface News {
  id: number;
  title: string;
  description_preview: string;
  featured_image_url: string;
  published_date: string;
  published_date_formatted: string;
}
export interface NewsDetail {
  id: number;
  title: string;
  description: string;
  featured_image_url: string;
  published_date: string;
  published_date_formatted: string;
}

export interface getNewsListResult extends ActionResult {
  newsList?: News[];
  count?: number;
}
export interface getNewsListResponse extends ActionResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: News[];
}

export type GetNewsDetailResponse = NewsDetail;

export interface GetNewsDetailResult extends ActionResult {
  newsDetail?: NewsDetail;
}
