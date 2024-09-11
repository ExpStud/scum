import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";
import Image from "next/image";

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
      <div>
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/1-logo.svg`}
          width={760}
          height={420}
          alt="Logo"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/2-logos.svg`}
          width={760}
          height={140}
          alt="Logos"
        />
      </div>
      <div className="flex gap-3">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/3-upgrade.png`}
          width={375}
          height={428.6}
          alt="Upgrade"
          className="w-1/2"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/4-clan.png`}
          width={375}
          height={428.6}
          alt="Clan"
          className="w-1/2"
        />
      </div>
      <div className="flex">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/5-green.svg`}
          width={190}
          height={360}
          alt="Green"
          className="w-1/4"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/6-orange.svg`}
          width={190}
          height={360}
          alt="Orange"
          className="w-1/4"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/7-yellow.svg`}
          width={190}
          height={360}
          alt="Yellow"
          className="w-1/4"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/8-white.svg`}
          width={190}
          height={360}
          alt="White"
          className="w-1/4"
        />
      </div>
      <div className="flex">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/9-white.svg`}
          width={190}
          height={360}
          alt="White"
          className="w-1/4"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/10-green.svg`}
          width={190}
          height={360}
          alt="Green"
          className="w-1/4"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/11-orange.svg`}
          width={190}
          height={360}
          alt="Orange"
          className="w-1/4"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/12-green.svg`}
          width={190}
          height={360}
          alt="Green"
          className="w-1/4"
        />
      </div>

      <div className="flex gap-3">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/13-hammer.jpg`}
          width={375}
          height={375}
          alt="hammer"
          className="w-1/2"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/14-hammer.jpg`}
          width={375}
          height={375}
          alt="hammer"
          className="w-1/2"
        />
      </div>

      <div className="flex gap-3">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/15-chest.jpg`}
          width={375}
          height={375}
          alt="chest"
          className="w-1/2"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/16-squad.jpg`}
          width={375}
          height={375}
          alt="squad"
          className="w-1/2"
        />
      </div>

      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/branding/17-spaces.svg`}
        width={760}
        height={476}
        alt="spaces"
      />
    </SlimesStudioToggleLayout>
  );
};

export default CyberFrogsBranding;
