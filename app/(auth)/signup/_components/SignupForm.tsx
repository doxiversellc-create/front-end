"use client";
import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">
            First Name <span className="text-primary">*</span>
          </label>
          <Input className="w-full" placeholder="Eg, Peter" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">
            Last Name <span className="text-primary">*</span>
          </label>
          <Input className="w-full" placeholder="Eg, Lost" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">
          Email <span className="text-primary">*</span>
        </label>
        <Input className="w-full" type="email" placeholder="Example@email.com" />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">
          Password <span className="text-primary">*</span>
        </label>
        <div className="relative flex items-center">
          <Input
            className="w-full"
            type={passwordVisible ? "text" : "password"}
            placeholder="********"
          />
          <Button
            variant={"ghost"}
            size={"icon"}
            type="button"
            className="absolute right-2 hover:bg-transparent"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <Eye /> : <EyeOff />}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">
          Confirm Password <span className="text-primary">*</span>
        </label>
        <div className="relative flex items-center">
          <Input
            className="w-full"
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="********"
          />
          <Button
            variant={"ghost"}
            size={"icon"}
            type="button"
            className="absolute right-2 hover:bg-transparent"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? <Eye /> : <EyeOff />}
          </Button>
        </div>
      </div>

      <Button className="mt-4 rounded-xl">Sign Up</Button>
    </form>
  );
};

export default SignupForm;
