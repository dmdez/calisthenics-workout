import { useState } from "react";
import { useStatePersist } from "use-state-persist";
import { DAYS, Excercise, excercises } from "./excercises";

export function useAppState() {
  const defaultDow = DAYS[new Date().getDay()].name;
  const [hasVisited, setHasVisited] = useStatePersist<boolean>(
    "hasVisited",
    false
  );
  const [dow, setDow] = useState<string>(hasVisited ? defaultDow : "home");
  const lookup = excercises.reduce<{ [key: string]: Excercise }>(
    (acc, curr) => {
      acc[curr.name] = curr;
      return acc;
    },
    {}
  );
  const todaysWorkout = DAYS.find((d) => d.name === dow);

  function handleStart() {
    setDow(defaultDow);
    setHasVisited(true);
  }
  
  return { 
    dow, 
    handleStart, 
    todaysWorkouts: (todaysWorkout?.workouts || []).map((workoutName) => ({
      workoutName,
      progressions: lookup[workoutName].progression
    })), 
    lookup, 
    setDow: (day: string) => {
      setDow(day)
      setHasVisited(true)
    }, 
    hasVisited 
  }
}