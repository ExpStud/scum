import { Dispatch, SetStateAction, FC, useState } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation, sfc } from "@constants";
import { SFC } from "@types";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const FamilyView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  // const src = `${process.env.cloudflareStorage}/images/sfc/low-res/${item.src}`;
  return (
    <motion.div
      className="page-start gap-0 mt-[86px] xl:mt-0 xl:py-10"
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

      <Gallery data={sfc.filter((item) => item.season === 1)} />
      <Gallery data={sfc.filter((item) => item.season === 1)} />
    </motion.div>
  );
};

interface GalleryProps {
  data: SFC[];
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { data } = props;

  const [index, setIndex] = useState<number>(0);
  const [items, setItems] = useState<SFC[]>([]);

  const diplayItems = 4;

  const handlePrevious = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      let newItems = data.slice(newIndex, newIndex + diplayItems);
      //account for missing items at end
      if (newItems.length < diplayItems) {
        newItems = [
          ...newItems,
          ...data.slice(0, diplayItems - newItems.length),
        ];
      }
      setItems(newItems);
      return newIndex;
    });
  };
  const handleNext = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
      let newItems = data.slice(newIndex, newIndex + diplayItems);
      //account for missing items at end
      if (newItems.length < diplayItems) {
        newItems = [
          ...newItems,
          ...data.slice(0, diplayItems - newItems.length),
        ];
      }
      setItems(newItems);
      return newIndex;
    });
  };

  console.log("items ", items);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-2 w-full">
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
        <p className="font-forma-medium text-2xl xl:text-[40px] whitespace-nowrap">
          {index + 1}
          <span className="opacity-50">/{data.length}</span>
        </p>
      </div>
      <div className="flex">
        {items.map((item, index) => (
          <div className="" key={index}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyView;
