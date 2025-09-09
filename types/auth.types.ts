import { signupFormSchemaType } from "@/lib/schemas/auth.schema";
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
  user: signupFormSchemaType;
}

export interface LoginResponse {
  data: {
    user: User;
  };
}

export interface LoginResults extends ActionResult {
  user?: User;
}
