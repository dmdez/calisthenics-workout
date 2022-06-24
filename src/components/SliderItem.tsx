import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { ExcerciseProgression } from "../lib/excercises";
import { OpenInNew } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "material-ui-image";
import { useStatePersist } from "use-state-persist";
import { Player } from "./Player";

const ItemContent = styled("div")`
  background: #222;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
`;

const ImageContainer = styled("div")`
  flex: 1;
  object-fit: cover;
`;

export function SliderItem({
  workoutName,
  progression,
}: {
  workoutName: string;
  progression: ExcerciseProgression;
}) {
  const { videoUrl, name, reps, sets } = progression;
  const [imageCacheUrl, setImageCacheUrl] = useStatePersist<string | undefined>(
    `imageCache${videoUrl}`
  );
  const [thumbClicked, setThumbClicked] = useState(false);

  useEffect(() => {
    if (!imageCacheUrl) {
      window
        .fetch(`https://noembed.com/embed?url=${videoUrl}`)
        .then((response) => response.json())
        .then((data) => setImageCacheUrl(data.thumbnail_url));
    }
  }, []);

  return (
    <>
      <ItemContent>
        <strong>
          {workoutName} / {name}
        </strong>
        <div>
          {sets} sets of {reps}
        </div>
        {videoUrl && (
          <IconButton
            size="small"
            sx={{ color: "white" }}
            onClick={() => {
              window.open(videoUrl, "video");
            }}
          >
            <OpenInNew color="inherit" fontSize="small" />
          </IconButton>
        )}
      </ItemContent>
      <ImageContainer>
        {thumbClicked && videoUrl ? (
          <Player url={videoUrl} />
        ) : (
          imageCacheUrl && (
            <Image
              src={imageCacheUrl}
              style={{ paddingTop: undefined, height: "100%" }}
              imageStyle={{ objectFit: "cover" }}
              onClick={() => setThumbClicked(true)}
            />
          )
        )}
      </ImageContainer>
    </>
  );
}
