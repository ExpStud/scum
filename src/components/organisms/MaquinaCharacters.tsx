import { HTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MaquinaCharacters: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <motion.div
      key="characters"
      className="max-w-[600px] flex flex-col gap-5"
      {...fastExitAnimation}
    >
      <h3 className="mt-40 sm:mt-48 md:mt-60 lg:mt-[420px]">Characters</h3>
      <p className="font-forma-medium">
        The original My Slimes collection consists of 50 unique characters. Some
        of these are inspired with direction by the collector of the artwork.
        most of them come directly from my head.
      </p>
      <h3 className="mt-10">CONCEPTS</h3>
      <p className="font-forma-medium">
        The characters are inspired by the Luchador. The masked warrior,
        mysterious, fearless. A showman.
      </p>
      <p className="font-forma-medium">
        Taking the Luchador as the base concept, i will draw from my
        experiences; family, environment and studies of pre-columbian Mexico.
        From Mythology to regional aesthetics and traditions.
      </p>
    </motion.div>
  );
};

export default MaquinaCharacters;
