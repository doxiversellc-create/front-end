"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import * as z from "zod";

import GoogleAuthButton from "@/app/(auth)/_components/GoogleAuthButton";
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
import { useSignup } from "@/hooks/authHooks/useSignup";
import { signupFormSchema } from "@/lib/schemas/auth.schema";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const { error, isLoading, signup, isSuccess } = useSignup();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password,
      password_confirm: values.confirmPassword,
    };
    signup(data);
  }

  useEffect(() => {
    if (error) {
      toast.error("Error", { description: error });
    }
  }, [error]);

  if (isSuccess)
    return (
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-4 text-center">
        <Image src="/shapes/mail.svg" alt="email" width={100} height={100} />
        <h3 className="text-xl font-semibold">Check Your Email</h3>
        <p className="text-muted-foreground">
          We&apos;ve sent a verification link to your email. Just click it to confirm your account
          and get started.
        </p>
        <Button asChild className="mt-4 w-full rounded-xl">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    );
  return (
    <>
      <div className="h-full w-full max-w-sm py-20">
        <div className="mb-14 flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="font-outfit text-center text-3xl font-medium sm:text-4xl">
            Create a Free Account
          </h2>
          <p className="text-muted-foreground">Enter your Requested information below.</p>
        </div>
        <div className="mb-14 flex flex-col gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
              <div className="flex gap-3">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>
                        First Name <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Eg, Peter" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>
                        Last Name <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Eg, Lost" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Username <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="john_doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <Button type="submit" className="mt-4 rounded-xl" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 animate-spin" /> : "Sign Up"}
              </Button>
            </form>
          </Form>
          <div className="flex w-full items-center justify-center gap-2.5">
            <div className="bg-border h-px w-full" />
            <span className="text-sm">OR</span>
            <div className="bg-border h-px w-full" />
          </div>
          <GoogleAuthButton />
        </div>
        <div className="flex w-full items-start justify-center gap-1 pb-10 max-sm:text-sm">
          <p className="text-nowrap">Have an account?</p>
          <Link href={"/login"} className="text-primary">
            Login
          </Link>
        </div>
      </div>
      <Link
        href={"/login"}
        className="hover:text-primary absolute top-5 right-4 flex items-center gap-2 transition-colors md:top-10 md:right-9"
      >
        Login
        <div className="bg-primary flex size-8 items-center justify-center rounded-full text-white">
          <ArrowRight size={16} />
        </div>
      </Link>
    </>
  );
};

export default SignupForm;
