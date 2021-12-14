import {
  Card,
  CardMedia,
  Divider,
  IconButton,
  makeStyles,
  Stack,
  Typography,
} from "@mui/material";
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
    <Card sx={{ display: "flex" }}>
      <Box p={1} sx={{ flex: 1 }}>
        <Typography variant="caption">
          <span style={{ opacity: 0.6 }}>{base}</span> /
          <div>{progression.name}</div>
        </Typography>
        <Stack direction="row" spacing={1} pt={1}>
          <div>
            <Stack spacing={1}>
              <Typography variant="body1" color="GrayText">
                Reps
              </Typography>
              <Typography variant="subtitle1">{progression.reps}</Typography>
            </Stack>
          </div>
          <Divider orientation="vertical" flexItem />
          <div>
            <Stack spacing={1}>
              <Typography variant="body1" color="GrayText">
                Sets
              </Typography>
              <Typography variant="subtitle1">{progression.sets}</Typography>
            </Stack>
          </div>
          <Divider orientation="vertical" flexItem />
          <div
            style={{
              visibility: progressionMax > 1 ? "visible" : "hidden",
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="body1" color="GrayText">
                Progression
              </Typography>
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
      <CardMedia
        component="img"
        sx={{ width: 130 }}
        image={progression.images[0]}
      />
    </Card>
  );
}
