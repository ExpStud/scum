import { HTMLAttributes, FC } from "react";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

const WorldToggleItem: FC<ToggleProps> = (props: ToggleProps) => {
  const { selected, children, ...componentProps } = props;

  return (
    <div
      className={`w-1/2 col-centered cursor-pointer text-[10px] sm:text-xs md:text-sm uppercase rounded-[22px] transition-200 ${
        selected
          ? "text-scum-black bg-scum-beige-600"
          : "text-scum-beige-600/60"
      }`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default WorldToggleItem;
