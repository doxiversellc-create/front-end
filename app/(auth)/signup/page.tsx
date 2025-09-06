import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import SignupForm from "./_components/SignupForm";

const SignupPage = () => {
  return (
    <div className="relative flex h-full w-full justify-center">
      <div className="h-full w-full max-w-sm py-20">
        <div className="mb-14 flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="font-outfit text-center text-3xl font-medium sm:text-4xl">
            Create a Free Account
          </h2>
          <p className="text-muted-foreground">Enter your Requested information below.</p>
        </div>
        <div className="mb-14 flex flex-col gap-8">
          <SignupForm />
          <div className="flex w-full items-center justify-center gap-2.5">
            <div className="bg-border h-px w-full" />
            <span className="text-sm">OR</span>
            <div className="bg-border h-px w-full" />
          </div>
          <Button variant="outline" className="rounded-xl">
            <Image src="/social-media-icons/google.svg" alt="google" width={20} height={20} />
            Continue with Google
          </Button>
        </div>
        <div className="flex w-full items-start justify-center gap-1 pb-10 max-sm:text-sm">
          <p className="text-nowrap">Have an account?</p>
          <Link href={"/login"} className="text-primary">
            Login
          </Link>
        </div>
      </div>
      <Link
        href={"/login"}
        className="hover:text-primary absolute top-5 right-4 flex items-center gap-2 transition-colors md:top-10 md:right-9"
      >
        Login
        <div className="bg-primary flex size-8 items-center justify-center rounded-full text-white">
          <ArrowRight size={16} />
        </div>
      </Link>
    </div>
  );
};

export default SignupPage;
