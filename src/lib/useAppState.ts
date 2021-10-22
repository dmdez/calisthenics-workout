import { useMemo, useState } from "react";
import { useStatePersist } from "use-state-persist";
import { DAYS, Excercise, excercises, ProgressionState, TodaysRoutine } from "./excercises";

export function useAppState() {
  const defaultDow = DAYS[new Date().getDay()].name;
  const [dow, setDow] = useState<string>(defaultDow);
  const [progressions, setProgressions] = useStatePersist<ProgressionState>(
    "progressions",
    {}
  );
  const lookup = excercises.reduce<{ [key: string]: Excercise }>(
    (acc, curr) => {
      acc[curr.name] = curr;
      return acc;
    },
    {}
  );
  const todaysWorkout = DAYS.find((d) => d.name === dow);
  const updateProgression = (name: string, value: number) =>
    setProgressions({
      ...progressions,
      [name]: value,
    });

  const todaysWorkoutRoutine = useMemo<TodaysRoutine[]>(
      () =>
        todaysWorkout
          ? todaysWorkout.workouts.map((workoutName) => {
              const currentProgressionNumber = progressions[workoutName] || 1;
              const totalProgressions = lookup[workoutName].progression;
              const progression =
                totalProgressions[currentProgressionNumber - 1 || 0];
              return {
                workoutName,
                progression,
                progressionNumber: currentProgressionNumber,
                progressionMax: totalProgressions.length,
              };
            })
          : [],
      [todaysWorkout, progressions]
    );
  
  return { dow, setDow, progressions, updateProgression, todaysWorkoutRoutine }
}