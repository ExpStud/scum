import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, CycleState, motion } from "framer-motion";
import { IconBar, NavItem } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { fadeVariants } from "@constants";
import { useOutsideAlerter } from "@hooks";

interface Props {
  toggleMenu: () => void;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open } = props;

  const [winWidth] = useWindowSize();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const ref = useRef(null);

  // useOutsideAlerter(ref, () => toggleMenu());

  const isTablet: boolean = winWidth < 1024;
  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (open) {
      timeoutRef.current = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 700);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.aside
          key="main-menu"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isTablet ? winWidth : 669, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.5 },
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className="bg-primary fixed top-0 right-0 z-50 h-screen"
          ref={ref}
        >
          <motion.div
            className={`relative mt-[15vh] px-6 sm:px-6 lg:px-10 py-6 flex flex-col`}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavItem href="/about">About</NavItem>
            <NavItem href="/slimes">Slimes</NavItem>
            <NavItem href="/maquina">Maquina Muertes</NavItem>
            <NavItem href="/family">Family</NavItem>
            <NavItem href="/axolotls">Axolotls</NavItem>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Menu;
