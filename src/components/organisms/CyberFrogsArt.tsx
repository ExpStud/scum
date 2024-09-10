import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsArt: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "This was a 1:1 update of the preexisting Cyber Frogs artwork. We created a brand around this character as well as several unique character interpretations. ",
        "Creative Direction: Scum",
        "Artists: Scum, Shack, Toddy",
      ]}
    >
      <></>
    </SlimesStudioToggleLayout>
  );
};

export default CyberFrogsArt;
