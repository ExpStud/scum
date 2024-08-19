import { FC, ReactNode, useEffect, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
  IconBar,
  Socials,
} from "@components";
import { enterAnimation, theme } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";
import { useRouter } from "next/router";
import { changeTheme } from "@utils";

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

  const router = useRouter();

  const borderColor =
    router.pathname === "/maquina"
      ? "bg-scum-beige-600/10"
      : router.pathname === "/axolotl"
      ? "bg-scum-beige/10"
      : "bg-scum-black/10";

  //set page bg & font color
  useEffect(() => {
    if (router.pathname.startsWith("/slimes")) {
      changeTheme(theme[3]);
      return;
    }

    switch (router.pathname) {
      case "/maquina":
        changeTheme(theme[2]);
        break;
      case "/axolotl":
        changeTheme(theme[1]);
        break;
      default:
        changeTheme(theme[0]);
    }
  }, [router.pathname]);

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col min-h-[100svh] h-full justify-between overflow-none   ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Name"
          description="Description"
          url="https://addurl.xyz" // no backslash at the end
          twitter="twitterhandle"
        />

        <Header type={headerType} />
        <main
          className={`max-w-1920 inner-left-padding outer-right-padding flex flex-col h-full w-full`}
        >
          {children}
          <Socials
            className={`hidden xl:block absolute outer-left-spacing z-10 ${
              router.pathname === "/" ? "bottom-[140px]" : "top-[85vh]"
            }`}
          />
        </main>
        <Footer />

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

        {/* lines */}
        <div className={`outer-left-line ${borderColor}`} />
        <div
          className={`inner-left-line ${borderColor} ${
            router.pathname === "/" ? "opacity-0" : ""
          }`}
        />
        <div className={`right-line ${borderColor}`} />
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;
