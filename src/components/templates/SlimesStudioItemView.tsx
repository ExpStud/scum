import React from "react";
import { motion } from "framer-motion";
import { Collection } from "src/types";
import { Heading, SlimeGraphics, SlimeNav } from "@components";
import { midEnterAnimation } from "src/constants";

type SlimesItemViewProps = {
  currentIndex: number;
  item: Collection;
  name: string | string[] | undefined;
  formatId: (id: number) => string;
};

const SlimesItemView: React.FC<SlimesItemViewProps> = ({
  currentIndex,
  item,
  name,
  formatId,
}) => {
  return (
    <motion.div
      className="page-start gap-5 lg:gap-10 mt-[86px] lg:mt-0 lg:pt-10 lg:pb-44"
      {...midEnterAnimation}
    >
      <Heading />
      <SlimeNav currentIndex={currentIndex} />
      <div className="flex flex-col gap-5 xl:gap-10 mx-5 xl:mx-0 text-container-width mt-10">
        <div>
          <h2>{name}</h2>
          <h2 className="opacity-20">My Slime {formatId(item.id + 1)}</h2>
        </div>
        <p className="intro-text max-w-[850px]">{item?.description}</p>
      </div>
      <SlimeGraphics slime={item} />
    </motion.div>
  );
};

export default SlimesItemView;
