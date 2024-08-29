import { FC, HTMLAttributes } from "react";
import { IconBar } from "@components";

const Socials: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <div className="absolute -left-40 -top-5 -rotate-90 text-secondary text-sm font-normal font-secondary leading-[18px]">
        el arte es un exprecíon de vida,
        <br />
        no lo cambias.
      </div>
      <div className="flex flex-col gap-1 pb-6">
        <a
          href="https://exchange.art/scum/on-sale"
          target="_blank"
          rel="noreferrer"
          className="opacity-40 hover-opacity-75 text-secondary transition-200 "
        >
          Exchange.art <span className="font-sans">↗</span>
        </a>
        <a
          href="https://allintime.xyz/"
          target="_blank"
          rel="noreferrer"
          className="opacity-40 hover-opacity-75 text-secondary transition-200"
        >
          Shop All In Time <span className="font-sans">↗</span>
        </a>
      </div>

      <IconBar />
    </div>
  );
};

export default Socials;
