"use server";

import { serverFetchAuth, serverFetchPublic } from "@/lib/api/server";
import { getErrorMessage } from "@/lib/utils";
import { ActionResult } from "@/types/shared.types";
import {
  getVendorToolsActionResult,
  SubmitToolPayload,
  VendorToolResponse,
} from "@/types/vendor.types";

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

export async function getVendorToolsAction(page?: number): Promise<getVendorToolsActionResult> {
  try {
    const url = page ? `/my-ai-tools/?page=${page}` : `/my-ai-tools/`;
    const data = await serverFetchAuth<VendorToolResponse>(url);
    return { success: true, tools: data.results };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch vendor tools") };
  }
}
