import { Dispatch, SetStateAction, FC, useRef, useEffect } from "react";
import { AnimateWrapper, Gallery, Heading } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation, sfc } from "@constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const FamilyView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div {...midEnterAnimation} ref={ref}>
      <AnimateWrapper
        animate={isInView}
        className="page-start mt-[86px] xl:mt-0 xl:py-10 gap-10 "
      >
        <Heading />
      </AnimateWrapper>
    </motion.div>
  );
};

export default FamilyView;
