import * as React from "react";
import { ExcerciseProgression } from "./excercises";
import { Galleria } from "primereact/galleria";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";

type Props = {
  progression: ExcerciseProgression;
  progressionNumber: number;
  base: string;
  onProgressionChange: (value: number) => void;
};

export default function Workout({
  progression,
  base,
  progressionNumber,
  onProgressionChange
}: Props) {
  return (
    <Card
      header={() => (
        <Galleria
          autoPlay={true}
          circular={true}
          transitionInterval={3000}
          showThumbnails={false}
          item={(s: string) => (
            <img src={s} alt="" style={{ width: "100%", display: "block" }} />
          )}
          thumbnail={(s: string) => (
            <img src={s} alt="" style={{ width: "100%", display: "block" }} />
          )}
          value={progression.images}
        />
      )}
      subTitle={() => (
        <React.Fragment>
          <small>
            <span style={{ opacity: 0.6 }}>{base}</span> / {progression.name}
          </small>
        </React.Fragment>
      )}
    >
      <div className="p-grid">
        <div className="p-col-6 p-sm-3">
          <div className="p-text-bold p-mb-2">{progression.reps}</div>
          <div className="p-text-light">Reps</div>
        </div>
        <div className="p-col-6 p-sm-3">
          <div className="p-text-bold p-mb-2">{progression.sets}</div>
          <div className="p-text-light">Sets</div>
        </div>
        <div className="p-sm-6">
          <div className="p-text-bold p-mb-2">Progression</div>
          <InputNumber
            readOnly
            value={progressionNumber}
            onValueChange={(e) => onProgressionChange(e.value)}
            mode="decimal"
            showButtons
            buttonLayout="horizontal"
            inputStyle={{ width: "2.5em" }}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            min={1}
            max={10}
          />
        </div>
      </div>
    </Card>
  );
}
