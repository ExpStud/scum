import { FC, useState } from "react";
import { Logo, Menu, MenuIcon } from "@components";
import { AnimatePresence, useCycle } from "framer-motion";

const HeaderContent: FC = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="w-screen flex items-center justify-between px-4 md:px-6 py-4 z-20">
      <Logo />

      <MenuIcon
        animate={open}
        onClick={() => cycleOpen()}
        className="!z-[100]"
      />

      <Menu toggleMenu={() => cycleOpen()} open={open} />
    </div>
  );
};
export default HeaderContent;
