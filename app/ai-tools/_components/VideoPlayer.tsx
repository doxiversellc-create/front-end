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
  height: string;
}) {
  return (
    <Suspense fallback={<VideoSkeleton height={height} />}>
      <VideoComponent embedUrl={embedUrl} height={height} />
    </Suspense>
  );
}

async function VideoComponent({ embedUrl, height }: { embedUrl: string; height: string }) {
  const src = await fetchVideoSrc(embedUrl);

  return (
    <div className={`w-full ${height} rounded-lg border border-gray-200 overflow-hidden`}>
      <iframe src={src} title="Embedded Video" allowFullScreen className="w-full h-full" />
    </div>
  );
}
export function VideoSkeleton({ height = "h-64" }) {
  return <div className={`w-full ${height} bg-gray-200 animate-pulse rounded-lg`} />;
}
