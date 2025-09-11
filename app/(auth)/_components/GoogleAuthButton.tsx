"use client";
import Image from "next/image";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useGetGoogleUrl } from "@/hooks/authHooks/useGetGoogleUrl";

const GoogleAuthButton = () => {
  const { authUrl, isLoading, error } = useGetGoogleUrl();

  const handleOnClick = () => {
    if (!authUrl) return;
    window.location.href = authUrl;
  };
  if (!error)
    return (
      <Button variant="outline" className="w-full rounded-xl" onClick={handleOnClick}>
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <Image src="/social-media-icons/google.svg" alt="google" width={20} height={20} />
            Continue with Google
          </>
        )}
      </Button>
    );
};

export default GoogleAuthButton;
