import { FC, HTMLAttributes } from "react";
import { IconBar } from "@components";

const Socials: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <div className="flex flex-col gap-1 pb-6">
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
