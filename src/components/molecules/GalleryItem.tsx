import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SFC } from "@types";

interface GalleryItemProps {
  item: SFC;
  direction: "left" | "right";
  offset: number;
}
const GalleryItem: FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { offset, item } = props;
  return (
    <motion.div
      className="flex flex-col gap-5"
      initial={{ x: 0 }}
      animate={{ x: offset }} // Apply the offset here
      transition={{ duration: 0.4 }}
    >
      <div
        className={`relative h-[300px] sm:h-[400px] xl:h-[500px] ${
          item.aspect === "wide"
            ? "aspect-[1.5/1]"
            : item.aspect === "long"
            ? "aspect-[1/1.75]"
            : "aspect-square"
        }`}
      >
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/sfc/low-res/${item.src}`}
          alt={item.name}
          fill
          className={`about-cards w-full`}
        />
      </div>
      <h3>{item.name}</h3>
      <p className="text-lg xl:text-2xl max-w-[500px] text-ellipsis mr-10 line-clamp-6">
        {item.description}
      </p>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="text-sm lg:text-sm uppercase"
      >
        <span className="opacity-50">artist:</span>{" "}
        <span className="text-[#FFB094]">
          {item.artist} <span className="font-sans">↗</span>
        </span>
      </a>
    </motion.div>
  );
};

export default GalleryItem;
