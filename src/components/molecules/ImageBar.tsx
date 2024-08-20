import { HTMLAttributes, FC, useState, useEffect } from "react";
import { useWindowSize } from "src/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import { fastExitAnimation, midExitAnimation } from "src/constants";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
  extension?: string;
  totalImages?: number;
}

const ImageBar: FC<ImageProps> = (props: ImageProps) => {
  const {
    path,
    extension = "jpg",
    totalImages = 13,
    ...componentProps
  } = props;

  const [charLength, setCharLength] = useState<number>(0);

  const [winWidth] = useWindowSize();
  useEffect(() => {
    if (totalImages < 13) {
      setCharLength(totalImages);
      return;
    }
    if (winWidth > 2160) {
      setCharLength(13);
    } else if (winWidth > 768) {
      setCharLength(9);
    } else {
      setCharLength(5);
    }
  }, [winWidth]);

  return (
    <motion.div
      className="absolute-x inset-x-0 top-0 py-2.5 lg:py-5 flex overflow-hidden bg-scum-black-800/15 z-20"
      {...fastExitAnimation}
    >
      {new Array(charLength).fill(null).map((_, i) => (
        <div key={i} className="">
          <Image
            src={`${path}${i + 1}.${extension}`}
            width={300}
            height={300}
            alt={`Image ${i + 1}`}
            className="rounded-br-[30px] md:rounded-br-[50px] lg:rounded-br-[100px] min-w-[100px] md:min-w-[150px] lg:min-w-[300px] max-h-[300px]"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ImageBar;
