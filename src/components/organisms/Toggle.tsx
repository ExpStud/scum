import React, { FC, HTMLAttributes } from "react";
import { ToggleItem } from "@components";
import { useRouter } from "next/router";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  labels: string[];
  selected: number;
  setSelected: (index: number) => void;
  isSlimes?: boolean;
}

const Toggle: FC<ToggleProps> = ({
  labels,
  selected,
  setSelected,

  ...divProps
}) => {
  const router = useRouter();

  const borderColor =
    router.pathname === "/maquina"
      ? "border-scum-beige-600/40"
      : "border-scum-black/20";

  return (
    <div
      className={`flex w-full border-b ${borderColor} lg:pt-5 lg:mb-20 ${
        divProps.className ?? ""
      }`}
    >
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
