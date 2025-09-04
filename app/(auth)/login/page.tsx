import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className=" w-full h-full flex  justify-center relative">
      <div className="max-w-sm w-full  h-full py-20">
        <div className="flex flex-col gap-2 items-center justify-center text-center mb-14">
          <h2 className="text-4xl font-outfit font-medium text-center">Welcome to Doxiverse </h2>
          <p className="text-muted-foreground">Sign in into your account</p>
        </div>
        <div className="flex flex-col gap-8 mb-14">
          <LoginForm />
          <div className="flex items-center w-full justify-center gap-2.5 ">
            <div className="bg-border h-px w-full" />
            <span className="text-sm">OR</span>
            <div className="bg-border h-px w-full" />
          </div>
          <Button variant="outline" className="rounded-xl">
            <Image src="/social-media-icons/google.svg" alt="google" width={20} height={20} />
            Continue with Google
          </Button>
        </div>
        <div className="flex items-start max-sm:text-sm justify-center w-full gap-1 pb-10 ">
          <p className="text-nowrap">Don&apos;t have an account?</p>
          <Link href={"/sign-up"} className="text-primary">
            Create one now.
          </Link>
        </div>
      </div>
      <Link
        href={"/sign-up"}
        className="flex items-center gap-2 absolute top-5 right-4 md:top-10 md:right-9"
      >
        Sign Up
        <div className="size-8 rounded-full flex items-center justify-center text-white bg-primary">
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default LoginPage;
