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

export interface ArticleDetail {
  id: number;
  title: string;
  slug: string;
  content: string;
  processed_content: string;
  featured_image: string;
  author: Author;
  publish_date: string; // ISO date string (e.g., "2025-10-17T07:18:15.303Z")
  excerpt: string;
  meta_description: string;
  tags: Tag[];
  comments_count: number;
  likes_count: number;
  is_liked_by_user: boolean;
  live: boolean;
}

export interface ArticleCommentAuthor {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string;
}

export interface ArticleComment {
  id: number;
  author: ArticleCommentAuthor;
  content: string;
  created_at: string;
  // is_active: true;
}

export interface BlogArticlesResponse {
  data: { count: number; next: string | null; previous: string | null; results: Article[] };
}

export interface getBlogArticlesResults extends ActionResult {
  articles?: Article[];
  count?: number;
}
export interface BlogArticleDetailResponse {
  data: ArticleDetail;
}

export interface getBlogArticleDetailResults extends ActionResult {
  articleDetail?: ArticleDetail;
}

export interface BlogArticleEngagementResponse {
  data: { comments: { results: ArticleComment[] }; likes: { results: [] } };
}

export interface getBlogArticleEngagementResults extends ActionResult {
  comments?: ArticleComment[];
  likes?: number;
}
