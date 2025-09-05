import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import SignupForm from "./_components/SignupForm";

const SignupPage = () => {
  return (
    <div className=" w-full h-full flex  justify-center relative">
      <div className="max-w-sm w-full  h-full py-20">
        <div className="flex flex-col gap-2 items-center justify-center text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-outfit font-medium text-center">
            Create a Free Account
          </h2>
          <p className="text-muted-foreground">Enter your Requested information below.</p>
        </div>
        <div className="flex flex-col gap-8 mb-14">
          <SignupForm />
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
          <p className="text-nowrap">Have an account?</p>
          <Link href={"/login"} className="text-primary">
            Login
          </Link>
        </div>
      </div>
      <Link
        href={"/login"}
        className="flex items-center gap-2 absolute top-5 right-4 md:top-10 md:right-9 hover:text-primary transition-colors"
      >
        Login
        <div className="size-8 rounded-full flex items-center justify-center text-white bg-primary">
          <ArrowRight size={16} />
        </div>
      </Link>
    </div>
  );
};

export default SignupPage;
