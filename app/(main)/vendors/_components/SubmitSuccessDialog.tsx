"use client";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SubmitSuccessDialogProps {
  open: boolean;
  setOpen: (_open: boolean) => void;
}

const SubmitSuccessDialog = ({ open, setOpen }: SubmitSuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex max-w-md flex-col items-center justify-center gap-4 rounded-2xl p-8 text-center">
        <DialogHeader className="flex flex-col items-center space-y-3">
          <CheckCircle2 className="h-14 w-14 text-green-500" />
          <DialogTitle className="text-2xl font-semibold">
            Thank You for Your Submission!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center text-base leading-relaxed">
            We&apos;ve received your submission! Our team will carefully review your tool. You can
            expect an email from us with the status of your submission soon
          </DialogDescription>
        </DialogHeader>

        <Button onClick={() => setOpen(false)} className="mt-4 w-full rounded-full py-3 text-sm">
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitSuccessDialog;
