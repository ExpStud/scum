import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsArt: FC<Props> = ({ ...divProps }) => {
  return (
    <div className="" key="Art">
      hello there - art
    </div>
  );
};

export default CyberFrogsArt;
