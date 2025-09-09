"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
import { useSignup } from "@/hooks/authHooks/useSignup";
import { signupFormSchema } from "@/lib/schemas/auth.schema";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const { error, isLoading, signup } = useSignup();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    const data = {
      user: values,
    };
    signup(data);
  }

  useEffect(() => {
    if (error) {
      toast.error("Error", { description: error });
    }
  }, [error]);

  return (
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
  );
};

export default SignupForm;
