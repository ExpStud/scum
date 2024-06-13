import { FC } from "react";
import { Logo, Menu, MenuIcon } from "@components";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { midExitAnimation } from "@constants";

const HeaderContent: FC = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="w-screen flex items-center justify-between px-4 md:px-6 py-4 z-20">
      <Logo className="z-[100]" />

      <MenuIcon
        animate={open}
        onClick={() => cycleOpen()}
        className="!z-[100]"
      />

      <Menu toggleMenu={() => cycleOpen()} open={open} />

      {/* background shadow */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-0 fixed inset-0 bg-black/50 "
            onClick={() => cycleOpen()}
            {...midExitAnimation}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default HeaderContent;
