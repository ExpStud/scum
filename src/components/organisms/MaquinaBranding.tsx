import { HTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MaquinaBranding: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <motion.div
      key="branding"
      className="w-full flex flex-col gap-5"
      {...fastExitAnimation}
    >
      <div className="h-5 absolute-x overflow-hidden">
        <div className="w-[300px] h-5 left-[600px] top-0 absolute bg-[#ffb093]" />
        <div className="w-[300px] h-5 left-[900px] top-0 absolute bg-[#f6efd3]" />
        <div className="w-[300px] h-5 left-[1800px] top-0 absolute bg-[#ffb093]" />
        <div className="w-[300px] h-5 left-[2100px] top-0 absolute bg-[#f6efd3]" />
        <div className="w-[300px] h-5 left-[1200px] top-0 absolute bg-[#73eec5]" />
        <div className="w-[300px] h-5 left-[1500px] top-0 absolute bg-[#2c2524]" />
        <div className="w-[300px] h-5 left-0 top-0 absolute bg-[#73eec5]" />
        <div className="w-[300px] h-5 left-[300px] top-0 absolute bg-[#2c2524]" />
      </div>
      <h3 className="mt-20">branding</h3>
      <p className="font-forma-medium">
        Creating the Slimes branding is a labor of love.
      </p>
      <p className="font-forma-medium max-w-[600px]">
        It&apos;s been riffed on, remixed and reimagined. But it&apos;s strong
        foundation has made it unmistakable at every step.
      </p>
      <div className="flex items-center justify-center flex-wrap w-full h-20 bg-[#2c2524]/30 rounded-tl-[40px] rounded-br-[40px] my-20 font-forma-extrabold text-xs md:text-base 2xl:text-2xl whitespace-nowrap">
        <p>SLIMES DESIGN</p>
        <span className="maquina-dot">•</span>
        <p>MEXICAN MID-CENTURY</p>
        <span className="maquina-dot">•</span>
        <p>XICANO FUTURISM </p>
        <span className="maquina-dot">•</span>
        <p>COMIC BOOK</p>
      </div>
    </motion.div>
  );
};

export default MaquinaBranding;
