import { HTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MaquinaBranding: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <motion.div
      key="branding"
      className="flex flex-col gap-5"
      {...fastExitAnimation}
    >
      <h3 className="mt-40 sm:mt-48 md:mt-60 lg:mt-[420px]">branding</h3>
      <p className="font-forma-medium">
        Creating the Slimes branding is a labor of love.
      </p>
      <p className="font-forma-medium">
        It&apos;s been riffed on, remixed and reimagined. But it&apos;s strong
        foundation has made it unmistakable at every step.
      </p>
    </motion.div>
  );
};

export default MaquinaBranding;
