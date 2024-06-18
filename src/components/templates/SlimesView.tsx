import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const SlimesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:py-10"
      {...midEnterAnimation}
    >
      <Heading />
      <div className="intro-text-container">
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
    </motion.div>
  );
};

export default SlimesView;
