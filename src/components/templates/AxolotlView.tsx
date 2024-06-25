import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AxolotlView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:py-10"
      {...midEnterAnimation}
    >
      <Heading />
      <div className="intro-text-container mx-5 xl:!ml-0">
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
    </motion.div>
  );
};

export default AxolotlView;
