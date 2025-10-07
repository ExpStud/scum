import { FC, HTMLAttributes } from "react";
import { TwitterIcon, DiscordIcon } from "@components";
import InstagramIcon from "../@icons/InstagramIcon";
import { useRouter } from "next/router";

interface Props extends HTMLAttributes<HTMLDivElement> {}
const IconBar: FC<Props> = (props: Props) => {
  const { className } = props;

  const router = useRouter();

  const iconColor =
    router.pathname === "/maquina"
      ? "#C2B09A" // beige tone
      : router.pathname === "/axolotl"
      ? "#E6D9C8" // lighter beige
      : "#000000"; // default black

  return (
    <div className={`flex flex-col xl:flex-row gap-4 ${className}`}>
      <TwitterIcon url="https://x.com/SCUMSOL" color={iconColor} />
      <InstagramIcon
        url="https://www.instagram.com/scum.sol/"
        color={iconColor}
      />
    </div>
  );
};

export default IconBar;
