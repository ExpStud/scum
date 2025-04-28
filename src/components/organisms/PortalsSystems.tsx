import React, { FC, HTMLAttributes } from "react";
import { SlimesStudioToggleLayout } from "@components";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PortalsSystems: FC<Props> = ({ ...divProps }) => {
  return (
    <SlimesStudioToggleLayout
      date={"October 2023 - September 2024"}
      descriptions={[
        "A look into the work behind the new Portals world.",
        "Creative Direction: Scum",
      ]}
    >
      <h4 className="mb-5 uppercase">
        Trait hierarchies and color coding systems
      </h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/1-frog.png`}
        width={182.5}
        height={182.5}
        alt="Frog"
      />
      <h4 className="mt-10 mb-5 uppercase">LOGIC TREE FOR GENERATIONS</h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/1-frog.png`}
        width={182.5}
        height={182.5}
        alt="Frog"
      />

      <h4 className="mt-10 mb-5 uppercase">
        Trait Hierarchy to solve for hair/eye layering
      </h4>

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
        <div className="w-1/5">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/cyber-frogs/art/26-custom.jpg`}
            width={152}
            height={152}
            alt="custom"
          />
        </div>
      </div>
    </SlimesStudioToggleLayout>
  );
};

export default PortalsSystems;
