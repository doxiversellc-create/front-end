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
    console.error(" error here");
    return { success: false, error: getErrorMessage(error, "Failed to send message") };
  }
}
