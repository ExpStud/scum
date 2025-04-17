import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import { AnimateWrapper, Heading } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation, brandKit } from "src/constants";
import { BrandKitItem as BrandKitItemType } from "@types";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const BrandKitView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:pt-10 "
      {...midEnterAnimation}
      ref={ref}
    >
      <AnimateWrapper animate={isInView}>
        <Heading />
        <div className=" flex flex-col gap-5">
          {brandKit.map((category, index) => (
            <div key={index} className="flex flex-col gap-5 mb-14 xl:mb-32">
              <h3 className="small-pl border-b border-scum-black/20 pb-5 mb-10">
                {category.name}
              </h3>
              <div className="beige-scrollbar small-pl flex flex-col gap-10 pb-4 w-full overflow-x-auto">
                {category.name === "Slimes" ? (
                  <>
                    {/* First row with 3 items */}
                    <div className="flex gap-10 max-w-[920px]">
                      {category.items.slice(0, 3).map((item, index) => (
                        <BrandKitItem key={index} data={item} />
                      ))}
                    </div>
                    {/* Second row with 3 items */}
                    <div className="flex gap-10 max-w-[920px]">
                      {category.items.slice(3, 6).map((item, index) => (
                        <BrandKitItem key={index} data={item} />
                      ))}
                    </div>
                    {/* Third row with 4 items */}
                    <div className="grid grid-cols-4 gap-x-10 gap-y-10 min-w-[1240px]">
                      {category.items.slice(6).map((item, index) => (
                        <BrandKitItem key={index} data={item} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex gap-10 w-full">
                    {category.items.map((item, index) => (
                      <BrandKitItem key={index} data={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimateWrapper>
    </motion.div>
  );
};

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  data: BrandKitItemType;
}

const BrandKitItem: FC<ItemProps> = (props: ItemProps) => {
  const { data, ...divProps } = props;

  const [showCheckmark, setShowCheckmark] = useState(false);
  const [buttonText, setButtonText] = useState<string>(data.action);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isBlack = data.backgroundColor === "bg-scum-black-750";
  const isRed = data.backgroundColor === "bg-scum-red";
  const isBeige = data.backgroundColor === "bg-scum-beige";
  const isTeal = data.backgroundColor === "bg-scum-teal";

  const isDownload = data.action === "download";

  const handleClick = () => {
    if (isDownload) {
      // Handle download action
      const fileUrl = data.value; // Assuming `data.value` contains the file URL
      const anchor = document.createElement("a");
      anchor.href = fileUrl;
      anchor.target = "_blank"; // Open in a new tab
      anchor.rel = "noopener noreferrer"; // Security best practice
      anchor.click();
    } else {
      // Handle copy action
      navigator.clipboard.writeText(data.value); // Copy to clipboard

      // Temporarily show the checkmark
      setShowCheckmark(true);
      setButtonText("copied");
      timeoutRef.current = setTimeout(() => {
        setShowCheckmark(false);
        setButtonText(data.action);
      }, 2000);
    }
    // Reset after 2 seconds
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`min-w-[280px] h-[400px] rounded-br-[100px] flex flex-col justify-between p-4  ${
        data.backgroundColor
      } ${isBeige ? "border-2 border-scum-black/30" : ""}`}
      {...divProps}
      onClick={() => handleClick()}
    >
      <div>{data.content}</div>
      <button
        className={`w-[138px] h-[44px] rounded-[22px] font-inter text-base transition-200 bg-opacity-20 
        ${" "}${
          isBlack || isRed
            ? "bg-scum-beige text-scum-beige hover:bg-opacity-15  active:bg-opacity-10"
            : "bg-scum-black-750 hover:bg-opacity-35 active:bg-opacity-45"
        }`}
      >
        {showCheckmark ? "✔" : isDownload ? "↓" : " "} {buttonText}
      </button>
    </div>
  );
};

export default BrandKitView;
