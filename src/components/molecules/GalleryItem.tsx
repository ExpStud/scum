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
        className={`relative w-[90vw] sm:w-auto sm:h-[400px] xl:h-[500px] ${
          item.aspect === "wide"
            ? "aspect-square md:aspect-[1.5/1]"
            : item.aspect === "long"
            ? "aspect-square md:aspect-[1/1.25]"
            : item.aspect === "longer"
            ? "aspect-square md:aspect-[1/1.75]"
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
      <h3 className="line-clamp-1 mt-4">{item.name}</h3>
      <p className="opacity-60 text-sm lg:text-base uppercase -mt-4 font-forma-bold">
        Edition of {item.edition}
      </p>
      <p className="text-lg xl:text-2xl max-w-[500px] text-ellipsis mr-10 line-clamp-3">
        {item.description}
      </p>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 text-sm lg:text-sm uppercase">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-[#FFB094]"
        >
          <span className="text-scum-black/50">artist:</span>{" "}
          <span className="text-[#FFB094]">
            {item.artist} <span className="font-sans">↗</span>
          </span>
        </a>{" "}
        <span className="hidden lg:block font-sans text-[#FFB094]">•</span>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-[#FFB094]"
        >
          buy on exchange.art <span className="font-sans">↗</span>
        </a>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
