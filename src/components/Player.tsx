import React from "react";
import { default as VimeoPlayer } from "@vimeo/player";
import { useEffect, useRef } from "react";

type Props = {
  url: string;
};

export function Player({ url }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);

  useEffect(() => {
    if (ref.current) {
      playerRef.current = new VimeoPlayer(ref.current, {
        url,
      });

      // playerRef.current.loadVideo(url);
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, []);
  return <div ref={ref} />;
}
