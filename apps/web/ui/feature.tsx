import * as React from "react";

export interface IFeatureProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Feature({ title, children, id }: IFeatureProps) {
  return (
    <div id={id} className="mb-8">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
