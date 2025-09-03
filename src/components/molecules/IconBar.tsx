import { FC, HTMLAttributes } from "react";
import { TwitterIcon, DiscordIcon } from "@components";
import InstagramIcon from "../@icons/InstagramIcon";

interface Props extends HTMLAttributes<HTMLDivElement> {}
const IconBar: FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div className={`flex flex-col xl:flex-row gap-4 ${className}`}>
      <TwitterIcon url={"https://x.com/SCUMSOL"} />
      <InstagramIcon url={"https://www.instagram.com/scum.sol/"} />
    </div>
  );
};

export default IconBar;
