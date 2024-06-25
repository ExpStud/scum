import {
  Dispatch,
  SetStateAction,
  FC,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import { Heading, MaquinaImage, MaquinaToggleItem } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation, midEnterAnimation, maquinas } from "@constants";
import { useWindowSize } from "src/hooks";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const MaquinaView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [selected, setSelected] = useState<number>(0);
  const [worldSelected, setWorldSelected] = useState<number>(0);
  const [charLength, setCharLength] = useState<number>(0);

  const [winWidth] = useWindowSize();
  useEffect(() => {
    if (winWidth > 2160) {
      setCharLength(13);
    } else if (winWidth > 768) {
      setCharLength(9);
    } else {
      setCharLength(5);
    }
  }, [winWidth]);

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:py-10"
      {...midEnterAnimation}
    >
      <Heading />
      {/* toggle */}
      <div className="flex w-full border-b border-scum-beige-600/40">
        <MaquinaToggleItem
          label="Maquina Muertes"
          selected={selected === 0}
          onClick={() => setSelected(0)}
        />
        <MaquinaToggleItem
          label="World Building"
          selected={selected === 1}
          onClick={() => setSelected(1)}
        />
      </div>
      {/* content */}
      <AnimatePresence mode="wait">
        {selected === 0 ? (
          <motion.div key="maquina" className="small-px" {...fastExitAnimation}>
            <h2 className="my-3">Xicano Futurism</h2>
            <p className="intro-text text-container-width mt-8 mb-16 xl:mb-32">
              Maquina Muertes are chapters in a story that takes place in the
              Slimes world. This series depicts scenes from my subconscious.
              Memories, experiences, dreams and ideas all meet to form key plot
              points in the story unfolding.
            </p>
            <div className="col-centered lg:gap-10">
              <MaquinaImage index={0} maquina={maquinas[0]} />
              <div className="flex flex-col md:flex-row md:justify-between gap-5 lg:gap-10 w-full mt-10">
                <MaquinaImage index={1} maquina={maquinas[1]} />
                <MaquinaImage index={2} maquina={maquinas[2]} />
                <MaquinaImage index={3} maquina={maquinas[3]} />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="world"
            className="small-px w-full"
            {...fastExitAnimation}
          >
            <h2 className="my-3">World Building</h2>
            <p className="intro-text text-container-width mt-8  mb-16 xl:mb-32">
              All of my collections stem from the same desire; a greater
              understanding of myself. I started Slimes as a tool to explore my
              heritage. I am a mixed, Mexican American from the border region of
              the Sonoran Desert. I grew up in a rural area where the desert
              landscape and my imagination were my best friends. I want to
              capture that, explore what it really means to be of Mexican
              descent and share that with the world.
            </p>
            <div className="col-centered lg:gap-10 w-full">
              <div className="flex gap-2 w-full sm:w-[600px] bg-scum-black-800/30 rounded-[22px] h-11 p-1">
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
                <WorldToggleItem
                  selected={worldSelected === 2}
                  onClick={() => setWorldSelected(2)}
                >
                  Branding
                </WorldToggleItem>
              </div>
            </div>
            <div className="relative min-h-[500px] mt-8 lg:mt-14">
              <AnimatePresence mode="wait">
                {worldSelected === 0 && (
                  <motion.div
                    key="characters"
                    className=" flex flex-col gap-5"
                    {...fastExitAnimation}
                  >
                    <div className="absolute-x inset-x-0 top-0 py-2.5 lg:py-5 flex overflow-hidden bg-scum-black-800/15">
                      {new Array(charLength).fill(null).map((_, i) => (
                        <div key={i} className="">
                          <Image
                            src={`/images/maquina/character-${i + 1}.jpg`}
                            width={300}
                            height={300}
                            alt={`Character ${i + 1}`}
                            className="rounded-br-[30px] md:rounded-br-[50px] lg:rounded-br-[100px] min-w-[100px] md:min-w-[150px] lg:min-w-[300px]"
                          />
                        </div>
                      ))}
                    </div>
                    <h3 className="mt-40 sm:mt-48 md:mt-60 lg:mt-[420px]">
                      Characters
                    </h3>
                    <p className="font-forma-medium">
                      The original My Slimes collection consists of 50 unique
                      characters. Some of these are inspired with direction by
                      the collector of the artwork. most of them come directly
                      from my head.
                    </p>
                    <h3 className="mt-10">CONCEPTS</h3>
                    <p className="font-forma-medium">
                      The characters are inspired by the Luchador. The masked
                      warrior, mysterious, fearless. A showman.
                    </p>
                    <p className="font-forma-medium">
                      Taking the Luchador as the base concept, i will draw from
                      my experiences; family, environment and studies of
                      pre-columbian Mexico. From Mythology to regional
                      aesthetics and traditions.
                    </p>
                  </motion.div>
                )}
                {worldSelected === 1 && (
                  <motion.div
                    key="collaboration"
                    className="flex flex-col gap-5"
                    {...fastExitAnimation}
                  >
                    <h3>collaborations</h3>
                    <p className="font-forma-medium">
                      One of the many joys of building this world is seeing
                      other artists interpret the lore, characters and
                      aesthetics. I&apos;ve had the honor of working with so
                      many artists to expand what Slimes represent to me, my
                      community and the world
                    </p>
                  </motion.div>
                )}
                {worldSelected === 2 && (
                  <motion.div
                    key="branding"
                    className="flex flex-col gap-5"
                    {...fastExitAnimation}
                  >
                    <h3>branding</h3>
                    <p className="font-forma-medium">
                      Creating the Slimes branding is a labor of love.
                    </p>
                    <p className="font-forma-medium">
                      It&apos;s been riffed on, remixed and reimagined. But
                      it&apos;s strong foundation has made it unmistakable at
                      every step.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

const WorldToggleItem: FC<ToggleProps> = (props: ToggleProps) => {
  const { selected, children, ...componentProps } = props;

  return (
    <div
      className={`w-1/3 col-centered cursor-pointer text-[10px] sm:text-xs md:text-sm uppercase rounded-[22px] transition-200 ${
        selected
          ? "text-scum-black bg-scum-beige-600"
          : "text-scum-beige-600/60"
      }`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default MaquinaView;
