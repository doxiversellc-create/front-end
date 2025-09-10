export interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
}

export type APIError = {
  [key: string]: string | string[] | undefined;
};
