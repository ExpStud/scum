import { FC } from "react";
import { Logo, MarqueeTextAnimation, Menu, MenuIcon } from "@components";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { midExitAnimation } from "@constants";

const HeaderContent: FC = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="w-screen z-20 overflow-hidden ">
      <MarqueeTextAnimation />
      <div className="flex items-center justify-between w-full px-4 pt-2 pb-3 ">
        <Logo className="z-[100]" />

        <MenuIcon
          animate={open}
          onClick={() => cycleOpen()}
          className="!z-[100] xl:hidden"
        />

        <Menu toggleMenu={() => cycleOpen()} open={open} />

        {/* background shadow */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="z-0 fixed inset-0 bg-black/50 xl:hidden "
              onClick={() => cycleOpen()}
              {...midExitAnimation}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="h-[1px] bg-scum-beige/10 w-full"></div>
    </div>
  );
};
export default HeaderContent;
