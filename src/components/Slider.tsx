import { styled } from "@mui/system";
import { findIndex } from "lodash";
import React from "react";
import { useStatePersist } from "use-state-persist";
import { ExcerciseProgression } from "../lib/excercises";
import { useSlider } from "../lib/useSlider";
import { SliderItem } from "./SliderItem";

const Root = styled("div")`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Container = styled("div")`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  // scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled("div")`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
`;

const Wrapper = styled("div")`
  position: relative;
  height: 100%;
  margin: 10px 10px 0;
  &:last-child {
    margin-bottom: 10px;
  }
`;

const Nav = styled("div")`
  position: absolute;
  bottom: 1px;
  left: 1px;
  right: 1px;
  display: table;
  justify-content: center;
  width: 100%;
  table-layout: fixed;
  border-spacing: 1px;
`;

const NavItem = styled("a")`
  height: 26px;
  display: table-cell;
  transition: all 0.3s;
  font-size: 11px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export function Slider({
  workouts,
}: {
  workouts: {
    workoutName: string;
    progressions: ExcerciseProgression[];
  }[];
}) {
  return (
    <Root>
      {workouts.map((workout, i) => (
        <SliderWorkout key={i} {...workout} />
      ))}
    </Root>
  );
}

function SliderWorkout({
  workoutName,
  progressions,
}: {
  workoutName: string;
  progressions: ExcerciseProgression[];
}) {
  const [progression, setProgression] = useStatePersist<number>(
    `@${workoutName}`,
    0
  );
  const selectedName = progressions[progression]?.name;
  const { setRef, scrollTo } = useSlider({
    selectedId: selectedName,
    onInView: (id) => {
      const number = findIndex(progressions, (o) => o.name == id);
      setProgression(number);
    },
  });
  return (
    <Wrapper>
      <Container>
        {progressions.map((t, i) => (
          <Item key={i} ref={setRef(t.name)}>
            <SliderItem workoutName={workoutName} progression={t} />
          </Item>
        ))}
      </Container>
      <Nav>
        {progressions.map((t, i) => (
          <NavItem
            onClick={() => scrollTo(t.name)}
            key={i}
            sx={{
              color: selectedName === t.name ? "#fff" : "#eee",
              backgroundColor:
                selectedName === t.name
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(0, 0, 0, 0.3)",
            }}
          >
            {i + 1}
          </NavItem>
        ))}
      </Nav>
    </Wrapper>
  );
}
