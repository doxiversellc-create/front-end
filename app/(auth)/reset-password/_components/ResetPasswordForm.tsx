"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react";
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
import { useResetPassword } from "@/hooks/authHooks/useResetPassword";
import { resetPasswordSchema } from "@/lib/schemas/auth.schema";

interface ResetPasswordFormProps {
  token?: string;
}
const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { error, isLoading, isSuccess, resetPassword } = useResetPassword();

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    if (!token) return;
    resetPassword({
      token,
      new_password: values.password,
      password_confirm: values.confirmPassword,
    });
  }

  useEffect(() => {
    if (error) {
      toast.error("Error", { description: error });
    }
  }, [error]);

  if (isSuccess) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold">Password Reseted successfully </h3>
        <p className="text-muted-foreground">Please login with your new password</p>
        <Button asChild className="mt-4 w-full rounded-md">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-14 flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="font-outfit text-center text-4xl font-medium">Reset Your Password </h2>
        <p className="text-muted-foreground">Set a new password for your account.</p>
      </div>
      <div className="mb-14 flex flex-col gap-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
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
            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Confirm Password <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="********"
                        {...field}
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 rounded-md" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 animate-spin" /> : "Send Reset Link"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ResetPasswordForm;
