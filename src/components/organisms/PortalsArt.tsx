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
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/art/a1.png`}
        width={760}
        height={679}
        alt="Character Explorations 1"
      />
      {/* Character Explorations */}
      <h4 className="mt-10 mb-5 uppercase">Character Explorations</h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/art/a2.png`}
        width={760}
        height={570}
        alt="Character Explorations 2"
      />
      {/* Character Sheet */}
      <h4 className="mt-10 mb-5 uppercase">Character Sheet</h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/art/a3.png`}
        width={760}
        height={755}
        alt="Character Sheet"
      />
      {/* Initial Explorations + Moodboard */}
      <h4 className="mt-10 mb-5 uppercase">Initial Explorations + Moodboard</h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/art/a4.png`}
        width={760}
        height={789}
        alt="Initial Explorations + Moodboard"
      />
      {/* Before / after */}
      <h4 className="mt-10 mb-5 uppercase">Before / after</h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/art/a5.png`}
        width={760}
        height={400}
        alt="Before After"
      />
    </SlimesStudioToggleLayout>
  );
};

export default PortalsArt;
