"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Guard for SSR (window is undefined on the server)
    const checkIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

    setIsMobile(checkIsMobile());

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(checkIsMobile());

    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange); // optional, in case

    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return isMobile;
}
