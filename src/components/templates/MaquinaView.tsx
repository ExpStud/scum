import { Dispatch, SetStateAction, FC, useState, useRef } from "react";
import {
  AnimateWrapper,
  Heading,
  ImageBar,
  MaquinaBranding,
  MaquinaCharacters,
  MaquinaCollaborations,
  MaquinaImage,
  Toggle,
  WorldToggleItem,
} from "@components";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { fastExitAnimation, midEnterAnimation, maquinas } from "@constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const MaquinaView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [selected, setSelected] = useState<number>(0);
  const [worldSelected, setWorldSelected] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-32"
      {...midEnterAnimation}
      ref={ref}
    >
      <AnimateWrapper animate={isInView}>
        <Heading />
        {/* toggle */}
        <Toggle
          labels={["Maquina Muertes", "World Building"]}
          selected={selected}
          setSelected={setSelected}
        />
        {/* content */}
        <AnimatePresence mode="wait">
          {selected === 0 ? (
            <motion.div
              key="maquina"
              className="small-px"
              {...fastExitAnimation}
            >
              <h2 className="mt-12 mb:8">Xicano Futurism</h2>
              <p className="intro-text text-container-width mt-8 mb-16 xl:mb-32">
                Maquina Muertes are chapters in a story that takes place in the
                Slimes world. This series depicts scenes from my subconscious.
                Memories, experiences, dreams and ideas all meet to form key
                plot points in the story unfolding.
              </p>
              <div className="col-centered lg:gap-10">
                <MaquinaImage index={0} maquina={maquinas[0]} />
                <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 w-full mt-10">
                  <MaquinaImage index={1} maquina={maquinas[1]} />
                  <MaquinaImage index={2} maquina={maquinas[2]} />
                  <MaquinaImage index={3} maquina={maquinas[3]} />
                  <MaquinaImage index={4} maquina={maquinas[4]} />
                </div>
                {/* <div className="flex flex-col md:flex-row md:justify-between gap-5 lg:gap-10 w-full mt-10">
                  <div className="w-[386px]"></div>
                  <div className="w-[386px]"></div>
                </div> */}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="world"
              className="small-px w-full"
              {...fastExitAnimation}
            >
              <h2 className="mt-12 mb:8">World Building</h2>
              <p className="intro-text text-container-width mt-8 mb-16 xl:mb-40">
                All of my collections stem from the same desire; a greater
                understanding of myself. I started Slimes as a tool to explore
                my heritage. I am a mixed, Mexican American from the border
                region of the Sonoran Desert. I grew up in a rural area where
                the desert landscape and my imagination were my best friends. I
                want to capture that, explore what it really means to be of
                Mexican descent and share that with the world.
              </p>
              <div className="col-centered lg:gap-10 w-full">
                <div className="flex gap-2 w-full sm:w-[400px] bg-scum-black-800/30 rounded-[22px] h-11 p-1">
                  <WorldToggleItem
                    selected={worldSelected === 0}
                    onClick={() => setWorldSelected(0)}
                  >
                    Characters
                  </WorldToggleItem>
                  <WorldToggleItem
                    selected={worldSelected === 1}
                    onClick={() => setWorldSelected(1)}
                  >
                    collaborations
                  </WorldToggleItem>
                </div>
              </div>
              <div
                className={`relative min-h-[400px] lg:min-h-[700px] transition-500 ${
                  worldSelected < 2 ? "mt-20 lg:mt -32" : "mt-10 lg:mt-14"
                }`}
              >
                <AnimatePresence mode="wait">
                  {worldSelected < 2 && <ImageBar selected={worldSelected} />}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  {worldSelected === 0 && <MaquinaCharacters />}
                  {worldSelected === 1 && <MaquinaCollaborations />}
                  {worldSelected === 2 && <MaquinaBranding />}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateWrapper>
    </motion.div>
  );
};

export default MaquinaView;
