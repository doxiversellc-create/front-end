import { processError } from "@/lib/utils";

export interface FetchOptions extends RequestInit {
  retry?: {
    retries?: number;
    delay?: number;
  };
}

const retriableErrorCodes = [500, 502, 503, 504];
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retryOptions: { retries?: number; delay?: number } = {}
): Promise<Response> {
  const { retries = 3, delay = 1000 } = retryOptions;
  let attempt = 1;

  while (attempt <= retries) {
    try {
      const response = await fetch(url, options);

      if (response.ok || !retriableErrorCodes.includes(response.status)) {
        return response;
      }
      throw new Error(`Retryable error status: ${response.status}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (attempt === retries) {
        throw new Error(`All ${retries} attempts failed. Last error: ${errorMessage}`);
      }
      const backoffDelay = delay * Math.pow(2, attempt - 1);
      console.error(`Attempt ${attempt} failed... Retrying in ${backoffDelay / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, backoffDelay));
      attempt++;
    }
  }
  throw new Error("Exited retry loop unexpectedly.");
}

export async function clientHttpClient<T>(
  relativePath: string,
  options: FetchOptions = {}
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL is not defined in your .env.local file.");
  }

  const fetchOptions: FetchOptions = {
    ...options,
    credentials: "include",
  };

  if (fetchOptions.body && !(fetchOptions.body instanceof FormData)) {
    fetchOptions.headers = { ...fetchOptions.headers, "Content-Type": "application/json" };
  }

  const fullUrl = `${baseUrl}${relativePath}`;
  const response = await fetchWithRetry(fullUrl, fetchOptions, fetchOptions.retry);

  if (!response.ok) {
    const errorMessage = await processError(response);
    throw new Error(errorMessage);
  }

  return response.json() as T;
}
