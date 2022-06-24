import { Header } from "./components/Header";
import { useAppState } from "./lib/useAppState";
import BrandingProvider from "./BrandingProvider";
import { Home } from "./components/Home";
import { Slider } from "./components/Slider";
import { DAYS } from "./lib/excercises";
import { styled } from "@mui/material";

const DayContent = styled("div")`
  position: relative;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export default function App() {
  const { dow, setDow, handleStart, todaysWorkouts } = useAppState();
  const isHomeTab = dow === "home";

  return (
    <BrandingProvider>
      <Header dow={dow} onTabChange={setDow} />
      <div style={{ flex: 1 }}>
        {isHomeTab ? (
          <Home onStart={handleStart} />
        ) : (
          <>
            {DAYS.map((day) => (
              <DayContent
                key={day.name}
                sx={{
                  display: day.name === dow ? "block" : "none",
                }}
              >
                <Slider key={dow} workouts={todaysWorkouts} />
              </DayContent>
            ))}
          </>
        )}
      </div>
    </BrandingProvider>
  );
}
