import { HTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MaquinaCollaborations: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <motion.div
      key="collaboration"
      className="flex flex-col gap-5 max-w-[600px]"
      {...fastExitAnimation}
    >
      <h3 className="mt-40 sm:mt-48 md:mt-60 lg:mt-[420px]">collaborations</h3>
      <p className="maquina-copy">
        One of the many joys of building this world is seeing other artists
        interpret the lore, characters and aesthetics. I&apos;ve had the honor
        of working with so many artists to expand what Slimes represent to me,
        my community and the world.
      </p>
    </motion.div>
  );
};

export default MaquinaCollaborations;
