import * as React from "react";
import { Footer } from "./components/Footer";
import { WorkoutRoutine } from "./components/WorkoutRoutine";
import { Header } from "./components/Header";
import { useAppState } from "./lib/useAppState";
import BrandingProvider from "./BrandingProvider";
import { Box } from "@mui/system";
import { BodyContainer } from "./components/BodyContainer";
import { Home } from "./components/Home";

export default function App() {
  const { dow, setDow, updateProgression, todaysWorkoutRoutine } =
    useAppState();

  return (
    <BrandingProvider>
      <Header dow={dow} onTabChange={setDow} />
      <BodyContainer>
        <Box p={1}>
          {dow === "home" ? (
            <Home />
          ) : (
            <WorkoutRoutine
              routine={todaysWorkoutRoutine}
              onProgressionChange={updateProgression}
            />
          )}
        </Box>
        <Box p={1}>
          <Footer />
        </Box>
      </BodyContainer>
    </BrandingProvider>
  );
}
