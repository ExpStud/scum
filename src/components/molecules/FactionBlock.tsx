import React, { FC } from "react";
import Image from "next/image";

interface FactionBlockProps {
  header: string;
  factionLogo: string;
  characteristics: string;
  attributes: string;
  factionCharacters: string[]; // array of image URLs
}

const FactionBlock: FC<FactionBlockProps> = ({
  header,
  factionLogo,
  characteristics,
  attributes,
  factionCharacters,
}) => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      {/* <h4 className="mb-2 uppercase text-xl font-semibold">{header}</h4> */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src={factionLogo}
            alt={`${header} Logo`}
            width={190}
            height={323}
            className="rounded-md object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 max-w-[435px] self-center 2xl:ml-4 1860:pl-10 ">
          <div className="mb-6">
            <h5 className="text-[rgba(44,37,36,0.70)] text-sm tracking-wide uppercase mb-1">
              Characteristics
            </h5>
            <p className="text-base font-forma-medium">{characteristics}</p>
          </div>

          <div className="mb-6">
            <h5 className="text-[rgba(44,37,36,0.70)] text-sm tracking-wide uppercase mb-1">
              Character Attributes / Materials
            </h5>
            <p className="text-base font-forma-medium">{attributes}</p>
          </div>
        </div>
      </div>

      {/* Character images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
        {factionCharacters.map((characterUrl, index) => (
          <div
            key={index}
            className="relative w-full aspect-square max-w-[190px]"
          >
            <Image
              src={characterUrl}
              alt={`Character ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactionBlock;
