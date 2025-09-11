"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { CheckCircle2, CircleX, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@/hooks/authHooks/useGoogleLogin";

const GoogleCallback = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { error, isSuccess } = useGoogleLogin(code);

  if (isSuccess)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold">Login Successful!</h3>
        <p className="text-muted-foreground">
          You are now logged in. We&apos;ll redirect you shortly.
        </p>
        <Button asChild className="mt-4 w-full rounded-xl">
          <Link href="/dashboard">Continue to Dashboard</Link>
        </Button>
      </div>
    );

  if (error)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <CircleX className="h-12 w-12 text-red-500" />
        <h3 className="text-xl font-semibold">Login Failed</h3>
        <p className="text-muted-foreground">{error}</p>
        <Button asChild className="mt-4 w-full rounded-xl">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    );

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
      <Loader2 className="text-primary h-12 w-12 animate-spin" />
      <h3 className="text-xl font-semibold">Authenticating with Google</h3>
      <p className="text-muted-foreground">Please wait while we log you in.</p>
    </div>
  );
};

export default GoogleCallback;
