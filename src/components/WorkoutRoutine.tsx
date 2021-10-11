import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { TodaysRoutine } from "../lib/excercises";
import Workout from "./Workout";

type Props = {
  routine: TodaysRoutine[];
  onProgressionChange: (name: string, value: number) => void;
};

export function WorkoutRoutine({ routine, onProgressionChange }: Props) {
  if (routine && routine.length > 0) {
    return (
      <Stack spacing={1}>
        {routine.map(
          ({ workoutName, progressionMax, progressionNumber, progression }) => (
            <div key={workoutName}>
              <Workout
                progressionMax={progressionMax}
                onProgressionChange={(value) =>
                  onProgressionChange(workoutName, value)
                }
                base={workoutName}
                progressionNumber={progressionNumber}
                progression={progression}
              />
            </div>
          )
        )}
      </Stack>
    );
  }

  return (
    <Card>
      <Stack alignItems="center" justifyContent="center" spacing={1} p={1}>
        <Typography variant="h5" color="InfoText">
          No workouts.
        </Typography>
        <Typography color="GrayText">
          Enjoy the day and do something active!
          <ul>
            <li>Stretch</li>
            <li>Walk/Run</li>
            <li>Hike</li>
            <li>Play a game</li>
            <li>...</li>
          </ul>
        </Typography>
      </Stack>
    </Card>
  );
}
