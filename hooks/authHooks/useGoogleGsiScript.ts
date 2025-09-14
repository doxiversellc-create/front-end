"use client";

import { useEffect, useState } from "react";

type ScriptStatus = {
  isLoaded: boolean;
  error: Error | null;
};

// A unique ID for the script to prevent duplicate loading
const GSI_SCRIPT_ID = "google-gsi-script";

export const useGoogleGsiScript = (): ScriptStatus => {
  const [status, setStatus] = useState<ScriptStatus>({
    isLoaded: false,
    error: null,
  });

  useEffect(() => {
    // Prevent loading the script more than once
    if (document.getElementById(GSI_SCRIPT_ID)) {
      setStatus({ isLoaded: true, error: null });
      return;
    }

    const script = document.createElement("script");
    script.id = GSI_SCRIPT_ID;
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setStatus({ isLoaded: true, error: null });
    };

    script.onerror = () => {
      setStatus({
        isLoaded: false,
        error: new Error("Failed to load Google GSI script."),
      });
    };

    document.body.appendChild(script);

    return () => {
      const scriptElement = document.getElementById(GSI_SCRIPT_ID);
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only once per component mount

  return status;
};
