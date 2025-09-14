import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import ForgotPasswordForm from "./_components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
      <Link
        href={"/login"}
        className="hover:text-primary absolute top-5 left-4 flex items-center gap-2 transition-colors md:top-10 md:right-9"
      >
        <div className="bg-primary flex size-8 items-center justify-center rounded-full text-white">
          <ArrowLeft />
        </div>
        Go Back
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
