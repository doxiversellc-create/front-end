import { cn } from "@/lib/utils"; // assuming you have a cn() utility in utils
import { Suspense } from "react";

async function fetchVideoSrc(embedUrl: string) {
  // In case you want to fetch or process the URL dynamically
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
    <div className={cn("w-full rounded-lg border border-border overflow-hidden", height)}>
      <iframe src={src} title="Embedded Video" allowFullScreen className="w-full h-full" />
    </div>
  );
}

export function VideoSkeleton({ height = "h-64" }) {
  return (
    <div className={cn("w-full text-secondary-foreground animate-pulse rounded-lg", height)} />
  );
}
