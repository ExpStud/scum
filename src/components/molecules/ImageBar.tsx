import { HTMLAttributes, FC, useState, useEffect } from "react";
import { useWindowSize } from "src/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
  extension?: string;
  totalImages: number;
  selected: number;
}

const ImageBar: FC<ImageProps> = (props: ImageProps) => {
  const { path, extension = "jpg", totalImages, selected } = props;

  const [count, setCount] = useState<number>(totalImages);
  const [winWidth] = useWindowSize();

  useEffect(() => {
    setCount(totalImages);
  }, [selected, totalImages]);

  const duration = count * 3;

  const images = new Array(count).fill(null).map((item, i) => (
    <div key={i}>
      <Image
        src={`${path}${i + 1}.${extension}`}
        width={300}
        height={300}
        alt={`Image ${i + 1}`}
        className="rounded-br-[30px] md:rounded-br-[50px] lg:rounded-br-[100px] min-w-[100px] md:min-w-[150px] lg:min-w-[300px] max-h-[300px]"
      />
      {/* <div className="absolute top-4 p-3 rounded-full bg-black ml-10">{i}</div> */}
    </div>
  ));

  return (
    <motion.div
      className="absolute-x inset-x-0 top-0 py-2.5 lg:py-5 flex overflow-hidden bg-scum-black-800/15 z-20"
      {...fastExitAnimation}
    >
      <motion.div
        className="flex "
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images}
      </motion.div>
      <motion.div
        className="flex absolute"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images}
      </motion.div>
    </motion.div>
  );
};

export default ImageBar;
