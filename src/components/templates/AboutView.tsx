import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { handleAssetLoad } from "@utils";
import { ViewContext } from "@contexts";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return <div className=""></div>;
};

export default AboutView;
