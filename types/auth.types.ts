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
