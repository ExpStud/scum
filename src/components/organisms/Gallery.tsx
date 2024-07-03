import { FC, useState, useRef } from "react";
import { SFC } from "@types";
import { useWindowSize } from "@hooks";
import { GalleryItem } from "@components";

interface GalleryProps {
  header: string;
  data: SFC[];
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { header, data } = props;

  const [galleryIndex, setGalleryIndex] = useState<number>(0);

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

export default Gallery;
