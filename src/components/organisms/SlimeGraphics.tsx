import { AssetOption, Collection } from "@types";
import Image from "next/image";
import { FC, useState } from "react";
import { options } from "src/constants";
import { SlimeGraphicsItem } from "@components";

type Props = {
  slime: Collection;
};

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
    <div className="relative flex flex-col gap-5 xl:gap-5 lg:flex-row justify-start w-full px-5 xl:px-0 my-5">
      {/* main image */}
      <div className="relative w-[300px] h-[342px] md:min-w-[450px] xl:w-[300px] md:h-[513px] bg-white rounded-br-[60px] flex items-end">
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
            href={`https://exchange.art/single/${slime.mintAddress}`}
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
      <div className="flex flex-col items-start lg:items-center w-full">
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

export default SlimeGraphics;
