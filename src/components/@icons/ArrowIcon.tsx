import { FC } from "react";
import { motion } from "framer-motion";

interface Props extends React.SVGProps<SVGSVGElement> {
  animate?: boolean;
  direction?: "up" | "down" | "left" | "right";
  pathClass?: string;
  scale?: number;
}

const ArrowIcon: FC<Props> = (props: Props) => {
  const { animate = false, direction, pathClass, scale } = props;

  const initial =
    direction === "up"
      ? 180
      : direction === "left"
      ? 90
      : direction === "right"
      ? 270
      : 0;

  const rotate = direction === "right" ? 360 : -180;

  const arrowVariants = {
    start: {
      scale: scale ?? 1,
      rotate: initial,
      transition: {
        duration: 0.3,
      },
    },
    end: {
      scale: scale ?? 1,
      rotate: rotate,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    // <motion.svg
    //   width="9"
    //   height="6"
    //   viewBox="0 0 9 6"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   animate={animate ? "end" : "start"}
    //   variants={arrowVariants}
    //   className={props.className}
    // >
    //   <path
    //     d="M4.07129 5.28809C3.89844 5.28809 3.74023 5.21777 3.59668 5.07715L0.287598 1.69336C0.231934 1.63477 0.189453 1.57178 0.160156 1.50439C0.133789 1.43701 0.120605 1.3623 0.120605 1.28027C0.120605 1.17187 0.146973 1.07227 0.199707 0.981445C0.252441 0.890625 0.322754 0.818848 0.410645 0.766113C0.501465 0.713379 0.601074 0.687012 0.709473 0.687012C0.873535 0.687012 1.01709 0.74707 1.14014 0.867188L4.27344 4.08398H3.87354L6.99805 0.867188C7.12109 0.74707 7.26465 0.687012 7.42871 0.687012C7.53711 0.687012 7.63525 0.713379 7.72314 0.766113C7.81396 0.818848 7.88574 0.890625 7.93848 0.981445C7.99121 1.07227 8.01758 1.17187 8.01758 1.28027C8.01758 1.44141 7.96045 1.57764 7.84619 1.68896L4.5459 5.07715C4.47559 5.14746 4.40088 5.2002 4.32178 5.23535C4.24561 5.26758 4.16211 5.28516 4.07129 5.28809Z"
    //     fill="#FFFEF3"
    //     className={`opacity-85 ${pathClass}`}
    //   />
    // </motion.svg>

    <motion.svg
      width="21"
      height="25"
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={animate ? "end" : "start"}
      variants={arrowVariants}
      className={props.className}
    >
      <path
        d="M11.9915 0.727272V19.4091L19.1733 12.2045L20.946 13.9545L10.7415 24.1364L0.559659 13.9545L2.28693 12.2045L9.49148 19.4091V0.727272H11.9915Z"
        fill="#F6EFD3"
        className={`opacity-50 ${pathClass}`}
      />
    </motion.svg>
  );
};

export default ArrowIcon;
