"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
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
import { useForgotPassword } from "@/hooks/authHooks/useForgotPassword";
import { forgotPasswordSchema } from "@/lib/schemas/auth.schema";

const ForgotPasswordForm = () => {
  const { error, isLoading, isSuccess } = useForgotPassword();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    toast("Check your email for a link to reset your password.", {
      description: () => <code>{JSON.stringify(values)}</code>,
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
        <h3 className="text-xl font-semibold">Check Your Email</h3>
        <p className="text-muted-foreground">
          If an account with that email exists, we&apos;ve sent a link to reset your password.
        </p>
        <Button asChild className="mt-4 w-full rounded-md">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-14 flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="font-outfit text-center text-4xl font-medium">Forgot Your Password? </h2>
        <p className="text-muted-foreground">Enter your email address below.</p>
      </div>
      <div className="mb-14 flex flex-col gap-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
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
            <Button type="submit" className="mt-4 rounded-md" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 animate-spin" /> : "Send Reset Link"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
