"use client";

import { ReactNode, useState } from "react";

import Image from "next/image";

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
              <Image
                src="/logo.svg"
                alt="Doxiverse Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <DialogTitle className="text-foreground text-center text-3xl font-semibold">
              {title}
            </DialogTitle>
            <p className="text-muted-foreground text-center text-sm">{description}</p>
          </DialogHeader>

          <div className="mt-6 flex flex-col gap-4">
            <Button className="w-full rounded-full py-3 text-sm">Sign Up</Button>
            <p className="text-muted-foreground text-center text-sm">
              Already have an account?{" "}
              <button className="text-primary font-medium hover:underline">Sign In</button>
            </p>
          </div>

          <p className="text-muted-foreground mt-6 text-center text-xs">
            By signing in, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
