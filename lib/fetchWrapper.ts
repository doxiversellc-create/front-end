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
      // Throw an error to be caught by the catch block and trigger a retry
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
  // This line should be unreachable, but it satisfies TypeScript's need for a return path.
  throw new Error("Exited retry loop unexpectedly.");
}

export async function httpClient<T>(relativePath: string, options: FetchOptions = {}): Promise<T> {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL is not defined in your .env.local file.");
  }

  if (options.body && !(options.body instanceof FormData)) {
    options.headers = { ...options.headers, "Content-Type": "application/json" };
  }

  const fullUrl = `${baseUrl}${relativePath}`;
  const shouldRetry = !!options.retry;
  const response = shouldRetry
    ? await fetchWithRetry(fullUrl, options, options.retry)
    : await fetch(fullUrl, options);

  if (!response.ok) {
    const errorMessage = await processError(response);
    throw new Error(errorMessage);
  }

  return response.json() as T;
}
