import { forgotPasswordSchemaType, loginFormSchemaType } from "@/lib/schemas/auth.schema";
import { ActionResult } from "@/types/shared.types";

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  isActive: boolean;
  dateJoined: string;
  createdAt: string;
  updatedAt: string;
}

export interface getUserActionResult extends ActionResult {
  user?: User;
}

export interface SignUpResults extends ActionResult {
  user?: User;
}
export interface SignUpResponse {
  data?: User;
}

export interface SignupPayload {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
}

export type LoginPayload = loginFormSchemaType;
export interface LoginResponse {
  data: {
    user: User;
  };
}

export interface LoginResults extends ActionResult {
  user?: User;
}

export type ForgotPasswordPayload = forgotPasswordSchemaType;

export interface getGoogleAuthURLResponse {
  oauth_url: string;
}
export interface getGoogleAuthURLResult extends ActionResult {
  AuthUrl?: string;
}

export interface googleLoginResponse {
  data: {
    user: User;
  };
}

export interface googleLoginResults extends ActionResult {
  user?: User;
}
