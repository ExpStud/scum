import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsBranding: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "A look into the work done to refresh the Cyber Frogs branding and social presence.",
        "By Scum, Shack and Toddy",
      ]}
    >
      <></>
    </SlimesStudioToggleLayout>
  );
};

export default CyberFrogsBranding;
