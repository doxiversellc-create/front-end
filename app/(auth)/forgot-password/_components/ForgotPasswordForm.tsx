"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPasswordForm = () => {
  return (
    <form className=" flex w-full  flex-col gap-5">
      <div className="flex flex-col gap-3">
        <label className=" font-medium text-sm">
          Email <span className="text-primary">*</span>
        </label>
        <Input className="w-full" type="email" placeholder="Example@email.com" />
      </div>
      <Button className="rounded-xl mt-4">Send Reset Link</Button>
    </form>
  );
};

export default ForgotPasswordForm;
