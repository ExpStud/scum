import { HTMLAttributes, FC } from "react";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
  isSlimes?: boolean;
}

const WorldToggleItem: FC<ToggleProps> = (props: ToggleProps) => {
  const { selected, children, isSlimes, ...componentProps } = props;

  const selectedColor = isSlimes
    ? "text-scum-black bg-white"
    : "text-scum-black bg-scum-beige-600";
  const unselectedColor = isSlimes ? "text-white" : "text-scum-beige-600/60";

  const font = isSlimes
    ? "text-xs sm:text-sm md:text-base "
    : "text-[10px] sm:text-xs md:text-sm ";

  return (
    <div
      className={`w-1/2 col-centered cursor-pointer uppercase rounded-[22px] transition-200 !tracking-widest ${font} ${
        selected ? selectedColor : unselectedColor
      }`}
      {...componentProps}
    >
      <p className="mt-[3px]">{children}</p>
    </div>
  );
};

export default WorldToggleItem;
