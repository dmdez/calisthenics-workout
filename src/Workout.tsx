import * as React from "react";
import { ExcerciseProgression } from "./excercises";
import { Galleria } from "primereact/galleria";
import { Card } from "primereact/card";

type Props = {
  progression: ExcerciseProgression;
  base: string;
};

export default function Workout({ progression, base }: Props) {
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
      title={progression.name}
      subTitle={base}
    >
      <div className="p-grid">
        <div className="p-col-6">
          <div className="p-text-bold p-mb-2">{progression.reps}</div>
          <div className="p-text-light">Reps</div>
        </div>
        <div className="p-col-6">
          <div className="p-text-bold p-mb-2">{progression.sets}</div>
          <div className="p-text-light">Sets</div>
        </div>
      </div>

      {/* {progression.images.map((src) => {
        return <img src={src} alt={progression.name} width={150} />;
      })} */}
    </Card>
  );
}
