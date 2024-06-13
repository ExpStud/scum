import { FC, HTMLAttributes } from "react";
import { TwitterIcon, DiscordIcon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showExchange?: boolean;
}
const IconBar: FC<Props> = (props: Props) => {
  const { showExchange = true, className } = props;
  return (
    <div className={`flex gap-4 ${className}`}>
      <TwitterIcon url={"https://x.com/SCUMSOL"} />
      <DiscordIcon url={"https://discord.com/invite/scumsol"} />
    </div>
  );
};

export default IconBar;
