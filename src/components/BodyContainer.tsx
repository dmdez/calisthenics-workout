import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function BodyContainer({ children }: Props) {
  return <div style={{ maxWidth: 720, margin: "0 auto" }}>{children}</div>;
}
