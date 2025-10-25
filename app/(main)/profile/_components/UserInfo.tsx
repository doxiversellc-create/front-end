"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import LogoutButton from "@/app/(main)/profile/_components/LogoutButton";
import UserInfoSkeleton from "@/app/(main)/profile/_components/UserInfoSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useUpdateProfile } from "@/hooks/authHooks/useUpdateProfile";
import { profileUpdateSchema, profileUpdateSchemaType } from "@/lib/schemas/auth.schema";

const UserInfo = () => {
  const { user, isLoading: isLoadingUser } = useAuth();

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
  const { error, isLoading, isSuccess, updateProfile } = useUpdateProfile();

  const onSubmit = (values: profileUpdateSchemaType) => {
    updateProfile({
      username: values.userName,
      first_name: values.firstName,
      last_name: values.lastName,
    });
  };

  useEffect(() => {
    if (user) {
      form.reset({
        firstName: user.first_name,
        lastName: user.last_name,
        userName: user.username, // Ensure this matches your schema
      });
    }
  }, [user, form]);

  useEffect(() => {
    if (error) {
      toast.error("Error", { description: error });
    }

    if (isSuccess) {
      toast.success("Updated profile");
    }
  }, [isSuccess, error]);

  if (isLoadingUser) return <UserInfoSkeleton />;
  if (!user) return;
  const userValues = {
    firstName: user.first_name,
    lastName: user.last_name,
    userName: user.username,
  };
  const changed =
    (form.watch().firstName ?? "") !== userValues.firstName ||
    (form.watch().lastName ?? "") !== userValues.lastName ||
    (form.watch().userName ?? "") !== userValues.userName;

  return (
    <div className="flex w-full flex-col gap-8 py-10 sm:max-w-sm">
      <div>
        <p className="font-outfit text-2xl font-semibold">Update your profile</p>
      </div>
      <div className="flex flex-col gap-4 max-sm:items-center">
        <Avatar className="size-24 border">
          <AvatarImage src={user.profile_image} />
          <AvatarFallback className="font-outfit text-4xl font-semibold">
            {user.first_name[0]}
          </AvatarFallback>
        </Avatar>
        {/* <p className="font-outfit text-primary cursor-pointer font-semibold hover:underline">
          Upload profile image
        </p> */}
      </div>
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
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
            <Button type="submit" disabled={!changed || isLoading} className="w-24">
              {isLoading ? <Loader2 className="animate-spin" /> : "Update"}
            </Button>
            <LogoutButton />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserInfo;
