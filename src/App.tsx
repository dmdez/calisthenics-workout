import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { excercises, Excercise, DAYS } from "./excercises";
import { useStatePersist as useState } from "use-state-persist";
import { TabMenu } from "primereact/tabmenu";
import { OverlayPanel } from "primereact/overlaypanel";
import Workout from "./Workout";
import { range } from "lodash";

import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

type ProgressionState = {
  [key: string]: number;
};

export default function App() {
  const op = React.useRef<OverlayPanel>(null);
  const [dow, setDow] = React.useState(DAYS[new Date().getDay()].name);
  const [progressions, setProgressions] = useState<ProgressionState>(
    "progressions",
    {}
  );
  const daysModel = DAYS.map(({ name }) => ({ label: name }));
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
      [name]: value
    });

  return (
    <div className="App" style={{ maxWidth: 720, margin: "0 auto" }}>
      <TabMenu
        model={daysModel}
        activeItem={daysModel.find((d) => d.label === dow)}
        onTabChange={(e) => setDow(e.value.label)}
      />

      <OverlayPanel ref={op}>
        <DataTable value={excercises} editMode="cell">
          <Column field="name" header="Excercise"></Column>
          <Column
            field="progression"
            body={(rowData: Excercise) => {
              return progressions[rowData.name] || 1;
            }}
            editor={(props) => (
              <Dropdown
                value={progressions[props.rowData.name] || 1}
                options={range(props.rowData.progression.length).map(
                  (x: number) => x + 1
                )}
                onChange={(e) => updateProgression(props.rowData.name, e.value)}
              />
            )}
            header="Progression"
          ></Column>
        </DataTable>
      </OverlayPanel>

      <div className="p-grid p-mt-2">
        {todaysWorkout &&
          todaysWorkout.workouts.map((workoutName) => {
            const currentProgressionNumber = progressions[workoutName] || 1;
            const totalProgressions = lookup[workoutName].progression;
            const progression =
              totalProgressions[currentProgressionNumber - 1 || 0];
            return (
              <div className="p-col-6" key={workoutName}>
                <Workout
                  progressionMax={totalProgressions.length}
                  onProgressionChange={(value) =>
                    updateProgression(workoutName, value)
                  }
                  base={workoutName}
                  progressionNumber={currentProgressionNumber}
                  progression={progression}
                />
              </div>
            );
          })}
      </div>
      <div className="p-mt-2 p-mb-6 p-component">
        <div className="p-text-italic">
          Source:{" "}
          <a href="https://www.hybridcalisthenics.com/routine">
            Hybrid Calisthenics
          </a>
        </div>
      </div>
    </div>
  );
}
