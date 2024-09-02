import { FC, ReactNode, useEffect, useState } from "react";
import { PageHead, Header, Footer, ImageModal, Socials } from "@components";
import { AnimatePresence } from "framer-motion";
import { ViewContext } from "@contexts";
import { useRouter } from "next/router";
import { changeTheme } from "@utils";
import { Theme } from "src/types";
import { theme } from "src/constants";

interface Props {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
  fixed?: boolean; //prevents scroll
  absolute?: boolean; //allows scroll
  headerType?: string;
  assets?: boolean[];
  initialTheme?: Theme;
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    fixed = false,
    absolute = false,
    headerType,
    children,
    assets = [],
    initialTheme,
    header = true,
    footer = true,
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

  useEffect(() => {
    // Set initial theme on the client side
    if (initialTheme) {
      changeTheme(initialTheme);
    } else {
      changeTheme(theme[0]);
    }
  });

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

        {header && <Header type={headerType} />}
        <main
          className={`max-w-1920 inner-left-padding outer-right-padding flex flex-col h-full w-full`}
        >
          {children}
          {footer && (
            <Socials
              className={`hidden xl:block absolute outer-left-spacing z-10 ${
                router.pathname === "/" ? "bottom-[140px]" : "top-[85vh]"
              }`}
            />
          )}
        </main>
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
