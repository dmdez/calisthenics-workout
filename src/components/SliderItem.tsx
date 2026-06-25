import { styled } from "@mui/material";
import { useState } from "react";
import { ExcerciseProgression } from "../lib/excercises";
import { VIDEO_THUMBNAILS } from "../lib/video-thumbnails";
import { OpenInNew } from "@mui/icons-material";
import { IconButton } from "@mui/material";
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
  min-height: 0;
  overflow: hidden;
`;

const Thumbnail = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  display: block;
`;

export function SliderItem({
  workoutName,
  progression,
}: {
  workoutName: string;
  progression: ExcerciseProgression;
}) {
  const { videoUrl, name, reps, sets } = progression;
  const [thumbClicked, setThumbClicked] = useState(false);
  const thumbnailUrl = videoUrl ? VIDEO_THUMBNAILS[videoUrl] : undefined;

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
          thumbnailUrl && (
            <Thumbnail
              src={thumbnailUrl}
              alt={`${workoutName} / ${name}`}
              onClick={() => setThumbClicked(true)}
            />
          )
        )}
      </ImageContainer>
    </>
  );
}
