import React from "react";

interface ChildProps {
  color: string;
}

export function Child({ color }: ChildProps): JSX.Element | null {
  return <div>{color}</div>;
}

// Child1 cannot access React Component Properties.
export const Child1 = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

//Child2 Can
export const Child2: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
