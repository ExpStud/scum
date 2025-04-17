import { Dispatch, SetStateAction, FC, useRef, ReactNode } from "react";
import Image from "next/image";
import { AnimateWrapper, Heading } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

interface BrandKitItem {
  content: ReactNode;
  background: string;
}
interface BrandKit {
  category: string;
  items: BrandKitItem[];
}

const BrandKitView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-32"
      {...midEnterAnimation}
      ref={ref}
    >
      <AnimateWrapper animate={isInView}>
        <Heading />
      </AnimateWrapper>
    </motion.div>
  );
};

export default BrandKitView;
