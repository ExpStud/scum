import { useRouter } from "next/router";
import { HTMLAttributes, FC, use } from "react";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  selected: boolean;
}
const MaquinaToggleItem: FC<ToggleProps> = (props: ToggleProps) => {
  const { label, selected, ...componentProps } = props;

  const router = useRouter();

  const colors = {
    selected:
      router.pathname === "/maquina"
        ? "text-scum-beige-600"
        : "text-scum-black",
    unselected:
      router.pathname === "/maquina"
        ? "text-scum-beige-600/60 hover:text-scum-beige-600/80"
        : "text-scum-black/60 hover:text-scum-black/80",
    tab: router.pathname === "/maquina" ? "bg-scum-beige-600" : "bg-scum-black",
  };

  const width =
    router.pathname === "/maquina"
      ? "w-1/2 sm:w-[240px]"
      : router.pathname.includes("/slimes/")
      ? "w-1/2 sm:w-[280px]"
      : "w-1/3 sm:w-[172px]";

  return (
    <div
      className={`relative col-centered pb-4 text-lg lg:text-xl ${width} whitespace-nowrap uppercase transition-200 cursor-pointer ${
        selected ? colors.selected : colors.unselected
      }`}
      {...componentProps}
    >
      <p>{label}</p>
      <div
        className={`absolute bottom-0 inset-x-0 transition-300 ${colors.tab} ${
          selected ? "h-1.5" : "h-0"
        }`}
      />
    </div>
  );
};

export default MaquinaToggleItem;
