import { Card, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { ExcerciseProgression } from "../lib/excercises";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  progression: ExcerciseProgression;
  progressionNumber: number;
  progressionMax: number;
  base: string;
  onProgressionChange: (value: number) => void;
};

export default function Workout({
  progression,
  base,
  progressionNumber,
  progressionMax,
  onProgressionChange,
}: Props) {
  return (
    <Card
    // header={() => (
    //   <Galleria
    //     autoPlay={true}
    //     circular={true}
    //     transitionInterval={3000}
    //     showThumbnails={false}
    //     item={(s: string) => (
    //       <img src={s} alt="" style={{ width: "100%", display: "block" }} />
    //     )}
    //     thumbnail={(s: string) => (
    //       <img src={s} alt="" style={{ width: "100%", display: "block" }} />
    //     )}
    //     value={progression.images}
    //   />
    // )}
    >
      <Box p={2}>
        <Typography variant="overline">
          <span style={{ opacity: 0.6 }}>{base}</span> / {progression.name}
        </Typography>
        <Stack direction="row" spacing={3} pt={1}>
          <div>
            <Stack spacing={1}>
              <Typography variant="body1">Reps</Typography>
              <Typography variant="subtitle1">{progression.reps}</Typography>
            </Stack>
          </div>
          <div>
            <Stack spacing={1}>
              <Typography variant="body1">Sets</Typography>
              <Typography variant="subtitle1">{progression.sets}</Typography>
            </Stack>
          </div>
          <div style={{ width: 150 }}>
            <Stack spacing={0.5}>
              <Typography variant="body1">Progression</Typography>
              <Stack alignItems="center" spacing={1} direction="row">
                <IconButton
                  size="small"
                  color="primary"
                  disabled={progressionNumber <= 1}
                  onClick={() => onProgressionChange(progressionNumber - 1)}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="subtitle1">{progressionNumber}</Typography>
                <IconButton
                  size="small"
                  color="primary"
                  disabled={progressionNumber >= progressionMax}
                  onClick={() => onProgressionChange(progressionNumber + 1)}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Box>
    </Card>
  );
}
