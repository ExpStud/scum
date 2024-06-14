import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "src/hooks";

const MarqueeTextAnimation: FC = () => {
  const [numRepeats, setNumRepeats] = useState(0);
  const textWidth = 150; // Approximate width of the text in pixels
  const gap = 50; // Gap between each instance of the text

  const [winWidth] = useWindowSize();

  useEffect(() => {
    // Calculate the number of times the text should be repeated
    const width = winWidth;
    setNumRepeats(Math.ceil(width / (textWidth + gap)));
  }, [winWidth]);

  const marqueeText = "THE WHOLE SQUAD HERE AND EVERYBODY EATS";

  return (
    <div className="relative opacity-50 font-forma-medium text-sm pt-2 h-8 overflow-hidden">
      <motion.div
        className="h-full flex items-center justify-center absolute top-0"
        initial={{ x: "0%" }} // Start from the right edge of the text
        animate={{ x: "-100%" }} // Move to the left edge of the text
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {Array(numRepeats)
          .fill(marqueeText)
          .map((text, i) => (
            <div
              key={i}
              className="flex justify-center items-center mr-10 whitespace-nowrap"
            >
              <p>{text}</p>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-11"
              >
                <path
                  d="M2.541 3.02H0.286C0.242 3.02 0.198 2.976 0.198 2.932V0.49C0.198 0.446 0.242 0.402 0.286 0.402H2.541C2.585 0.402 2.629 0.446 2.629 0.49V2.932C2.629 2.976 2.585 3.02 2.541 3.02Z"
                  fill="#2C2524"
                  fillOpacity="0.5"
                  className="fill-secondary"
                />
              </svg>
            </div>
          ))}
      </motion.div>
      <motion.div
        className="h-full overflow-hidden flex items-center font-karantina absolute top-0"
        initial={{ x: "100%" }} // Start from the right edge of the text
        animate={{ x: "0%" }} // Move to the left edge of the text
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {Array(numRepeats)
          .fill(marqueeText)
          .map((text, i) => (
            <div
              key={i}
              className="flex justify-center items-center mr-10 whitespace-nowrap"
            >
              <p>{text}</p>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-11"
              >
                <path
                  d="M2.541 3.02H0.286C0.242 3.02 0.198 2.976 0.198 2.932V0.49C0.198 0.446 0.242 0.402 0.286 0.402H2.541C2.585 0.402 2.629 0.446 2.629 0.49V2.932C2.629 2.976 2.585 3.02 2.541 3.02Z"
                  fill="#2C2524"
                  fillOpacity="0.5"
                  className="fill-secondary"
                />
              </svg>
            </div>
          ))}
      </motion.div>
    </div>
  );
};
export default MarqueeTextAnimation;
