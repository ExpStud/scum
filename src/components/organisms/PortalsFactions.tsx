import React, { FC, HTMLAttributes } from "react";
import { FactionBlock, SlimesStudioToggleLayout } from "@components";
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
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/f1.jpg`}
        width={760}
        height={554}
        alt="Factions"
      />
      {/* explorer */}
      <h4 className="mt-10 uppercase">explorer</h4>
      <FactionBlock
        header="Explorer"
        factionLogo={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e-logo.png`}
        factionLogoSm={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e-logo-sm.png`}
        characteristics="Resourceful / adventurous / curious"
        attributes="Explorers are the civilian class, a mixture of hand me downs from the faction leaders, work clothes and future fashion."
        factionCharacters={[
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e1.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e2.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e3.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e4.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e5.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e6.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e7.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/e8.png`,
        ]}
      />
      {/* Collector */}
      <h4 className="mt-10 uppercase">Collector</h4>
      <FactionBlock
        header="Collector"
        factionLogo={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c-logo.png`}
        factionLogoSm={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c-logo-sm.png`}
        characteristics="Nurturing / curious / inventive"
        attributes="Leaf-patterns / embedded solar panels / Breathable mesh / durable materials / embroidery / apron with multi-pocket design / leather / canvas / Helmet with built-in oxygen supply / utilitarian / Mechanic headlamp / jackets / tools / Poncho / gardening / outdoor use / hydration reservoir / Safety glasses with integrated heads-up display / advanced tech"
        factionCharacters={[
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c1.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c2.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c3.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c4.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c5.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c6.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c7.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/c8.png`,
        ]}
      />
      {/* strider */}
      <h4 className="mt-10 uppercase">strider</h4>
      <FactionBlock
        header="Strider"
        factionLogo={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s-logo.png`}
        factionLogoSm={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s-logo-sm.png`}
        characteristics="Brave / loyal / resilient"
        attributes="Helmet / armor / tactical vest / Camouflage / tech and desert / poncho / Tactical headlamp / exploration / techwear / Helmet with oxygen tube / harsh environment resilient / stealth / flexible / stylish / Ballistic jacket / lights built in / swat / kevlar / stylish / Exploration jumpsuit with reinforced padding for extra durability / futuristic"
        factionCharacters={[
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s1.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s2.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s3.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s4.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s5.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s6.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s7.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/s8.png`,
        ]}
      />
      {/* operator */}
      <h4 className="mt-10 uppercase">operator</h4>
      <FactionBlock
        header="Operator"
        factionLogo={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o-logo.png`}
        factionLogoSm={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o-logo-sm.png`}
        characteristics="Visionary / creative / precise"
        attributes="Futuristic, elegant technology / Neural interface / Cybernetic - Advanced Tech / Tailored suit with geometric patterns for a professional yet stylish look / Flowing cloak for an air of mystery and grandeur / Renaissance-inspired / historical elegance / Lab coat / light / laser glasses / Monocles"
        factionCharacters={[
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o1.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o2.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o3.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o4.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o5.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o6.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o7.png`,
          `${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/factions/o8.png`,
        ]}
      />
    </SlimesStudioToggleLayout>
  );
};

export default PortalsFactions;
