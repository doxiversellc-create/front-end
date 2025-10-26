import { forgotPasswordSchemaType, loginFormSchemaType } from "@/lib/schemas/auth.schema";
import { ActionResult } from "@/types/shared.types";

export interface User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  profile_image: string;
  last_name: string;
  full_name: string;
  is_active: boolean;
  date_joined: string;
  created_at: string;
  updated_at: string;
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
  token: string;
  user: User;
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

export interface googleAuthResponse {
  token: string;
  user: User;
}

export interface googleAuthResults extends ActionResult {
  user?: User;
}

export interface UpdateProfilePayload {
  username: string;
  first_name: string;
  last_name: string;
}

export type UpdateProfileResponse = User;

export interface UpdateProfileResults extends ActionResult {
  user?: User;
}

export interface ResetPasswordPayload {
  token: string;
  new_password: string;
  password_confirm: string;
}
