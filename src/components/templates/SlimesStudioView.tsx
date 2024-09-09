import { Dispatch, SetStateAction, FC, useRef, useEffect } from "react";
import { AnimateWrapper, Heading } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation, slimesStudio } from "@constants";
import { SlimesStudio } from "src/types";
import Link from "next/link";
import Image from "next/image";

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
    <motion.div
      {...midEnterAnimation}
      ref={ref}
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-44"
    >
      <AnimateWrapper animate={isInView}>
        <Heading className="!mb-12 md:!mb-24 xl:!mb-40" />
        <StudioList />
      </AnimateWrapper>
    </motion.div>
  );
};

interface StudioProps {}
const StudioList: FC<StudioProps> = (props: StudioProps) => {
  return (
    <div className="flex flex-col gap-5 w-full px-5 xl:px-0">
      {slimesStudio.map((item: SlimesStudio) => (
        <StudioListItem item={item} key={item.title} />
      ))}
    </div>
  );
};

interface StudioItemProps {
  item: SlimesStudio;
}
const StudioListItem: FC<StudioItemProps> = (props: StudioItemProps) => {
  const { item } = props;
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-wrap justify-between w-full gap-5">
        <div>
          <h3 className="uppercase">{item.title}</h3>
          <p className="text-[15px] text-scum-black/70 uppercase">
            {item.description}
          </p>
        </div>
        <Link
          href={`/slimes-studio/${item.pathname}`}
          className="row-centered min-w-[166px] h-11 bg-scum-black rounded-[22px] text-white text-base transition-300 hover:bg-scum-teal hover:text-scum-black font-inter tracking-[0.015em]"
        >
          Project Details <span className="font-inter ml-1"> →</span>
        </Link>
      </div>
      <div className="flex gap-2 md:gap-5 justify-between">
        {item.images.map((image: string, index) => (
          <div
            className={`relative w-1/2 sm:w-1/3 aspect-square ${
              index === 2 ? "hidden sm:block" : ""
            }`}
            key={index}
          >
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/slimes-studio/${image}`}
              alt={item.title}
              fill
              className="rounded-br-[50px] sm:rounded-br-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyView;
