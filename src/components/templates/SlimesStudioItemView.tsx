import React from "react";
import { motion } from "framer-motion";
import { SlimesStudio } from "src/types";
import { Heading } from "@components";
import { midEnterAnimation } from "src/constants";

type SlimesItemViewProps = {
  currentIndex: number;
  item: SlimesStudio;
};

const SlimesItemView: React.FC<SlimesItemViewProps> = ({
  currentIndex,
  item,
}) => {
  return (
    <motion.div
      className="page-start gap-5 lg:gap-10 mt-[86px] lg:mt-0 lg:pt-10 lg:pb-44"
      {...midEnterAnimation}
    >
      <Heading />
      <h3>{item.title}</h3>
    </motion.div>
  );
};

export default SlimesItemView;
