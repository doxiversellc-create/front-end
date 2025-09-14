"use client";
import Link from "next/link";

import { CheckCircle2, CircleX, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useVerifyEmail } from "@/hooks/authHooks/useVerifyEmail";

interface VerifyEmailProps {
  token: string;
}
const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { isSuccess, error } = useVerifyEmail(token);

  if (isSuccess)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold">Email Verified</h3>
        <p className="text-muted-foreground">Your email address has been successfully verified.</p>
        <Button asChild className="mt-4 w-full rounded-xl">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    );

  if (error)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <CircleX className="h-12 w-12 text-red-500" />
        <h3 className="text-xl font-semibold">Email Verification Failed</h3>
        <p className="text-muted-foreground">{error}</p>
        <Button asChild className="mt-4 w-full rounded-xl">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    );

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
      <Loader2 className="text-primary h-12 w-12 animate-spin" />
      <h3 className="text-xl font-semibold">Verifying Your Email</h3>
      <p className="text-muted-foreground">Please wait while we verify your email address.</p>
    </div>
  );
};

export default VerifyEmail;
