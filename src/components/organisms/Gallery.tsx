import { FC, useState, useRef, useEffect } from "react";
import { SFC } from "@types";
import { useWindowSize } from "@hooks";
import { GalleryItem } from "@components";

interface GalleryProps {
  header: string;
  initialData: SFC[];
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { header, initialData } = props;

  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [data, setData] = useState<SFC[]>([]);

  const [winWidth] = useWindowSize();

  const imageHeight = winWidth >= 1280 ? 500 : winWidth >= 640 ? 400 : 300;

  const prevIndex = useRef<number>(galleryIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with two sets of initial data
    setData([...initialData, ...initialData]);
  }, [initialData]);

  const handlePrevious = () => {
    setGalleryIndex((_prevIndex) => {
      const newIndex =
        _prevIndex === 0 ? initialData.length - 1 : _prevIndex - 1;
      // Prepend data if moving to the left and at the start
      if (newIndex === initialData.length - 1) {
        setData((prevData) => [...initialData, ...prevData]);
      }

      prevIndex.current = _prevIndex;
      return newIndex;
    });
  };

  const handleNext = () => {
    setGalleryIndex((_prevIndex) => {
      const newIndex =
        _prevIndex === data.length - 1 ? data.length - 1 : _prevIndex + 1;

      // Append data if moving to the right and at the end
      if (newIndex === data.length - 3) {
        setData((prevData) => [...prevData, ...initialData]);
      }

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

      if (item?.aspect === "wide") {
        itemWidth = 1.5 * imageHeight;
      } else if (item?.aspect === "long") {
        itemWidth = (1 / 1.75) * imageHeight;
      } else {
        itemWidth = imageHeight; // for "aspect-square"
      }

      offset += itemWidth + gap;
    }

    return -offset; // return as negative to move items to the left
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      // Load more items when scrolling to the right end
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        setData((prevData) => [...prevData, ...initialData]);
      }

      // Load more items when scrolling to the left end
      if (scrollLeft <= 10) {
        setData((prevData) => [...initialData, ...prevData]);
        container.scrollLeft += initialData.length * imageHeight; // Adjust scroll position
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [initialData, imageHeight]);

  useEffect(() => {
    // Reset data when screen width crosses the lg breakpoint (1024px)
    if (winWidth >= 1024) {
      setData([...initialData, ...initialData]);
      setGalleryIndex(0);
    }
  }, [winWidth, initialData]);

  return (
    <div className="pl-5 xl:pl-0 relative w-full z-20 overflow-hidden">
      <h4 className="mb-5">{header}</h4>

      <div className="w-full">
        <div
          className={`hidden lg:flex justify-between items-center gap-2 w-full mb-5`}
        >
          <div className="flex gap-2 ">
            <button
              className="slimes-button-round"
              onClick={() => handlePrevious()}
            >
              ←
            </button>
            <button
              className="slimes-button-round"
              onClick={() => handleNext()}
            >
              →
            </button>
          </div>
          <hr className="flex-grow border-t border-dotted border-black/40 mr-2 w-full" />
          <p className="font-forma-medium text-2xl xl:text-[40px] whitespace-nowrap w-[100px] flex items-end justify-end mr-2.5">
            {(galleryIndex % initialData.length) + 1}
            <span className="opacity-50">/{initialData.length}</span>
          </p>
        </div>
        <div
          className={`invisible-scrollbar overflow-x-auto lg:overflow-hidden flex gap-5`}
          ref={containerRef}
        >
          {data.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              direction={prevIndex.current > index ? "left" : "right"}
              offset={calculateOffset(galleryIndex, data, 20, imageHeight)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
