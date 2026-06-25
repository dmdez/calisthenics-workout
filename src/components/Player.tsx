import { styled } from "@mui/material";

const PlayerContainer = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

function parseVimeoId(url: string): string | undefined {
  return url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
}

type Props = {
  url: string;
};

export function Player({ url }: Props) {
  const id = parseVimeoId(url);
  if (!id) return null;

  return (
    <PlayerContainer>
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=1&playsinline=1&title=0&byline=0&portrait=0`}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        title="Exercise video"
      />
    </PlayerContainer>
  );
}
