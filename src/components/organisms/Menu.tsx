import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconBar, NavItem } from "@components";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import { menuVariants, navChild } from "@constants";
import { isMobile } from "react-device-detect";

interface Props {
  toggleMenu: () => void;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open } = props;
  const [winWidth] = useWindowSize();
  //stop page scroll (when modal or menu open)
  useLockBodyScroll(open);

  const isTablet: boolean = winWidth > 640;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.aside
          key="main-menu"
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isTablet ? 420 : winWidth,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{
            width: 0,
            transition: { duration: 0.2 },
            opacity: 1,
          }}
          className="xl:hidden bg-primary fixed top-0 right-0 z-50 h-screen"
        >
          <motion.div
            className={`relative mt-[15vh] px-6 sm:px-6 lg:px-10 py-6 flex flex-col gap-10`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col">
              <NavItem href="/about">About</NavItem>
              <NavItem href="/slimes">Slimes</NavItem>
              <NavItem href="/maquina">Maquina Muertes</NavItem>
              <NavItem href="/slimes-studio">Slimes Studio</NavItem>
              <NavItem href="/axolotl">Axolotls</NavItem>
              <NavItem href="/family">Family</NavItem>
            </div>

            <div className="flex flex-col gap-1">
              <motion.div
                variants={navChild(isMobile)} //isMobile
              >
                <a
                  href="https://exchange.art/scum/on-sale"
                  target="_blank"
                  rel="noreferrer"
                  className=" opacity-50 hover-opacity-75"
                >
                  Exchange.art <span className="font-inter">↗</span>
                </a>
              </motion.div>
              <motion.div
                variants={navChild(false)} //isMobile
              >
                <a
                  href="https://allintime.xyz/"
                  target="_blank"
                  rel="noreferrer"
                  className=" opacity-50 hover-opacity-75"
                >
                  Shop All In Time <span className="font-inter">↗</span>
                </a>
              </motion.div>
            </div>

            <motion.div variants={navChild(false)}>
              <IconBar />
            </motion.div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Menu;
