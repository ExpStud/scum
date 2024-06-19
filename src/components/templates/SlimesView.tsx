import { Dispatch, SetStateAction, FC, useState } from "react";
import { Heading, ImageShimmer } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  midEnterAnimation,
  collection,
  fastExitAnimation,
} from "src/constants";
import { Collection } from "src/types";
interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const SlimesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  //`${process.env.CLOUDFLARE_STORAGE}/slimes/low-res/${}.jpg`

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 xl:py-10"
      {...midEnterAnimation}
    >
      {/* intro */}
      <Heading />
      <div className="intro-text-container mx-5 xl:!ml-0">
        <h2>The Squad</h2>
        <p className="intro-text">
          Slimes are a community of art collectors who&apos;ve rallied around
          Scum to support and amplify him in his efforts as an artist and
          activist.
        </p>
        <p className="intro-text">
          These characters act as their respective holder&apos;s identity on
          social media as well as a membership to this tight-knit community. But
          most importantly, these characters are just the beginning of a larger
          story being told in the Maquina Muertes series.
        </p>
      </div>
      {/* slimes */}
      <div className="flex items-center w-full px-5 xl:px-0 ">
        <hr className="flex-grow border-t border-dotted border-black mr-2 w-full" />
        <div className="whitespace-nowrap font-forma-medium text-2xl lg:text-4xl 2xl:text-5xl">
          {collection.length}/<span className="opacity-50">50</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 bg-scum-black-800">
        {collection.map((slime, i) => (
          <SlimeItem key={i} item={slime} />
        ))}
      </div>
    </motion.div>
  );
};

interface SlimeItemProps {
  item: Collection;
}
const SlimeItem: FC<SlimeItemProps> = (props: SlimeItemProps) => {
  const { item } = props;
  const [didHover, setDidHover] = useState<boolean>(false);

  const formatId = (id: number) => String(id).padStart(3, "0");

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <ImageShimmer
        src={`${
          process.env.CLOUDFLARE_STORAGE
        }/images/slimes/low-res/${item.name
          .toLowerCase()
          .replace(" ", "-")}.jpg`}
        width={400}
        height={400}
        alt={item.name}
        className="rounded-br-[50px]"
      />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            {...fastExitAnimation}
            key={item.id}
            className="absolute inset-0 h-full w-full bg-scum-black/50 backdrop-blur-sm text-scum-beige-500 rounded-br-[50px] 
              p-4 uppercase"
          >
            <p>{item.name}</p>
            <p className="opacity-70 -mt-1">NO. {formatId(item.id + 1)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SlimesView;
