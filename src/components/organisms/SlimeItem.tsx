import { FC, useState } from "react";
import { ImageShimmer } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";
import { Collection } from "src/types";
import Link from "next/link";

interface SlimeItemProps {
  item: Collection;
}
const SlimeItem: FC<SlimeItemProps> = (props: SlimeItemProps) => {
  const { item } = props;
  const [didHover, setDidHover] = useState<boolean>(false);

  const formatId = (id: number) => String(id).padStart(3, "0");

  return (
    <Link
      href={`/slimes/${item.tag}`}
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <ImageShimmer
        src={`${process.env.CLOUDFLARE_STORAGE}/images/slimes/low-res/${item.tag}.jpg`}
        width={400}
        height={400}
        alt={item.name}
        className="rounded-br-[50px]"
      />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            {...fastExitAnimation}
            key={item.id}
            className="absolute inset-0 h-full w-full bg-scum-black/50 backdrop-blur-sm text-scum-beige-500 rounded-br-[50px] 
              p-4 uppercase"
          >
            <p>{item.name}</p>
            <p className="opacity-70 -mt-1">NO. {formatId(item.id + 1)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};
export default SlimeItem;
