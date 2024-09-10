import React from "react";
import { ToggleItem } from "@components";

type ToggleProps = {
  labels: string[];
  selected: number;
  setSelected: (index: number) => void;
};

const Toggle: React.FC<ToggleProps> = ({ labels, selected, setSelected }) => {
  return (
    <div className="flex w-full border-b border-scum-beige-600/40 lg:pt-5 lg:mb-20">
      {labels.map((label, index) => (
        <ToggleItem
          key={index}
          label={label}
          selected={selected === index}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  );
};

export default Toggle;
