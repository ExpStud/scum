import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { slideDown } from "@constants";
import { IconBar } from "@components";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { ViewContext } from "@contexts";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center"></div>
  );
};

export default LandingView;
