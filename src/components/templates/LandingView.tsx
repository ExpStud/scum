import {
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { exitAnimation, midEnterAnimation } from "src/constants";
import { isMobile } from "react-device-detect";
import { useWindowSize } from "src/hooks";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}
interface Assets {
  src: string;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const [showLoop, setShowLoop] = useState<boolean>(false);
  const [winWidth] = useWindowSize();
  const mobileView = winWidth <= 1024;
  //refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const introRefMobile = useRef<HTMLVideoElement>(null);
  const loopRefMobile = useRef<HTMLVideoElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(scrollRef);

  // useEffect(() => {
  //   setIsInView(isInView);
  // }, [isInView, setIsInView]);

  useEffect(() => {
    if (showLoop && loopRef.current && introRef.current) {
      loopRef.current.play();
      introRef.current.pause();
    }

    if (showLoop && loopRefMobile.current && introRefMobile.current) {
      loopRefMobile.current.play();
      introRefMobile.current.pause();
    }
  }, [showLoop]);

  return (
    <motion.div className="page-centered" {...midEnterAnimation}>
      <Image
        src={`/images/graphics/landing${isMobile ? "-mobile" : ""}.png`}
        width={521}
        height={540}
        alt="Slimes"
        className="px-5  lg:hidden"
      />
      <motion.video
        ref={introRef}
        autoPlay
        muted
        playsInline
        key="intro desktop"
        className={`${
          mobileView && "hidden"
        } h-full w-screen absolute inset-0 -z-10 ${
          !showLoop ? "visible" : "invisible"
        }`}
        style={{ objectFit: "cover" }}
        // onLoadedData={() => {
        //   setAssets && setAssets((prevState) => [true, ...prevState.slice(1)]);
        // }}
        onEnded={() => {
          setShowLoop(true);
        }}
        {...exitAnimation}
      >
        <source
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_intro.mp4`}
          type="video/mp4"
        />
      </motion.video>
      <motion.video
        ref={loopRef}
        muted
        playsInline
        key="loop desktop"
        loop
        className={`${
          mobileView && "hidden"
        } h-full w-screen absolute inset-0 -z-20 ${
          showLoop ? "visible" : "invisible"
        }`}
        style={{ objectFit: "cover" }}
        // onLoadedData={() => {
        //   setAssets &&
        //     setAssets((prevState) => [
        //       ...prevState.slice(0, 0),
        //       true,
        //       ...prevState.slice(2),
        //     ]);
        // }}
      >
        <source
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_loop.mp4`}
          type="video/mp4"
        />
      </motion.video>
    </motion.div>
  );
};

export default LandingView;
