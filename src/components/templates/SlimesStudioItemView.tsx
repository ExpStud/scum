import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlimesStudio } from "src/types";
import { Heading, Toggle } from "@components";
import { midEnterAnimation } from "@constants";

type SlimesItemViewProps = {
  currentIndex: number;
  item: SlimesStudio;
};

const SlimesItemView: React.FC<SlimesItemViewProps> = ({
  currentIndex,
  item,
}) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <motion.div
      className="page-start gap-5 lg:gap-10 mt-[86px] lg:mt-0 lg:pt-10 lg:pb-44"
      {...midEnterAnimation}
    >
      <Heading />
      <div className="flex flex-col px-5 xl:px-0 w-full">
        <h3>{item.title}</h3>
        <Toggle
          labels={item.tabs}
          selected={selected}
          setSelected={setSelected}
          className="justify-end"
        />
      </div>
    </motion.div>
  );
};

export default SlimesItemView;
