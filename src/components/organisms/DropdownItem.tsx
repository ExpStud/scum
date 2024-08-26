import { useCycle, motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { expandHeight, dropdownParent } from "@constants";
import { ArrowIcon } from "@components";
import { AxolotlInfo } from "src/types";

interface ItemProps {
  item: AxolotlInfo;
}
const DropdownItem: FC<ItemProps> = (props: ItemProps) => {
  const { item } = props;
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <div
      className="flex flex-col py-5 border-b border-scum-beige/25 w-full small-px"
      onClick={() => cycleOpen()}
    >
      <div className="flex justify-between items-center w-full xl:pr-5 pt-0.5 cursor-pointer">
        <h4>{item.title}</h4>
        <ArrowIcon animate={open} />
      </div>
      <motion.div {...expandHeight(open)}>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              className={`flex w-full h-full flex-col justify-between gap-10 ${
                item.imgPosition === "left"
                  ? "md:flex-row-reverse"
                  : item.imgPosition === "right"
                  ? "md:flex-row"
                  : ""
              }`}
              variants={dropdownParent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-6 max-w-[600px] pt-5">
                {item.description.map((d, i) => (
                  <p
                    key={i}
                    className="font-forma-medium text-lg xl:text-2xl text-scum-beige/50"
                  >
                    {d}
                  </p>
                ))}
              </div>
              {item.image}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DropdownItem;
