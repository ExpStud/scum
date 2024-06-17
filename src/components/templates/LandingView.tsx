import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext } from "@contexts";
import Image from "next/image";
import { motion } from "framer-motion";
import { fastEnterAnimation } from "src/constants";
import { isMobile } from "react-device-detect";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <motion.div className="h-full w-full col-centered" {...fastEnterAnimation}>
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
