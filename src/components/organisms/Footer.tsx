import { useRouter } from "next/router";
import { FC, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { AnimateWrapper } from "@components";

const Footer: FC<{ show: boolean }> = ({ show }) => {
  const router = useRouter();

  const textColor =
    router.pathname === "/axolotl"
      ? "text-scum-black/30"
      : "text-scum-beige/30";
  const expColor =
    router.pathname === "/axolotl" ? "text-scum-black" : "text-scum-beige";

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <footer ref={ref}>
      <AnimateWrapper animate={isInView && show} height={20}>
        <div className="h-[50px] md:h-[100px] transition-200 bg-tertiary rounded-tl-[25px] md:rounded-tl-[50px] rounded-br-[25px] md:rounded-br-[50px] mb-2 md:mb-5 mx-2 md:mx-5">
          <div className="max-w-[1880px] relative w-full h-full flex items-center justify-between text-xs md:text-lg lg:text-xl 2xl:text-2xl px-6 md:px-10 xl:px-0">
            <div className="outer-left-padding">
              <p className={`xl:-ml-4 transition-200 ${textColor}`}>
                ALL IN TIME. <br /> WITH MY SLIMES.
              </p>
            </div>
            <div className="outer-right-padding xl:-mr-3 flex flex-col items-end text-[10px] sm:text-sm lg:text-base">
              <a
                href="https://sandboxstud.io"
                target="_blank"
                rel="noreferrer"
                className={`transition-200 opacity-70 hover:opacity-90 ${expColor}`}
              >
                Website by Sandbox
              </a>
              <p className={`${textColor}`}>©{new Date().getFullYear()} SCUM</p>
            </div>
            {/* centered image */}
            <div className="left-centered -top-[60px] transition-200 bg-primary rounded-full border-[6px] border-tertiary scale-50 md:scale-75 lg:scale-100 h-[128px] w-[128px]">
              <Image
                src="/images/footer/hands.png"
                width={100}
                height={100}
                alt="Slimes"
                className="centered"
              />
              {router.pathname === "/maquina" && (
                <Image
                  src="/images/footer/lines-brown.svg"
                  width={131}
                  height={132}
                  alt="Lines"
                  key="beige"
                  className="scale-110"
                />
              )}
              {router.pathname === "/axolotl" && (
                <Image
                  src="/images/footer/lines-teal.svg"
                  width={131}
                  height={132}
                  alt="Lines"
                  key="teal"
                  className="scale-110"
                />
              )}
              {router.pathname === "/" ||
              router.pathname === "/about" ||
              router.pathname === "/slimes" ||
              router.pathname === "/family" ? (
                <Image
                  src="/images/footer/lines-brown.svg"
                  width={131}
                  height={132}
                  alt="Lines"
                  key="brown"
                  className="scale-110"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </AnimateWrapper>
    </footer>
  );
};

export default Footer;
