import * as React from "react";
import { ExcerciseProgression } from "./excercises";
import { Galleria } from "primereact/galleria";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

type Props = {
  progression: ExcerciseProgression;
  progressionNumber: number;
  progressionMax: number;
  base: string;
  onProgressionChange: (value: number) => void;
};

export default function Workout({
  progression,
  base,
  progressionNumber,
  progressionMax,
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
          <div className="p-d-flex p-buttonset">
            <Button
              icon="pi pi-minus"
              className="p-button-outlined"
              disabled={progressionNumber <= 1}
              onClick={() => onProgressionChange(progressionNumber - 1)}
            />
            <Button
              label={`${progressionNumber}`}
              readOnly
              className="p-button-secondary p-button-outlined"
            />
            <Button
              icon="pi pi-plus"
              className="p-button-outlined"
              disabled={progressionNumber >= progressionMax}
              onClick={() => onProgressionChange(progressionNumber + 1)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
