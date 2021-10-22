import * as React from "react";
import { Footer } from "./components/Footer";
import { WorkoutRoutine } from "./components/WorkoutRoutine";
import { Header } from "./components/Header";
import { useAppState } from "./lib/useAppState";
import BrandingProvider from "./BrandingProvider";
import { Box } from "@mui/system";
import { Home } from "./components/Home";
import { Container } from "@mui/material";

export default function App() {
  const { dow, setDow, updateProgression, todaysWorkoutRoutine } =
    useAppState();
  const isHomeTab = dow === "home";

  return (
    <BrandingProvider>
      <Header dow={dow} onTabChange={setDow} />
      <Container fixed>
        <Box py={2}>
          {isHomeTab ? (
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
      </Container>
    </BrandingProvider>
  );
}
