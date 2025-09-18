"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { getErrorMessage } from "@/lib/utils";
import { ContactData } from "@/types/marketing.types";
import { ActionResult } from "@/types/shared.types";

export async function contactUsAction(payload: ContactData): Promise<ActionResult> {
  try {
    const url = "/auth/contact/";
    const body = JSON.stringify(payload);
    await serverFetchPublic(url, {
      body,
      method: "POST",
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to send message") };
  }
}
export async function newsletterSubscribeAction(email: string): Promise<ActionResult> {
  try {
    const url = "/newsletter/subscribe/";
    const body = JSON.stringify({ email });
    await serverFetchPublic(url, {
      body,
      method: "POST",
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to subscribe to newsletter") };
  }
}
