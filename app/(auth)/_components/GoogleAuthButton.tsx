"use client";

import { useEffect, useRef, useState } from "react";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { useGoogleAuth } from "@/hooks/authHooks/useGoogleAuth";
import { useGoogleGsiScript } from "@/hooks/authHooks/useGoogleGsiScript";
import { cn } from "@/lib/utils";
import type { CredentialResponse } from "@/types/google";

const GoogleAuthButton = () => {
  const { isLoaded: isScriptLoaded, error: scriptError } = useGoogleGsiScript();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isButtonRendered, setIsButtonRendered] = useState(false);
  const { error, isLoading, googleAuth, isSuccess } = useGoogleAuth();
  const showButton = isButtonRendered && !isLoading;

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!isScriptLoaded || !buttonRef.current) {
      return;
    }

    if (scriptError) {
      const errorMessage = "Google script failed to load. Please try again.";
      toast.error(errorMessage);

      return;
    }

    if (!clientId) {
      console.error("Google Client ID is not configured.");
      const errorMessage = "Authentication is currently unavailable.";
      toast.error(errorMessage);

      return;
    }

    // Ensure window.google is available
    if (!window.google) {
      console.error("Google's `window.google` object not found.");
      return;
    }

    // Initialize the GSI client
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: CredentialResponse) => {
        if (response.credential) {
          googleAuth(response.credential);
        } else {
          const errorMessage = "Google login failed: No credential found.";
          toast.error(errorMessage);
        }
      },
    });

    const parentElement = document.getElementById("google-button-parent");

    const width = Math.floor(parentElement?.offsetWidth ?? 320).toString();

    window.google.accounts.id.renderButton(buttonRef.current, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "rectangular",
      width,
    });

    setIsButtonRendered(true);
  }, [isScriptLoaded, scriptError, clientId, googleAuth]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, isSuccess]);
  return (
    <div
      id="google-button-parent"
      className="relative flex h-10 w-full items-center justify-center"
    >
      {!showButton && (
        <div className="bg-background absolute inset-0 flex items-center justify-center rounded-xs border">
          <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
        </div>
      )}
      <div ref={buttonRef} className={cn("h-full w-full", !showButton && "opacity-0")} />
    </div>
  );
};

export default GoogleAuthButton;
