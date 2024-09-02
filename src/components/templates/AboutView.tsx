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
      <AnimateWrapper animate={isInView}>
        <Heading />
        <Image
          src={`/images/about/scum${!isDekstop ? "-sm" : ""}.jpg`}
          width={1240}
          height={661}
          alt="Scum"
          className={"md:px-5 xl:px-0 lg:rounded-br-[100px] lg:pt-20"}
        />
        <div className="intro-text-container mx-5 xl:!ml-0">
          <h2>scum</h2>
          <p className="intro-text">
            I am a Mexican-American artist from Arizona. I grew up drawing--
            Robots, aliens, space battles and monsters. In my teens I graduated
            to spray painting canals and street signs in a small drug addled
            rural town just outside Tucson. Later I became more integrated with
            the graffiti scene. Learning from and rubbing elbows with UK and RBK
            members. My outlet was primarily stickers, markers and screen
            printing. But after my first arrest I gave up vandalism for graphic
            design.
          </p>
        </div>

        <div className="about-cards-container">
          <Image
            src={`/images/about/card-1.jpg`}
            width={400}
            height={369}
            alt="All in Time"
            className="about-cards-1"
          />
          <Image
            src={`/images/about/card-2.jpg`}
            width={400}
            height={369}
            alt="All in Time 2"
            className="about-cards-1"
          />
          <Image
            src={`/images/about/card-3.jpg`}
            width={400}
            height={369}
            alt="New Slimes"
            className="about-cards-1"
          />
          <Image
            src={`/images/about/card-4.jpg`}
            width={400}
            height={369}
            alt="All in Time 3"
            className="about-cards-1"
          />
        </div>

        <div className="self-center col-start gap-8 my-10 mx-5 xl:!ml-0 font-forma-medium max-w-[550px] text-lg lg:text-xl">
          <p>
            My homies and I would screen print in a shed my dad built for us in
            the back yard. We&apos;d show up as a squad to swap-meets and car
            shows. But as most businesses do, we ultimately gave up after a
            while. What followed was about a decade of freelance graphic design
            and photography.
          </p>

          <p>
            In the years leading up to my introduction to web3 I was a
            self-employed freelance designer specializing in brand development
            and marketing. Here I grew my understanding of communication,
            effective design and a fascination with the philosophy of design.
          </p>
        </div>

        <div className="about-cards-container">
          <Image
            src={`/images/about/card-5.jpg`}
            width={425}
            height={425}
            alt="Panda"
            className="about-cards-2"
          />
          <Image
            src={`/images/about/card-6.jpg`}
            width={425}
            height={425}
            alt="Slime"
            className="about-cards-2"
          />
          <Image
            src={`/images/about/card-7.jpg`}
            width={425}
            height={425}
            alt="Art"
            className="about-cards-2"
          />
        </div>
        <div className="self-center col-start gap-5 my-10 mx-5 xl:!ml-0 font-forma-medium max-w-[550px] text-lg lg:text-xl">
          <p>
            In my short career in web3, I have had a successful 1:1 art career,
            I&apos;ve worked for the (former) top projects on solana and built a
            large platform and following for my illustrations.
          </p>

          <p>
            Now I own an art firm (Slimes Studio), manage a large community (My
            Slimes) and work with a tech and environmental company that I
            founded in Mexico City (Somos Axolotl).
          </p>
        </div>
      </AnimateWrapper>
    </motion.div>
  );
};

export default AboutView;
