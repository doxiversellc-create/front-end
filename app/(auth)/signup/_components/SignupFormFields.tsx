import { UseFormReturn } from "react-hook-form";

import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupFormSchemaType } from "@/lib/schemas/auth.schema";

interface SignupFormFieldsProps {
  form: UseFormReturn<signupFormSchemaType>;
  passwordVisible: boolean;
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  confirmPasswordVisible: boolean;
  setConfirmPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignupFormFields = ({
  form,
  confirmPasswordVisible,
  passwordVisible,
  setConfirmPasswordVisible,
  setPasswordVisible,
}: SignupFormFieldsProps) => {
  return (
    <>
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
    </>
  );
};

export default SignupFormFields;
