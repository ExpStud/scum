import { Collection } from "@types";
import Image from "next/image";
import { FC, useState } from "react";

type Props = {
  slime: Collection;
};

type AssetOption = {
  name: string;
  lowResPath: string;
  highResPath: string;
  width: number;
  height: number;
  className?: string;
  extension: string;
};
const options: AssetOption[] = [
  {
    name: "Original Artwork",
    lowResPath: "images/slimes/low-res",
    highResPath: "images/slimes/high-res",
    width: 64,
    height: 64,
    className: "rounded-lg border border-scum-black/30",
    extension: "jpg",
  },
  {
    name: "PFP",
    lowResPath: "images/wallpapers/pfp-crop",
    highResPath: "images/wallpapers/pfp-crop",
    width: 64,
    height: 64,
    className: "rounded-lg border border-scum-black/30",
    extension: "png",
  },
  {
    name: "Desktop Wallpaper",
    lowResPath: "images/wallpapers/desktop-display",
    highResPath: "images/wallpapers/desktop-display",
    width: 132,
    height: 79,
    className: "",
    extension: "png",
  },
  {
    name: "Mobile Wallpaper",
    lowResPath: "images/wallpapers/mobile-display",
    highResPath: "images/wallpapers/mobile-display",
    width: 50,
    height: 83,
    className: "",
    extension: "png",
  },
  {
    name: "X Wallpaper",
    lowResPath: "images/wallpapers/banner",
    highResPath: "images/wallpapers/banner",
    width: 192,
    height: 64,
    className: "scale-75 lg:scale-90 rounded-lg border border-scum-black/30",
    extension: "png",
  },
  {
    name: "X Wallpep",
    lowResPath: "images/wallpapers/banner",
    highResPath: "images/wallpapers/banner",
    width: 192,
    height: 64,
    className: "scale-75 lg:scale-90 rounded-lg border border-scum-black/30",
    extension: "png",
  },
];

const SlimeGraphics: FC<Props> = (props: Props) => {
  const { slime } = props;

  const [selected, setSelected] = useState<AssetOption>(options[0]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.CLOUDFLARE_STORAGE}/${selected.highResPath}/${slime.tag}.${selected.extension}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer"; // This is for security reasons
    link.click();
  };

  return (
    <div className="relative flex flex-col gap-5 xl:gap-0 lg:flex-row justify-start w-full px-5 xl:px-0 my-5">
      {/* main image */}
      <div className="relative w-[300px] h-[342px] md:min-w-[450px] md:h-[513px] bg-white rounded-br-[60px] flex items-end">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/${selected.lowResPath}/${slime.tag}.${selected.extension}`}
          fill
          alt={slime.name}
          className="object-contain px-5 md:px-10 pt-5 md:pt-10 pb-16 md:pb-28"
        />
        <div className="flex justify-between w-full z-10 px-5 md:px-10 pb-2 md:pb-12">
          <button
            className="w-[115px] h-[44px] col-centered rounded-[22px] bg-scum-black-950 text-white scale-90 md:scale-100 "
            onClick={() => handleDownload()}
          >
            Download
          </button>
          <a
            href="https://exchange.art/scum/on-sale"
            target="_blank"
            rel="noreferrer"
            className="opacity-50 hover-opacity-75 row-centered gap-2 scale-75 md:scale-90 lg:scale-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M10.8802 6.93244e-06H1.4443C0.647658 6.93244e-06 0 0.644569 0 1.43679V10.8002C0 10.8002 4.21606e-07 12.2365 1.28249 12.2365H2.58532C3.88727 12.2365 3.87312 10.8218 3.87312 10.8218L3.89566 3.91822L10.8585 3.89523C10.8585 3.89523 12.3028 3.89523 12.3028 2.60522V1.29488C12.3028 -0.0145829 10.8806 6.93244e-06 10.8806 6.93244e-06H10.8802Z"
                fill="#2C2524"
              />
              <path
                d="M7.13659 17.9999H16.5725C17.3691 17.9999 18.0168 17.3554 18.0168 16.5632V7.19977C18.0168 7.19977 18.0168 5.76343 16.7343 5.76343H15.4315C14.1295 5.76343 14.1437 7.1781 14.1437 7.1781L14.1211 14.0817L7.15826 14.1047C7.15826 14.1047 5.71396 14.1047 5.71396 15.3947V16.7051C5.71396 18.0145 7.13615 17.9999 7.13615 17.9999H7.13659Z"
                fill="#2C2524"
              />
            </svg>
            Exchange.art ↗
          </a>
        </div>
      </div>
      {/* image options */}
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-2 border border-[#79C7AD] rounded-[10px] mr-5 xl:mr-0 h-min">
          {options.map((option, i) => (
            <SlimeGraphicsItem
              key={i}
              slime={slime}
              index={i}
              option={option}
              isSelected={selected.name === option.name}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
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
      className={`col-centered gap-2 sm:min-w-[220px] xl:w-[240px] h-[135px] cursor-pointer border-[#79C7AD] transition-200 ${
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

export default SlimeGraphics;
