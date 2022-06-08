import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

export function Child({ color, onClick }: ChildProps): JSX.Element | null {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

// Child1 cannot access React Component Properties.
export const Child1 = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//Child2 Can
export const Child2: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
