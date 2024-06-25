import { Dispatch, SetStateAction, FC, useState } from "react";
import {
  Heading,
  ImageBar,
  MaquinaBranding,
  MaquinaCharacters,
  MaquinaCollaborations,
  MaquinaImage,
  MaquinaToggleItem,
  WorldToggleItem,
} from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation, midEnterAnimation, maquinas } from "@constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const MaquinaView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [selected, setSelected] = useState<number>(0);
  const [worldSelected, setWorldSelected] = useState<number>(0);

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
            <div className="relative min-h-[700px] mt-8 lg:mt-14">
              <ImageBar
                path={
                  worldSelected === 0
                    ? "/images/maquina/character"
                    : worldSelected === 1
                    ? "/images/maquina/character"
                    : "/images/maquina/character"
                }
              />
              <AnimatePresence mode="wait">
                {worldSelected === 0 && <MaquinaCharacters />}
                {worldSelected === 1 && <MaquinaCollaborations />}
                {worldSelected === 2 && <MaquinaBranding />}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// interface ImageProps extends HTMLAttributes<HTMLDivElement> {
//   path: string;
// }

// const ImageBar: FC<ImageProps> = (props: ImageProps) => {
//   const { path, ...componentProps } = props;

//   const [charLength, setCharLength] = useState<number>(0);

//   const [winWidth] = useWindowSize();
//   useEffect(() => {
//     if (winWidth > 2160) {
//       setCharLength(13);
//     } else if (winWidth > 768) {
//       setCharLength(9);
//     } else {
//       setCharLength(5);
//     }
//   }, [winWidth]);

//   return (
//     <div className="absolute-x inset-x-0 top-0 py-2.5 lg:py-5 flex overflow-hidden bg-scum-black-800/15">
//       {new Array(charLength).fill(null).map((_, i) => (
//         <div key={i} className="">
//           <Image
//             src={`${path}-${i + 1}.jpg`}
//             width={300}
//             height={300}
//             alt={`Character ${i + 1}`}
//             className="rounded-br-[30px] md:rounded-br-[50px] lg:rounded-br-[100px] min-w-[100px] md:min-w-[150px] lg:min-w-[300px]"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

export default MaquinaView;
