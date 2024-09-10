import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsBranding: FC<Props> = ({ ...divProps }) => {
  return (
    <div
      className="flex flex-col md:flex-row gap-5 md:justify-between"
      key="Branding"
    >
      <div className="flex flex-col gap-5 max-w-[441px]">
        <p className="text-scum-black/70 text-[15px] uppercase">
          October 2023 - September 2024
        </p>
        <p className="text-scum-black text-xl lg:text-2xl font-forma-regular leading-8">
          A look into the work done to refresh the Cyber Frogs branding and
          social presence.
        </p>
        <p className="text-scum-black text-xl lg:text-2xl font-forma-regular leading-8">
          By Scum, Shack and Toddy
        </p>
      </div>
    </div>
  );
};

export default CyberFrogsBranding;
