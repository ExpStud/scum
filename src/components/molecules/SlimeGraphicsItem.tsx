import { AssetOption, Collection } from "@types";
import Image from "next/image";
import { FC } from "react";

interface SgiProps {
  index: number;
  slime: Collection;
  option: AssetOption;
  isSelected: boolean;
  setSelected: (option: AssetOption) => void;
}
const SlimeGraphicsItem: FC<SgiProps> = (props: SgiProps) => {
  const { index, slime, option, isSelected, setSelected } = props;

  return (
    <div
      className={`col-centered gap-2 sm:min-w-[220px] xl:min-w-[100px] 1690:w-[240px] h-[135px] cursor-pointer border-[#79C7AD] transition-200 ${
        index < 4 ? "border-b" : ""
      } ${index % 2 === 0 ? "border-r" : ""} ${
        isSelected ? "bg-[#79C7AD]/50" : ""
      }`}
      onClick={() => setSelected(option)}
    >
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/${option.lowResPath}/${slime.tag}.${option.extension}`}
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
