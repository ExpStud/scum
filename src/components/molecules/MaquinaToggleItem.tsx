import { HTMLAttributes, FC } from "react";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  selected: boolean;
}
const MaquinaToggleItem: FC<ToggleProps> = (props: ToggleProps) => {
  const { label, selected, ...componentProps } = props;
  return (
    <div
      className={`relative col-centered pb-4 text-lg lg:text-xl w-1/2 sm:w-[240px] whitespace-nowrap uppercase transition-200 cursor-pointer ${
        selected ? "" : "text-scum-beige-600/60 hover:text-scum-beige-600/80"
      }`}
      {...componentProps}
    >
      <p>{label}</p>
      <div
        className={`absolute bottom-0 inset-x-0 bg-scum-beige-600 transition-300 ${
          selected ? "h-1.5" : "h-0"
        }`}
      />
    </div>
  );
};

export default MaquinaToggleItem;
