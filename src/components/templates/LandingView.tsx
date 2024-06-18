import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { midEnterAnimation } from "src/constants";
import { isMobile } from "react-device-detect";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <motion.div className="page-centered" {...midEnterAnimation}>
      <Image
        src={`/images/graphics/landing${isMobile ? "-mobile" : ""}.png`}
        width={521}
        height={540}
        alt="Slimes"
        className="px-5"
      />
    </motion.div>
  );
};

export default LandingView;
