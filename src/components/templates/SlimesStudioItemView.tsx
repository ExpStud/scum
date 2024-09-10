import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlimesStudio } from "src/types";
import {
  CyberFrogsArt,
  CyberFrogsBranding,
  CyberFrogsWebsite,
  Heading,
  Toggle,
} from "@components";
import { fastExitAnimation, midEnterAnimation } from "@constants";

type SlimesItemViewProps = {
  item: SlimesStudio;
};

const SlimesItemView: React.FC<SlimesItemViewProps> = ({ item }) => {
  const [selected, setSelected] = useState<number>(0);

  const componentMap: { [key: string]: React.ReactNode[] } = {
    "cyber-frogs": [
      <CyberFrogsBranding key={0} />,
      <CyberFrogsArt key={1} />,
      <CyberFrogsWebsite key={2} />,
    ],
  };
  const components = componentMap[item.pathname] || [];

  return (
    <motion.div
      className="page-start gap-5 lg:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-44"
      {...midEnterAnimation}
    >
      <Heading className="!mb-12 md:!mb-24 xl:!mb-40" />
      <div className="flex flex-col px-5 xl:px-0 w-full">
        <h3>{item.title}</h3>
        <Toggle
          labels={item.tabs}
          selected={selected}
          setSelected={setSelected}
          className="justify-end"
        />

        <AnimatePresence mode="wait">
          {item.tabs.map(
            (tab, index) =>
              selected === index && (
                <motion.div key={tab} {...fastExitAnimation}>
                  {components[index]}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SlimesItemView;
