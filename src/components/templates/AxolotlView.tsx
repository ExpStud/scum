import { Dispatch, SetStateAction, FC, useRef } from "react";
import Image from "next/image";
import { AnimateWrapper, AxolotlPattern, Heading } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation } from "@constants";
import { DropdownItem } from "@components";
import { axolotlInfo } from "@constants";
interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AxolotlView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-20"
      {...midEnterAnimation}
      ref={ref}
    >
      <AnimateWrapper animate={isInView}>
        <Heading />
        <div className="intro-text-container mx-5 xl:!ml-0 !mt-28">
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
        <hr className="flex-grow border-t border-dotted border-scum-beige/20 mr-2 w-full mt-20 mb-12" />
        {/* stats */}
        <div className="flex flex-wrap gap-20 uppercase mt-10 small-mx mb-10 lg:mb-20">
          <div className="flex flex-col gap-5">
            <p className="text-4xl md:text-6xl 2xl:text-7xl font-forma-extrabold text-scum-teal">
              $40,000
            </p>
            <p className="text-scum-teal/70 text-sm sm:text-base">
              donated till today
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-4xl md:text-6xl 2xl:text-7xl font-forma-extrabold text-scum-teal">
              857
            </p>
            <p className="text-scum-teal/70 text-sm sm:text-base">
              axolotls saved
            </p>
          </div>
        </div>
        {/* images */}
        <div className="w-full flex flex-col sm:flex-row xl:flex-nowrap justify-center gap-5 xl:justify-between overflow-hidden pt-5 px-5 xl:px-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="sm:w-[32%]">
              <Image
                src={`/images/axolotl/col-${i + 1}.jpg`}
                width={500}
                height={500}
                alt="Panda"
                className="rounded-br-[100px] sm:rounded-br-[60px] lg:rounded-br-[100px]"
              />
            </div>
          ))}
        </div>
        {/* pattern svg */}
        <div className="w-full flex justify-center my-5 lg:my-14">
          <AxolotlPattern />
        </div>
        {/* dropdown */}
        <div className="flex flex-col w-full border-t border-scum-beige/25 mb-32">
          {axolotlInfo.map((item, index) => (
            <DropdownItem key={index} item={item}></DropdownItem>
          ))}
        </div>
      </AnimateWrapper>
    </motion.div>
  );
};

export default AxolotlView;
