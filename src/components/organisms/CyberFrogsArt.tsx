import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";
import Image from "next/image";

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
      {/* frogs */}
      <h4 className="mb-5 uppercase">Cyber Frogs</h4>
      <div className="flex justify-between gap-2 md:gap-3">
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/1-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/2-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/3-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/4-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
      </div>
      <div className="flex justify-between gap-2 md:gap-3">
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/5-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/6-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/7-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/8-frog.png`}
            width={182.5}
            height={182.5}
            alt="Frog"
          />
        </div>
      </div>
      {/* skins */}
      <h4 className="mt-10 mb-5 uppercase">skins</h4>
      <div className="flex justify-between gap-0 -mt-12">
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/9-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/10-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/11-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/12-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>

        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/13-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/14-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/15-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
        <div className="w-1/8">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/16-skin.png`}
            width={92}
            height={320}
            alt="Skin"
          />
        </div>
      </div>
      {/* 1/1s */}
      <h4 className="mt-10 mb-5 uppercase">1:1&apos;s</h4>

      <div className="flex gap-0">
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/17-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/18-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/19-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/20-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/21-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
      </div>
      <div className="flex gap-0 -mt-3">
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/22-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/23-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/24-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/25-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
      </div>
      {/* base process */}
      <h4 className="mt-10 mb-5 uppercase">base process</h4>

      <div className="flex justify-between gap-2 md:gap-3">
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/26-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/27-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/28-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/29-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
      </div>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/30-base.jpg`}
        width={760}
        height={261}
        alt="base"
      />
      <div className="flex justify-between gap-2 md:gap-3">
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/31-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/32-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/33-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
        <div className="w-1/4">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/34-base.jpg`}
            width={182.5}
            height={182.5}
            alt="base"
          />
        </div>
      </div>
      {/* before and after */}
      <h4 className="mt-10 mb-5 uppercase">before and after</h4>
      <div className="flex justify-between">
        <div className="w-1/2">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/34-frog.jpg`}
            width={382}
            height={382}
            alt="Frog"
          />
        </div>
        <div className="w-1/2">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/35-frog.jpg`}
            width={382}
            height={382}
            alt="Frog"
          />
        </div>
      </div>
    </SlimesStudioToggleLayout>
  );
};

export default CyberFrogsArt;
