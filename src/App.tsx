import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { excercises, Excercise, DAYS } from "./excercises";
import { useStatePersist as useState } from "use-state-persist";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import Workout from "./Workout";
import { Toolbar } from "primereact/toolbar";
import { range } from "lodash";

// import "primereact/resources/themes/saga-blue/theme.css";
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
  const lookup = excercises.reduce<{ [key: string]: Excercise }>(
    (acc, curr) => {
      acc[curr.name] = curr;
      return acc;
    },
    {}
  );
  const todaysWorkout = DAYS.find((d) => d.name === dow);

  return (
    <div className="App">
      <Toolbar
        left={() => (
          <Dropdown
            optionLabel="name"
            optionValue="name"
            value={dow}
            options={DAYS}
            onChange={(e) => setDow(e.value)}
            placeholder="DOW"
          />
        )}
        right={() => (
          <Button
            type="button"
            icon="pi pi-ellipsis-v"
            onClick={(e) => {
              if (op && op.current) {
                op.current.toggle(e);
              }
            }}
          />
        )}
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
                onChange={(e) => {
                  console.log(e.value);
                  setProgressions({
                    ...progressions,
                    [props.rowData.name]: e.value
                  });
                }}
              />
            )}
            header="Progression"
          ></Column>
        </DataTable>
      </OverlayPanel>

      <div className="p-grid p-mt-2">
        {todaysWorkout &&
          todaysWorkout.workouts.map((w) => (
            <div className="p-col-6" key={w}>
              <Workout
                base={w}
                progression={lookup[w].progression[progressions[w] - 1 || 0]}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
