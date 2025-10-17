import { ActionResult } from "@/types/shared.types";

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Author {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: Author;
  publish_date: string;
  tags: Tag[];
  comments_count: number;
  likes_count: number;
  is_liked_by_user: boolean;
}

export interface BlogArticlesResponse {
  data: { count: number; next: string | null; previous: string | null; results: Article[] };
}

export interface getBlogArticlesResults extends ActionResult {
  articles?: Article[];
  count?: number;
}
