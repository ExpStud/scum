import { Dispatch, SetStateAction, FC, useRef } from "react";
import Image from "next/image";
import { AnimateWrapper, Heading } from "@components";
import { useWindowSize } from "src/hooks";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [winWidth] = useWindowSize();
  const isDekstop = winWidth > 1024;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-32"
      {...midEnterAnimation}
      ref={ref}
    >
      <h1 className="sr-only">About</h1>
      <AnimateWrapper animate={isInView}>
        <Heading />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/scum-${
            !isDekstop ? "lg" : "lg"
          }.jpg`}
          width={1240}
          height={661}
          alt="Scum"
          className={"md:px-5 xl:px-0 lg:rounded-br-[100px] lg:pt-20"}
        />
        <div className="intro-text-container mx-5 xl:!ml-0">
          <h2>scum</h2>
          <p className="intro-text">
            Matt “Scum” Martinez is a Mexican-American artist from Arizona. He
            grew up with a pencil in his hands, drawing robots, aliens, space
            battles, and monsters. In his teens, he graduated to graffiti,
            spray-painting canals and street signs in the small, drug-addled
            rural town just outside of Tucson where he grew up. After eventually
            being arrested, he turned his passion for visual communication to
            graphic design for nearly a decade.
          </p>
          <p className="intro-text">
            Today, he is an accomplished illustrator and designer, exploring
            through his art his past, childhood, and ethnicity, seeking answers
            to one of life’s biggest questions: Where do we belong?
          </p>
        </div>

        <div className="about-cards-container md:!gap-2">
          <div className="relative w-full xs:w-[266px] h-[300px] xs:h-auto xs:aspect-[266/369]">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-4.jpg`}
              fill
              alt="All in Time 3"
              className="about-cards-1"
            />
          </div>
          <div className="relative w-full xs:w-[282px] h-[300px] xs:h-auto xs:aspect-[282/369]">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-2.jpg`}
              fill
              alt="All in Time 2"
              className="about-cards-1"
            />
          </div>
          <div className="relative w-full xs:w-[369px] h-[369px] xs:h-auto xs:aspect-square hidden sm:flex">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-3.jpg`}
              fill
              alt="New Slimes"
              className="about-cards-1"
            />
          </div>
          <div className="relative w-full xs:w-[276px] h-[369px] xs:h-auto xs:aspect-[275/369] hidden md:flex">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-1.jpg`}
              fill
              alt="All in Time"
              className="about-cards-1"
            />
          </div>
        </div>

        <div className="self-center col-start gap-8 my-10 mx-5 xl:!ml-0 font-forma-medium max-w-[550px] text-lg lg:text-xl">
          <p>
            In the years leading up to my introduction to Web3, I was a
            self-employed freelance designer specializing in brand development
            and marketing. During this time, I grew my understanding of
            communication, effective design, and developed a fascination with
            the philosophy of design.
          </p>
        </div>

        <div className="about-cards-container">
          <div className="relative w-full xs:w-[329px] h-[300px] xs:h-auto xs:aspect-[329/425]">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-5.jpg`}
              fill
              alt="Panda"
              className="about-cards-2"
            />
          </div>
          <div className="relative w-full xs:w-[425px] h-[300px] xs:h-auto xs:aspect-square">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-6.jpg`}
              fill
              alt="Slime"
              className="about-cards-2"
            />
          </div>
          <div className="relative w-full xs:w-[425px] h-[425px] xs:h-auto xs:aspect-square hidden sm:flex">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/about/card-7.jpg`}
              fill
              alt="Art"
              className="about-cards-2"
            />
          </div>
        </div>
        <div className="self-center col-start gap-5 my-10 mx-5 xl:!ml-0 font-forma-medium max-w-[550px] text-lg lg:text-xl">
          <p>
            Since discovering Solana, NFTs, and Web3, I have finally begun to
            find my voice in what I would consider my first real passion:
            illustration.
          </p>

          <p>
            During this journey, I have been able to bring a group of friends
            together into a collective we call Slimes Studio, taking on clients
            who want unique branding, brand voice, and illustrative work. I’ve
            also started a clothing brand called All In Time, as well as an NGO
            and sculpture series in Mexico City called Somos Axolotl.
          </p>
        </div>
      </AnimateWrapper>
    </motion.div>
  );
};

export default AboutView;
