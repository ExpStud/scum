import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PortalsArt: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "Nearly 15,000 NFT's, converted from Robots & Digital Cards. Male & Female represenation.",
        "Creative Direction: Scum",
        "Artists: Scum, Shack, Toddy",
      ]}
    >
      {/* Character Explorations */}
      <h4 className="mb-5 uppercase">Character Explorations</h4>
      {/* Character Explorations */}
      <h4 className="mt-10 mb-5 uppercase">Character Explorations</h4>
      {/* Character Sheet */}
      <h4 className="mt-10 mb-5 uppercase">Character Sheet</h4>
      {/* Before / after */}
      <h4 className="mt-10 mb-5 uppercase">Before / after</h4>
    </SlimesStudioToggleLayout>
  );
};

export default PortalsArt;
