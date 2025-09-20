"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { getErrorMessage } from "@/lib/utils";
import { ActionResult } from "@/types/shared.types";
import { SubmitToolPayload } from "@/types/vendor.types";

export async function submitToolAction(payload: SubmitToolPayload): Promise<ActionResult> {
  try {
    const url = "/ai-tool-submissions/";
    const body = JSON.stringify(payload);
    await serverFetchPublic(url, {
      body,
      method: "POST",
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to submit tool") };
  }
}
