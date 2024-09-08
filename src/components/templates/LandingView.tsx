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

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  showView: boolean;
  setShowView: Dispatch<SetStateAction<boolean>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { showView, setShowView } = props;
  const [showLoop, setShowLoop] = useState<boolean>(false);
  const [winWidth] = useWindowSize();
  const mobileView = winWidth <= 1024;
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

  return (
    <motion.div className="relative page-centered !mb-0" {...midEnterAnimation}>
      {/* ait cta */}
      <motion.a
        {...slideUp(showView, 0, 0.75)}
        className="group w-[294px] h-12 transition-300 bg-scum-teal hover:bg-scum-black rounded-3xl absolute bottom-[8vh] md:bottom-20 z-10 flex justify-between items-center p-1"
        href="https://allintime.xyz/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="ml-4 mt-1 font-forma-bold text-[19px] group-hover:text-white transition-300">
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
      </motion.a>
      {/* videos */}
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
        onEnded={() => {
          setShowLoop(true);
        }}
        {...exitAnimation}
      >
        <source
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_intro.webm`}
          type="video/webm"
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
      >
        <source
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/desktop_loop.webm`}
          type="video/webm"
        />
      </motion.video>

      {/* mobile */}
      <AnimatePresence mode="wait">
        {!showLoop && (
          <motion.video
            ref={introRefMobile}
            muted
            autoPlay
            playsInline
            key="intro-mobile"
            className={`mobile-video -z-10 ${!mobileView && "hidden"} ${
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
        className={`mobile-video -z-20 ${!mobileView && "hidden"}  ${
          showLoop ? "visible" : "invisible"
        }`}
        style={{ objectFit: "cover" }}
      >
        <source
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/mobile_loop.mp4`}
          type="video/mp4"
        />
      </motion.video>
    </motion.div>
  );
};

export default LandingView;
