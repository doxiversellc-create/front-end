"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <form className=" w-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <label className=" font-medium">
          Email <span className="text-primary">*</span>
        </label>
        <Input className="w-full" type="email" placeholder="Example@email.com" />
      </div>
      <div className="flex flex-col gap-3">
        <label className=" font-medium">
          Password <span className="text-primary">*</span>
        </label>
        <div className="flex items-center relative">
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
      <div className="w-full justify-end flex">
        <Link href={"#"} className="text-sm  text-primary">
          Forgot password?
        </Link>
      </div>
      <Button className="rounded-xl mt-4">Login</Button>
    </form>
  );
};

export default LoginForm;
