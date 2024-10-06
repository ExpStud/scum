import { FC, HTMLAttributes } from "react";
import { TwitterIcon, DiscordIcon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}
const IconBar: FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div className={`flex gap-4 ${className}`}>
      <TwitterIcon url={"https://x.com/SCUMSOL"} />
      <DiscordIcon url={"https://discord.com/invite/scumdotsol"} />
    </div>
  );
};

export default IconBar;
