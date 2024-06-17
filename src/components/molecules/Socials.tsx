import { FC } from "react";
import { IconBar } from "@components";

const Socials: FC = () => {
  return (
    <div className="absolute outer-left-spacing bottom-[140px] hidden xl:flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <a
          href="https://exchange.art/scum/on-sale"
          target="_blank"
          rel="noreferrer"
          className="opacity-40 hover-opacity-75 text-secondary transition-200 "
        >
          Exchange.art ↗
        </a>
        <a
          href="https://allintime.xyz/"
          target="_blank"
          rel="noreferrer"
          className="opacity-40 hover-opacity-75 text-secondary transition-200"
        >
          All In Time ↗
        </a>
      </div>

      <IconBar />
    </div>
  );
};

export default Socials;
