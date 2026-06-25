import VimeoPlayer from "@vimeo/player";
import type { VimeoUrl } from "@vimeo/player/types/formats";
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
        url: url as VimeoUrl,
      });
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [url]);
  return <div ref={ref} />;
}
