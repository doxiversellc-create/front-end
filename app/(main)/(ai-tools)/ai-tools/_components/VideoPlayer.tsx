import { Suspense } from "react";

import { cn } from "@/lib/utils"; // assuming you have a cn() utility in utils
async function fetchVideoSrc(embedUrl: string) {
  if (embedUrl.includes("watch?v=")) {
    const videoId = new URL(embedUrl).searchParams.get("v");
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }
  return embedUrl;
}

export default function VideoPlayer({
  embedUrl,
  height = "h-64",
}: {
  embedUrl: string;
  height?: string;
}) {
  return (
    <Suspense fallback={<VideoSkeleton height={height} />}>
      <VideoComponent embedUrl={embedUrl} height={height} />
    </Suspense>
  );
}

async function VideoComponent({ embedUrl, height }: { embedUrl: string; height?: string }) {
  const src = await fetchVideoSrc(embedUrl);

  return (
    <div className={cn("border-border w-full overflow-hidden rounded-lg border", height)}>
      <iframe src={src} title="Embedded Video" allowFullScreen className="h-full w-full" />
    </div>
  );
}

export function VideoSkeleton({ height = "h-64" }) {
  return (
    <div className={cn("text-secondary-foreground w-full animate-pulse rounded-lg", height)} />
  );
}
