import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useState,
  use,
  useEffect,
} from "react";
import Image from "next/image";
import { AnimateWrapper, Gallery, Heading } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation, midExitAnimation, sfc } from "@constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const FamilyView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  //used to autplay video when in view
  const videoRef = useRef<HTMLVideoElement>(null);
  const startVidRef = useRef<HTMLDivElement>(null);
  const videoInView = useInView(startVidRef, {
    once: true,
  });

  //auto play video when in view
  useEffect(() => {
    if (videoInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoInView]);

  return (
    <motion.div {...midEnterAnimation} ref={ref}>
      <AnimateWrapper
        animate={isInView}
        className="page-start mt-[86px] xl:mt-0 xl:py-10 gap-0 "
      >
        <Heading />
        <div className="relative flex flex-col justify-start w-full mb-10 -mt-10">
          <div className="col-start gap-8 my-10 mx-5 xl:!ml-0 max-w-[530px] xl:min-w-[600px]">
            <h2 className="whitespace-nowrap">meet the family</h2>
            <p className="intro-text  font-forma-medium tracking-wide">
              We have extended our community through a series of artworks
              lovingly known as the Slimes Family Collection.
            </p>
            <p className="intro-text font-forma-medium tracking-wide">
              We&apos;ve been blessed to have some of our favorite artists in
              the space creating beautiful works inspired by the slimes world,
              axolotls and renditions of the characters themselves.
            </p>
          </div>

          <div className="relative">
            <video
              ref={videoRef}
              key="vids"
              playsInline
              muted
              style={{ objectFit: "cover" }}
              className="border-b border-t border-scum-black/10"
            >
              <source
                src={`${process.env.CLOUDFLARE_STORAGE}/videos/handshake.mp4`}
                type="video/mp4"
              />
            </video>
            <div className="absolute w-1 h-1 bottom-12" ref={startVidRef}></div>
          </div>
        </div>

        <Gallery header="series 2" initialData={sfc.two} />
        <Gallery header="series 1" initialData={sfc.one} />
      </AnimateWrapper>
    </motion.div>
  );
};

export default FamilyView;
