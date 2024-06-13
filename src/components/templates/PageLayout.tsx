import { FC, ReactNode, use, useEffect, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
} from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean; //prevents scroll
  absolute?: boolean; //allows scroll
  headerType?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    absolute = false,
    headerType,
    children,
    assets = [],
  } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const value = {
    showView,
    setShowView,
    showModal,
    setShowModal,
  };

  //set page bg & font color
  const router = useRouter();
  useEffect(() => {
    switch (router.pathname) {
      case "/slimes":
        document.documentElement.style.background = "#86E4C5";
        document.body.style.color = "#2C2524";
        break;
      case "/maquina":
        document.documentElement.style.background = "#B12F4E";
        document.body.style.color = "#FDC3AE";
        break;
      case "/axolotl":
        document.documentElement.style.background = "#1D201F";
        document.body.style.color = "#F6EFD3";
        break;
      default:
        document.documentElement.style.background = "#F6EFD3";
        document.body.style.color = "#2C2524";
    }
  }, [router.pathname]);

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col min-h-[100svh] h-full justify-between overflow-none ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Name"
          description="Description"
          url="https://addurl.xyz" // no backslash at the end
          twitter="twitterhandle"
        />
        {/* header */}
        <Header type={headerType} />

        {/* body */}
        <motion.main
          className={`flex flex-col h-full w-full overflow-x-clip`}
          {...enterAnimation}
        >
          {children}
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

        {/* load screen */}
        {/* {assets && <SplashScreen assets={assets} />} */}

        {/* modals */}
        <AnimatePresence mode="wait">
          {showModal && (
            <ImageModal
              key="image-modal"
              show={showModal}
              close={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;
