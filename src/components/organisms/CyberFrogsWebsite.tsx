import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsWebsite: FC<Props> = ({ ...divProps }) => {
  return (
    <div className="" key="Website">
      hello there - website
    </div>
  );
};

export default CyberFrogsWebsite;
