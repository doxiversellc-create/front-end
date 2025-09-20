"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import SubmitSuccessDialog from "@/app/(main)/vendors/_components/SubmitSuccessDialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useSubmitTool from "@/hooks/useSubmitTool";
import { VendorSchemaType, vendorsSchema } from "@/lib/schemas/vendor.schema";

const StyledAsterisk = () => <span className="text-primary">*</span>;
export function VendorsForm() {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { error, isLoading, submitTool, success } = useSubmitTool();
  const [open, setOpen] = useState(false);
  const form = useForm<VendorSchemaType>({
    resolver: zodResolver(vendorsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      toolName: "",
      toolUrl: "",
      description: "",
    },
  });

  function onSubmit(values: VendorSchemaType) {
    submitTool({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone_number: values.phoneNumber,
      tool_name: values.toolName,
      tool_url: values.toolUrl,
      description: values.description,
    });
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      setOpen(true);
      form.reset();
      setAgreeToTerms(false);
    }
  }, [error, success, form]);
  return (
    <div className="bg-background mx-auto max-w-4xl rounded-4xl p-8 max-lg:px-0">
      <SubmitSuccessDialog open={open} setOpen={setOpen} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    First Name <StyledAsterisk />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Eg, Peter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Last Name <StyledAsterisk />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Eg, Peter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <StyledAsterisk />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Example1@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone Number <StyledAsterisk />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Eg, +127 725 826" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="toolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Tool Name <StyledAsterisk />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Eg, Chat GPT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="toolUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Tool URL <StyledAsterisk />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Eg, OpenAI" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <StyledAsterisk />
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe how your healthcare AI tool benefits healthcare professionals, including its key features, use cases, and impact on patient care or efficiency"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row items-start space-y-0 space-x-3 rounded-md">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={() => setAgreeToTerms(!agreeToTerms)}
              className="mt-1"
            />
            <Label htmlFor="terms" className="flex-wrap text-sm/5 font-normal">
              <p>
                By submitting, you agree to our{" "}
                <Link href="/vendor/privacy" className="font-medium underline">
                  Vendor Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/vendor/terms" className="font-medium underline">
                  Vendor Terms and Conditions
                </Link>
                , in addition to our main{" "}
                <Link href="/privacy" className="font-medium underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="font-medium underline">
                  Terms of Use
                </Link>
                .
              </p>
            </Label>
          </div>

          <Button
            type="submit"
            className="shadow-primary/20 w-full shadow-lg"
            size="lg"
            disabled={!agreeToTerms || isLoading}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue to Payment"}
          </Button>
          <div className="bg-primary absolute top-2/5 right-0 -z-10 hidden h-5 w-full rounded-full blur-[300px] lg:block" />
        </form>
      </Form>
    </div>
  );
}
