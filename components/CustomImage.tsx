"use client";
import { useState } from "react";

import Image, { ImageProps } from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  placeHolder?: string;
}

export const CustomImage = ({
  alt,
  src,
  placeHolder = "/placeholder.webp",
  ...props
}: CustomImageProps & ImageProps) => {
  const source = src && src.length > 0 ? src : placeHolder;
  const [imageSrc, setImageSrc] = useState(source);

  const handleError = () => {
    if (imageSrc !== placeHolder) {
      setImageSrc(placeHolder);
    }
  };

  return <Image src={imageSrc} alt={alt} onError={handleError} loading="lazy" {...props} />;
};
