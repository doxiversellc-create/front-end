export interface SubmitToolPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  tool_name: string;
  tool_url: string;
  description: string;
}

export interface VendorTool {
  tool_id: number;
  tool_name: string;
  logo_url: string;
  total_bookmarks: string;
  total_reviews: string;
  total_clicks: string;
  average_rating: string;
}
