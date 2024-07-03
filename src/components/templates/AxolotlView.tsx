import { Dispatch, SetStateAction, FC, useRef } from "react";
import Image from "next/image";
import {
  AnimateWrapper,
  ArrowIcon,
  AxolotlPattern,
  Heading,
} from "@components";
import { AnimatePresence, motion, useCycle, useInView } from "framer-motion";
import { midEnterAnimation, expandHeight, dropdownParent } from "@constants";
interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

type AxolotlInfo = {
  title: string;
  description: string[];
  src: string;
};
const axolotlInfo: AxolotlInfo[] = [
  {
    title: "the axies need our help",
    src: "dropdown-1.jpg",
    description: [
      "These filters will funnel water directly from the lake where it begins a 4 step filtration system through various plants, and volcanic rock.",
      "The goal being to eventually amass a body of water clean enough to re-introduce the Axolotls held in captivation back into the wild.",
    ],
  },
  {
    title: "the axies need our help",
    src: "dropdown-1.jpg",
    description: [
      "In order to preserve the species, many organizations like Somos Axolotl have begun to relocate these marvelous creatures into captivity where a consistent water quality, and safe environment can be provided.",
    ],
  },
  {
    title: "Preservation efforts",
    src: "dropdown-1.jpg",
    description: [
      "In order to preserve the species, many organizations like Somos Axolotl have begun to relocate these marvelous creatures into captivity where a consistent water quality, and safe environment can be provided.",
      "On the exact same Chinampa where the Axolotl Statues are installed, our team has begun the development of organic bio-filters.",
      "These filters will funnel water directly from the lake where it begins a 4 step filtration system through various plants, and volcanic rock.",
      "The goal being to eventually amass a body of water clean enough to re-introduce the Axolotls held in captivation back into the wild.",
    ],
  },
  {
    title: "moving the needle",
    src: "dropdown-1.jpg",
    description: [
      "In order to preserve the species, many organizations like Somos Axolotl have begun to relocate these marvelous creatures into captivity where a consistent water quality, and safe environment can be provided.",
      "On the exact same Chinampa where the Axolotl Statues are installed, our team has begun the development of organic bio-filters.",
      "These filters will funnel water directly from the lake where it begins a 4 step filtration system through various plants, and volcanic rock.",
      "The goal being to eventually amass a body of water clean enough to re-introduce the Axolotls held in captivation back into the wild.",
    ],
  },
];

const AxolotlView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:py-10"
      {...midEnterAnimation}
      ref={ref}
    >
      <AnimateWrapper animate={isInView}>
        <Heading />
        <div className="intro-text-container mx-5 xl:!ml-0 !mt-12">
          <h2>saving the axolotls</h2>
          <p className="intro-text">
            One of the primary pillars of the My Slimes collection has been too
            funnel resources into Mexico City in the effort of preserving the
            diminishing Axolotl population.
          </p>
          <p className="intro-text">
            In just a years time, we have raised over $40,000 through My Slime
            sales.
          </p>
        </div>
        <hr className="flex-grow border-t border-dotted border-scum-beige/20 mr-2 w-full mt-5" />
        {/* stats */}
        <div className="flex gap-20 uppercase mt-10 small-mx ">
          <div className="flex flex-col gap-5">
            <p className="text-4xl md:text-6xl 2xl:text-7xl font-forma-extrabold text-scum-teal">
              $40,000
            </p>
            <p className="text-scum-teal/70 text-sm sm:text-base">
              donated till today
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-4xl md:text-6xl 2xl:text-7xl font-forma-extrabold text-scum-teal">
              857
            </p>
            <p className="text-scum-teal/70 text-sm sm:text-base">
              axolotls saved
            </p>
          </div>
        </div>
        {/* images */}
        <div className="w-full flex flex-col xs:flex-row xl:flex-nowrap justify-center gap-5 xl:justify-between overflow-hidden pt-5">
          <Image
            src={`/images/about/card-5.jpg`}
            width={500}
            height={500}
            alt="Panda"
            className="xs:w-[32%] xs:rounded-br-[100px]"
          />
          <Image
            src={`/images/about/card-5.jpg`}
            width={500}
            height={500}
            alt="Panda"
            className="xs:w-[32%] xs:rounded-br-[100px]"
          />
          <Image
            src={`/images/about/card-5.jpg`}
            width={500}
            height={500}
            alt="Panda"
            className="xs:w-[32%] xs:rounded-br-[100px]"
          />
        </div>
        {/* pattern svg */}
        <AxolotlPattern />
        {/* dropdown */}
        <div className="flex flex-col w-full border-t border-scum-beige/25 mb-32">
          {axolotlInfo.map((item, index) => (
            <DropdownItem
              key={index}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </AnimateWrapper>
    </motion.div>
  );
};

interface ItemProps {
  title: string;
  description: string[];
  src: string;
}
const DropdownItem: FC<ItemProps> = (props: ItemProps) => {
  const { title, description, src } = props;
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <div
      className="flex flex-col py-5 border-b border-scum-beige/25 w-full small-px"
      onClick={() => cycleOpen()}
    >
      <div className="flex justify-between items-center w-full xl:pr-5 pt-0.5 cursor-pointer">
        <h4>{title}</h4>
        <ArrowIcon animate={open} />
      </div>
      <motion.div {...expandHeight(open)}>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              className="flex w-full justify-between gap-5"
              variants={dropdownParent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-6 max-w-[600px] pt-5">
                {description.map((d, i) => (
                  <motion.p
                    key={i}
                    className="font-forma-medium text-lg xl:text-2xl text-scum-beige/50"
                  >
                    {d}
                  </motion.p>
                ))}
              </div>
              <Image
                src={`/images/axolotl/${src}`}
                width={480}
                height={610}
                alt={title}
                className="hidden md:block mt-5 max-w-[480px] max-h-[610px] object-cover rounded-br-[100px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AxolotlView;
