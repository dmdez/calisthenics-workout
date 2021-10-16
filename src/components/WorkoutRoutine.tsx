import { Stack } from "@mui/material";
import React from "react";
import { TodaysRoutine } from "../lib/excercises";
import { EmptyWorkout } from "./EmptyWorkout";
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

  return <EmptyWorkout />;
}
