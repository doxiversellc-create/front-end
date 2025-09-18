"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { useAuth } from "@/contexts/AuthContext";
import { profileUpdateSchema, profileUpdateSchemaType } from "@/lib/schemas/auth.schema";

const UserInfo = () => {
  const { user } = useAuth();

  const defaultValues = user
    ? {
        firstName: user.first_name,
        lastName: user.last_name,
        userName: user.username,
      }
    : { firstName: "", lastName: "", userName: "" };
  const form = useForm<profileUpdateSchemaType>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues,
  });

  useEffect(() => {
    if (user) {
      form.reset({
        firstName: user.first_name,
        lastName: user.last_name,
        userName: user.username, // Ensure this matches your schema
      });
    }
  }, [user, form]);
  if (!user) return;
  const userValues = {
    firstName: user.first_name,
    lastName: user.last_name,
    userName: user.username,
  };
  const changed =
    form.watch().firstName! != userValues.firstName ||
    form.watch().lastName! != userValues.lastName ||
    form.watch().userName! != userValues.userName;

  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-10">
      <div className="flex flex-col gap-4">
        <Avatar className="size-24 border">
          <AvatarFallback className="font-outfit text-4xl font-semibold">
            {user.first_name[0]}
          </AvatarFallback>
        </Avatar>
        <p className="font-outfit text-primary cursor-pointer font-semibold hover:underline">
          Update profile
        </p>
      </div>
      <Form {...form}>
        <form action="" className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  First Name <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Eg, Peter" {...field} className="bg-background" />
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
                  <Input placeholder="Eg, Lost" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Username */}
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Username <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="john_doe" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormItem>
            <FormLabel>
              Email <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Example@email.com"
                className="bg-background"
                value={user.email}
                disabled
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <div className="flex items-center gap-2">
            <Button type="submit" disabled={!changed}>
              Update
            </Button>
            <Button type="button" variant={"outline"}>
              Logout
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserInfo;
