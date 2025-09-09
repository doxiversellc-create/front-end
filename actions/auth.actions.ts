"use server";

import { cookies } from "next/headers";

import { httpClient } from "@/lib/fetchWrapper";
import { getErrorMessage } from "@/lib/utils";
import { getUserActionResult, User } from "@/types/auth.types";

export async function clearTokenCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
}

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("access_token");

  if (tokenCookie?.value) {
    return true;
  }
  return false;
}

export async function getUser(): Promise<getUserActionResult> {
  try {
    const url = "/auth/profile/";
    const response: User = await httpClient(url, { retry: { retries: 3 } });
    return { success: true, user: response };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to get user info") };
  }
}
