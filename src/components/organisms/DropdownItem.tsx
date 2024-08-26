import { useCycle, motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { expandHeight, dropdownParent } from "@constants";
import { ArrowIcon } from "@components";
import Image from "next/image";

interface ItemProps {
  title: string;
  description: string[];
  src: string;
}
const DropdownItem: FC<ItemProps> = (props: ItemProps) => {
  const { title, description, src } = props;
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <div
      className="flex flex-col py-5 border-b border-scum-beige/25 w-full small-px"
      onClick={() => cycleOpen()}
    >
      <div className="flex justify-between items-center w-full xl:pr-5 pt-0.5 cursor-pointer">
        <h4>{title}</h4>
        <ArrowIcon animate={open} />
      </div>
      <motion.div {...expandHeight(open)}>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              className="flex w-full justify-between gap-5"
              variants={dropdownParent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-6 max-w-[600px] pt-5">
                {description.map((d, i) => (
                  <motion.p
                    key={i}
                    className="font-forma-medium text-lg xl:text-2xl text-scum-beige/50"
                  >
                    {d}
                  </motion.p>
                ))}
              </div>
              <Image
                src={`/images/axolotl/${src}`}
                width={480}
                height={610}
                alt={title}
                className="hidden md:block mt-5 max-w-[480px] max-h-[610px] object-cover rounded-br-[100px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DropdownItem;
