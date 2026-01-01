import { useEffect, useRef } from "react";

export default function VideoPlayer({ videoSrc }: { videoSrc?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Try to load the video as soon as possible
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      controls
      preload="metadata"
      download
      playsInline
      style={{ width: "100%" }}
    >
      <source
        src={
          videoSrc ||
          "https://d3sfr3jalg57ca.cloudfront.net/bellalegal/lobby-6931c25f5c202131843fa0a6/1767119344162"
        }
        type="video/mp4"
      />
    </video>
  );
}
