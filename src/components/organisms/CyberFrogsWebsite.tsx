import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const CyberFrogsWebsite: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "Complete overhaul of the Cyber Frogs website to be in line with their new branding and character artwork.",
        "By Sandbox Studio",
      ]}
    >
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/website/1-landing.jpg`}
        width={760}
        height={505}
        alt="spaces"
      />
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/website/2-dashboard.png`}
        width={760}
        height={558}
        alt="spaces"
      />
      <div className="flex gap-3">
        <div className="w-1/2">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/website/3-raffle.png`}
            width={375}
            height={505}
            alt="spaces"
          />
        </div>
        <div className="w-1/2">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/website/4-explorer.png`}
            width={375}
            height={505}
            alt="spaces"
          />
        </div>
      </div>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/website/5-upgrade.png`}
        width={760}
        height={463}
        alt="spaces"
      />
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/website/6-raffle-details.png`}
        width={760}
        height={475}
        alt="spaces"
      />
    </SlimesStudioToggleLayout>
  );
};

export default CyberFrogsWebsite;
