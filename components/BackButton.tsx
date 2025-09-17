"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    {
      router.back();
    }
  };
  return (
    <Button variant={"outline"} onClick={handleClick}>
      Go Back
    </Button>
  );
};

export default BackButton;
