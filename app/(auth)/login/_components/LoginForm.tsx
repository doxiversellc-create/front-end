"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/authHooks/useLogin";
import { loginFormSchema } from "@/lib/schemas/auth.schema";

interface LoginFormProps {
  redirectUrl?: string;
}
const LoginForm = ({ redirectUrl }: LoginFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { error, isLoading, login } = useLogin(redirectUrl);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    login(values);
  }

  useEffect(() => {
    if (error) {
      toast.error("Login Failed", { description: error });
    }
  }, [error]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Password <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="********"
                    {...field}
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end">
          <Link href={"/forgot-password"} className="text-primary text-sm">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="mt-4 rounded-md" disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 animate-spin" /> : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
