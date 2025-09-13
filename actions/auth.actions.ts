"use server";

import { cookies } from "next/headers";

import { serverHttpClient } from "@/lib/api/server";
import { getErrorMessage } from "@/lib/utils";
import {
  ForgotPasswordPayload,
  getUserActionResult,
  googleAuthResponse,
  googleAuthResults,
  LoginPayload,
  LoginResponse,
  LoginResults,
  SignupPayload,
  SignUpResponse,
  SignUpResults,
  User,
} from "@/types/auth.types";
import { ActionResult } from "@/types/shared.types";

export async function clearTokenCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");

  if (tokenCookie?.value) {
    return true;
  }
  return false;
}

export async function getUser(): Promise<getUserActionResult> {
  try {
    const url = "/auth/profile/";
    const response: User = await serverHttpClient(url, { retry: { retries: 3 } });
    return { success: true, user: response };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to get user info") };
  }
}

export async function signupAction(payload: SignupPayload): Promise<SignUpResults> {
  try {
    const url = "/auth/register/";
    const body = JSON.stringify(payload);
    const response = await serverHttpClient<SignUpResponse>(url, {
      body,
      method: "POST",
    });

    return { success: true, user: response.data };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to signup") };
  }
}

export async function loginAction(payload: LoginPayload): Promise<LoginResults> {
  try {
    const url = "/auth/login/";
    const body = JSON.stringify(payload);
    const response = await serverHttpClient<LoginResponse>(url, {
      body,
      method: "POST",
    });
    return { success: true, user: response.user };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Invalid email or password") };
  }
}

export async function forgotPasswordAction(payload: ForgotPasswordPayload): Promise<ActionResult> {
  try {
    const url = "/auth/password/reset/";
    const body = JSON.stringify(payload);
    await serverHttpClient(url, {
      body,
      method: "POST",
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to send reset link. Please try again."),
    };
  }
}

export async function verifyEmailAction(token: string): Promise<ActionResult> {
  try {
    const url = `/auth/verify-email?token=${token}`;
    await serverHttpClient(url);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to verify email. Please try again."),
    };
  }
}

export async function googleAuthAction(access_token: string): Promise<googleAuthResults> {
  try {
    const url = "/auth/google/";
    const body = JSON.stringify({ access_token });
    const response = await serverHttpClient<googleAuthResponse>(url, {
      body,
      method: "POST",
    });

    return { success: true, user: response.user };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to Authenticate User") };
  }
}
