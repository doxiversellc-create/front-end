import Link from "next/link";

import { ArrowRight } from "lucide-react";

import GoogleAuthButton from "@/app/(auth)/_components/GoogleAuthButton";
import { getSafeRedirectUrl } from "@/lib/utils";
import LoginForm from "./_components/LoginForm";

interface LoginPageProps {
  searchParams: Promise<{ next: string }>;
}
const LoginPage = async ({ searchParams }: LoginPageProps) => {
  const { next } = await searchParams;
  const redirectUrl = getSafeRedirectUrl(next);
  return (
    <div className="relative flex h-full w-full justify-center">
      <div className="h-full w-full max-w-sm py-20">
        <div className="mb-14 flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="font-outfit text-center text-3xl font-medium sm:text-4xl">
            Welcome to Doxiverse
          </h2>
          <p className="text-muted-foreground">Login into your account</p>
        </div>
        <div className="mb-14 flex flex-col gap-8">
          <LoginForm redirectUrl={redirectUrl} />
          <div className="flex w-full items-center justify-center gap-2.5">
            <div className="bg-border h-px w-full" />
            <span className="text-sm">OR</span>
            <div className="bg-border h-px w-full" />
          </div>
          <GoogleAuthButton />
        </div>
        <div className="flex w-full items-start justify-center gap-1 pb-10 max-sm:text-sm">
          <p className="text-nowrap">Don&apos;t have an account?</p>
          <Link href={"/signup"} className="text-primary">
            Create one now.
          </Link>
        </div>
      </div>
      <Link
        href={"/signup"}
        className="hover:text-primary absolute top-5 right-4 flex items-center gap-2 transition-colors md:top-10 md:right-9"
      >
        Sign Up
        <div className="bg-primary flex size-8 items-center justify-center rounded-full text-white">
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default LoginPage;
