import {
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { exitAnimation, slideUp, midEnterAnimation } from "src/constants";
import { useWindowSize } from "src/hooks";
import {
  isMobile,
  isTablet,
  browserName as detectedBrowserName,
} from "react-device-detect";
import Image from "next/image";
import { IconBar } from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  showView: boolean;
  setShowView: Dispatch<SetStateAction<boolean>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { showView, setShowView } = props;
  const [showLoop, setShowLoop] = useState<boolean>(false);
  const [browserName, setBrowserName] = useState("");

  useEffect(() => {
    setBrowserName(detectedBrowserName);
  }, []);

  const [winWidth] = useWindowSize();
  const tabletView = winWidth <= 1024;
  const mobileView = winWidth <= 640;
  //refs
  const introRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const introRefMobile = useRef<HTMLVideoElement>(null);
  const loopRefMobile = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    if (showLoop) {
      setShowView(true);
    }
  }, [setShowView, showLoop]);

  useEffect(() => {
    // if (isMobile || isTablet) setShowView(true);
    setShowView(true);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowView(true);
  //   }, 5000);

  //   // Cleanup the timer if the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <motion.div className="relative page-centered !mb-0" {...midEnterAnimation}>
      <h1 className="sr-only">Scum - All In Time - Slimes</h1>
      <IconBar className="absolute top-32 left-5 xl:left-1/2 transform xl:-translate-x-1/2 z-10 xl:hidden" />
      {/* ait cta */}
      <div
        className="mx-2 absolute bottom-[6vh] md:bottom-20 z-[15]"
        style={{ width: mobileView ? "calc(100% - 16px)" : "auto" }}
      >
        <a
          className="group w-full sm:w-[294px] h-12 transition-300 bg-scum-teal hover:bg-scum-black rounded-3xl flex justify-between items-center p-1"
          href="https://allintime.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="ml-4 lg:mt-0.5 font-forma-bold text-[19px] group-hover:text-white transition-300">
            Shop All In Time
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-scum-black group-hover:bg-scum-teal transition-300 row-centered">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.56445 10.623L0.321289 9.37988L7.80811 1.89307H2.06543L2.08398 0.176758H10.749V8.85107H9.03271V3.13623L1.56445 10.623Z"
                className="fill-scum-beige group-hover:fill-scum-black transition-300"
              />
            </svg>
          </div>
        </a>
      </div>

      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/cucuy-${
          tabletView ? "sm" : "lg"
        }.png`}
        alt="Slime Landing"
        width={1024}
        height={1024}
        className="absolute right-0 xl:left-1/2 top-[55%] xl:top-[47%] transform xl:-translate-x-1/2 -translate-y-1/2 w-auto h-[100%] xl:h-auto lg:w-[700px] z-10 xl:w-[800px] 2xl:w-[1024px]"
        // onLoad={() => setShowView(true)}
      />

      {/* videos */}
      {/* {browserName !== "" && (
        <>
          <motion.video
            ref={introRef}
            autoPlay
            muted
            playsInline
            key="intro desktop"
            className={`${
              tabletView && "hidden"
            } h-full w-screen absolute inset-0 -z-10 ${
              !showLoop ? "visible" : "invisible"
            }`}
            style={{ objectFit: "cover" }}
            onEnded={() => {
              setShowLoop(true);
            }}
            {...exitAnimation}
          >
            {browserName !== "Safari" && (
              <source
                src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_intro.webm`}
                type="video/webm"
              />
            )}
            <source
              src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_intro.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </motion.video>
          <motion.video
            ref={loopRef}
            muted
            playsInline
            key="loop desktop"
            loop
            className={`${
              tabletView && "hidden"
            } h-full w-screen absolute inset-0 -z-20 ${
              showLoop ? "visible" : "invisible"
            }`}
            style={{ objectFit: "cover" }}
          >
            {browserName !== "Safari" && (
              <source
                src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_loop.webm`}
                type="video/webm"
              />
            )}
            <source
              src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_loop.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </motion.video> 
          */}

      {/* mobile */}
      {/* <AnimatePresence mode="wait">
            {!showLoop && (
              <motion.video
                ref={introRefMobile}
                muted
                autoPlay
                playsInline
                key="intro-mobile"
                className={`mobile-video -z-10 ${!tabletView && "hidden"} ${
                  !showLoop ? "visible" : "invisible"
                }`}
                style={{ objectFit: "cover" }}
                onEnded={() => setShowLoop(true)}
                {...exitAnimation}
              >
                <source
                  src={`${process.env.CLOUDFLARE_STORAGE}/videos/mobile_intro.mp4`}
                  type="video/mp4"
                />
              </motion.video>
            )}
          </AnimatePresence>
          <motion.video
            ref={loopRefMobile}
            muted
            playsInline
            key="loop-mobile"
            loop
            className={`mobile-video -z-20 ${!tabletView && "hidden"}  ${
              showLoop ? "visible" : "invisible"
            }`}
            style={{ objectFit: "cover" }}
          >
            <source
              src={`${process.env.CLOUDFLARE_STORAGE}/videos/mobile_loop.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </motion.video>
        </>
      )} */}
    </motion.div>
  );
};

export default LandingView;
