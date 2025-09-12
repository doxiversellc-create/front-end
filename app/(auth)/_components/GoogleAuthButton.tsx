"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { useGoogleAuth } from "@/hooks/authHooks/useGoogleAuth";
import { useGoogleGsiScript } from "@/hooks/authHooks/useGoogleGsiScript";
import { cn } from "@/lib/utils";

const GoogleAuthButton = () => {
  const { isLoaded: isScriptLoaded, error: scriptError } = useGoogleGsiScript();
  const { isLoading, error, googleAuth } = useGoogleAuth();

  const tokenClientRef = useRef<google.accounts.oauth2.TokenClient | null>(null);

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!isScriptLoaded) return;

    if (scriptError) {
      toast.error("Google script failed to load. Please try again.");
      return;
    }

    if (!clientId) {
      console.error("Google Client ID is not configured.");
      toast.error("Authentication is currently unavailable.");
      return;
    }

    if (window.google) {
      tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: [
          "https://www.googleapis.com/auth/userinfo.profile",
          "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),

        callback: (tokenResponse: google.accounts.oauth2.TokenResponse) => {
          if (tokenResponse.error) {
            toast.error(tokenResponse.error_description || "An unknown error occurred.");
            return;
          }

          if (tokenResponse.access_token) {
            googleAuth(tokenResponse.access_token);
          } else {
            toast.error("Google login failed: No access token found.");
          }
        },
      });
    }
  }, [isScriptLoaded, scriptError, clientId, googleAuth]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleGoogleLogin = () => {
    if (tokenClientRef.current) {
      tokenClientRef.current.requestAccessToken();
    } else {
      toast.error("Google client not ready. Please try again in a moment.");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={isLoading || !isScriptLoaded}
      className={cn(
        "relative flex h-10 w-full items-center justify-center rounded-md border text-sm font-medium",
        "bg-background hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50"
      )}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <span className="flex items-center justify-center gap-2">
          <Image
            src={"/social-media-icons/google.svg"}
            width={20}
            height={20}
            alt={"Google logo"}
          />
          Continue with Google
        </span>
      )}
    </button>
  );
};

export default GoogleAuthButton;
