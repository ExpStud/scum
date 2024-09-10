import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsWebsite: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "Complete overhaul of the Cyber Frogs website to be in line with their new branding and character artwork.",
      ]}
    >
      <></>
    </SlimesStudioToggleLayout>
  );
};

export default CyberFrogsWebsite;
