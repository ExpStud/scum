import {
  Dispatch,
  SetStateAction,
  FC,
  useState,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import { Heading } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation, sfc } from "@constants";
import { SFC } from "@types";
import { useWindowSize } from "src/hooks";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const FamilyView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <motion.div
      className="page-start mt-[86px] xl:mt-0 xl:py-10 gap-5 "
      {...midEnterAnimation}
    >
      <Heading />
      <div className="flex flex-col lg:flex-row justify-start w-full mb-10 xl:mb-20">
        <div className="col-start gap-8 my-10 mx-5 xl:!ml-0 max-w-[530px] 2xl:max-w-[600px]">
          <h2 className="whitespace-nowrap">meet the family</h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl  font-forma-medium">
            We have extended our community through a series of artworks lovingly
            known as the Slimes Family Collection.
          </p>
          <p className="text-lg lg:text-xl 2xl:text-2xl font-forma-medium">
            We&apos;ve been blessed to have some of our favorite artists in the
            space creating beautiful works inspired by the slimes world,
            axolotls and renditions of the characters themselves.
          </p>
        </div>
        <Image
          src="/images/family/hands.png"
          width={300}
          height={300}
          alt="Hands"
          className="rotate-6 lg:-mb-20 lg:ml-[10%] self-center lg:self-end"
        />
      </div>

      <Gallery
        header="season 2"
        data={sfc.filter((item) => item.season === 2)}
      />

      <Gallery
        header="season 1"
        data={sfc.filter((item) => item.season === 1)}
      />
    </motion.div>
  );
};

interface GalleryProps {
  header: string;
  data: SFC[];
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { header, data } = props;
  const diplayItems = data.length;

  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [items, setItems] = useState<SFC[]>(
    data.slice(galleryIndex, galleryIndex + diplayItems)
  );

  const [winWidth] = useWindowSize();

  const imageHeight = winWidth >= 1280 ? 500 : winWidth >= 640 ? 400 : 300;

  const prevIndex = useRef<number>(0);

  const handlePrevious = () => {
    setGalleryIndex((_prevIndex) => {
      const newIndex = _prevIndex === 0 ? 0 : _prevIndex - 1;
      prevIndex.current = _prevIndex;
      return newIndex;
    });
  };
  const handleNext = () => {
    setGalleryIndex((_prevIndex) => {
      const newIndex =
        _prevIndex === data.length - 1 ? data.length - 1 : _prevIndex + 1;

      prevIndex.current = _prevIndex;
      return newIndex;
    });
  };

  const calculateOffset = (
    index: number,
    items: SFC[],
    gap: number,
    height: number
  ) => {
    let offset = 0;

    for (let i = 0; i < index; i++) {
      const item = items[i];
      let itemWidth;

      if (item.aspect === "wide") {
        itemWidth = 1.5 * imageHeight;
      } else if (item.aspect === "long") {
        itemWidth = (1 / 1.75) * imageHeight;
      } else {
        itemWidth = imageHeight; // for "aspect-square"
      }

      offset += itemWidth + gap;
    }

    return -offset; // return as negative to move items to the left
  };

  return (
    <div className="pl-5 xl:pl-0 relative w-full z-20 overflow-hidden">
      <h4 className="mb-5">{header}</h4>

      <div className="w-full ">
        <div className="flex justify-between items-center gap-2 w-full mb-5">
          <div className="flex gap-2">
            <button
              className="slimes-button-round"
              onClick={() => handlePrevious()}
            >
              ←
            </button>
            <button
              className="slimes-button-round  "
              onClick={() => handleNext()}
            >
              →
            </button>
          </div>
          <hr className="flex-grow border-t border-dotted border-black/40 mr-2 w-full" />
          <p className="font-forma-medium text-2xl xl:text-[40px] whitespace-nowrap w-[100px] flex items-end justify-end mr-2.5">
            {galleryIndex + 1}
            <span className="opacity-50">/{data.length}</span>
          </p>
        </div>
        <div className="flex gap-5 overflow-hidden">
          {data.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              direction={prevIndex.current > index ? "left" : "right"}
              // currentItem={galleryIndex}
              offset={calculateOffset(galleryIndex, data, 20, imageHeight)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface GalleryItemProps {
  item: SFC;
  direction: "left" | "right";
  offset: number;
}
const GalleryItem: FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { offset, item } = props;

  console.log("offset ", offset);
  // Calculate the offset based on the current item index
  // const offset = currentItem * -500;

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
        <span className="text-[#FFB094]">{item.artist} ↗</span>
      </a>
    </motion.div>
  );
};

export default FamilyView;
