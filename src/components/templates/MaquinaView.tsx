import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const MaquinaView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:py-10"
      {...midEnterAnimation}
    >
      <Heading />
    </motion.div>
  );
};

export default MaquinaView;
