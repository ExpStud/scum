import { AssetOption, Collection } from "@types";
import Image from "next/image";
import { FC } from "react";
import { formatSrc } from "@utils";

interface SgiProps {
  index: number;
  slime: Collection;
  option: AssetOption;
  isSelected: boolean;
  setSelected: (option: AssetOption) => void;
  isTinyDenise?: boolean;
}
const SlimeGraphicsItem: FC<SgiProps> = (props: SgiProps) => {
  const { index, slime, option, isSelected, setSelected, isTinyDenise } = props;

  const parentClass =
    index === 0
      ? "rounded-tl-[10px]"
      : index === 1
      ? "rounded-tr-[10px]"
      : index === 2
      ? "rounded-bl-[10px]"
      : index === 3
      ? "rounded-br-[10px]"
      : "";

  return (
    <div
      className={`col-centered w-full gap-2 sm:min-w-[220px] xl:min-w-[100px] 1690:w-[240px] h-[135px] max-w-[300px] cursor-pointer border-[#79C7AD] transition-200 ${parentClass} ${
        index < 2 ? "border-b" : ""
      } ${index % 2 === 0 ? "border-r" : ""} ${
        isSelected ? "bg-[#79C7AD]/50" : ""
      }`}
      onClick={() => setSelected(option)}
    >
      <Image
        src={formatSrc(option, slime, false)}
        width={option.width}
        height={option.height}
        alt={option.name}
        className={option.className}
      />
      <p className={`text-sm transition-200 ${isSelected ? "" : "opacity-50"}`}>
        {option.name}
      </p>
    </div>
  );
};

export default SlimeGraphicsItem;
