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
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/systems/s-1.png`}
        width={760}
        height={467}
        alt="color coding"
      />
      <h4 className="mt-10 mb-5 uppercase">LOGIC TREE FOR GENERATIONS</h4>
      <div className="max-w-[760px] overflow-x-auto">
        <div className="relative">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/systems/s-2.svg`}
            width={1168}
            height={578}
            alt="logic tree"
            className="xl:!min-w-[1168px] origin-top-left"
          />
        </div>
      </div>

      <h4 className="mt-10 mb-5 uppercase">
        Trait Hierarchy to solve for hair/eye layering
      </h4>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/portals/systems/s3@6x.png`}
        width={760}
        height={175}
        alt="hair/eye layering"
      />
    </SlimesStudioToggleLayout>
  );
};

export default PortalsSystems;
