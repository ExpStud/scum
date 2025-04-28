import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PortalsFactions: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "Settling on the factions took time. Each iteration uncovering things we liked and disliked about the design.",
      ]}
    >
      {/* explorer */}
      <h4 className="mb-5 uppercase">explorer</h4>
      {/* Collector */}
      <h4 className="mt-10 mb-5 uppercase">Collector</h4>
      {/* strider */}
      <h4 className="mt-10 mb-5 uppercase">strider</h4>
      {/* operator */}
      <h4 className="mt-10 mb-5 uppercase">operator</h4>
    </SlimesStudioToggleLayout>
  );
};

export default PortalsFactions;
