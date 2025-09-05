import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className=" w-full h-full flex items-center  justify-center relative">
      <div className="max-w-sm w-full  ">
        <div className="flex flex-col gap-2 items-center justify-center text-center mb-14">
          <h2 className="text-4xl font-outfit font-medium text-center">Forgot Your Password? </h2>
          <p className="text-muted-foreground">Enter your email address below.</p>
        </div>
        <div className="flex flex-col gap-8 mb-14">
          <ForgotPasswordForm />
        </div>
      </div>
      <Link
        href={"/login"}
        className="flex items-center gap-2 absolute top-5 left-4 md:top-10 md:right-9 hover:text-primary transition-colors"
      >
        <div className="size-8 rounded-full flex items-center justify-center text-white bg-primary">
          <ArrowLeft />
        </div>
        Go Back
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
