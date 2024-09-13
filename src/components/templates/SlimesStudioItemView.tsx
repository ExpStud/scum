import React, { useState } from "react";
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
import { useRouter } from "next/router";

type SlimesItemViewProps = {
  item: SlimesStudio;
};

const SlimesItemView: React.FC<SlimesItemViewProps> = ({ item }) => {
  const [selected, setSelected] = useState<number>(0);

  const router = useRouter();

  //dynamically import the component based on the pathname
  const componentMap: { [key: string]: React.ReactNode[] } = {
    "cyber-frogs": [
      <CyberFrogsBranding key={0} />,
      <CyberFrogsArt key={1} />,
      <CyberFrogsWebsite key={2} />,
    ],
  };
  const components = componentMap[item.pathname] || [];

  const handleNext = () => {
    setSelected((prev) => (prev + 1) % item.tabs.length);
  };
  const handleBack = () => {
    setSelected((prev) => (prev - 1 + item.tabs.length) % item.tabs.length);
  };

  return (
    <motion.div
      className="page-start gap-5 lg:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-44"
      {...midEnterAnimation}
    >
      <div className="flex flex-col w-full">
        <Heading className="!mb-12 md:!mb-24 xl:!mb-40 " />

        <div className="flex items-center gap-2 w-full px-5 xl:px-0 mb-10">
          <button
            className="slimes-button black-hover rounded-[22px] min-w-[190px] h-[44px]"
            onClick={() => router.push("/slimes-studio")}
          >
            <span className="font-inter mr-2">←</span> Back to Summary
          </button>
          <hr className="flex-grow border-t border-dotted border-black/40 mr-2 w-full" />
          <div className="flex gap-2">
            <button
              className="slimes-button-round black-hover font-inter"
              onClick={() => handleBack()}
            >
              ←
            </button>
            <button
              className="slimes-button-round black-hover font-inter"
              onClick={() => handleNext()}
            >
              →
            </button>
          </div>
        </div>
        <h3 className="pb-6 lg:pb-0 px-5 xl:px-0 md:-mb-11">{item.title}</h3>
        <Toggle
          labels={item.tabs}
          selected={selected}
          setSelected={setSelected}
          className="justify-end mb-6"
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
