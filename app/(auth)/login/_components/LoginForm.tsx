"use client";
import { useState } from "react";

import Link from "next/link";

import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <form className="flex w-full flex-col gap-5">
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
      <div className="flex w-full justify-end">
        <Link href={"/forgot-password"} className="text-primary text-sm">
          Forgot password?
        </Link>
      </div>
      <Button className="mt-4 rounded-xl">Login</Button>
    </form>
  );
};

export default LoginForm;
