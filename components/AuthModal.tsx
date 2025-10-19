"use client";

import { ReactNode, useState } from "react";

import Link from "next/link";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AuthModalProps {
  trigger: ReactNode; // any button/icon/etc
  title: string;
  description: string;
}

export function AuthModal({ trigger, title, description }: AuthModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger element */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-2xl p-8">
          <DialogHeader className="space-y-2 text-center">
            <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
              <Logo />
            </div>
            <DialogTitle className="text-foreground text-center text-3xl font-semibold">
              {title}
            </DialogTitle>
            <p className="text-muted-foreground text-center text-sm">{description}</p>
          </DialogHeader>

          <div className="mt-6 flex flex-col gap-4">
            <Link href="/signup">
              <Button className="w-full rounded-full py-3 text-sm">Sign Up</Button>
            </Link>
            <p className="text-muted-foreground text-center text-sm">
              Already have an account?{" "}
              <button className="text-primary font-medium hover:underline">
                <Link href="/login">Sign In</Link>
              </button>
            </p>
          </div>

          <p className="text-muted-foreground mt-6 text-center text-xs">
            By signing in, you agree to our{" "}
            <Link href="/documents/terms-of-use" className="text-primary hover:underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/documents/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
