import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useEffect,
  useState,
} from "react";
import { AnimateWrapper, Heading, SlimeItem } from "@components";
import { motion, useInView } from "framer-motion";
import { midEnterAnimation, collection } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const SlimesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [didMount, setDidMount] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    // Retrieve the scroll position from local storage
    const scrollPosition = sessionStorage.getItem("slimesScrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, JSON.parse(scrollPosition)); // Restore the scroll position
      sessionStorage.removeItem("slimesScrollPosition"); // Clear the stored position
    }
  }, [didMount]);

  return (
    <motion.div
      className="page-start gap-5 lg:gap-10 mt-[86px] xl:mt-0 lg:pt-10 lg:pb-24"
      {...midEnterAnimation}
      ref={ref}
    >
      <AnimateWrapper animate={isInView}>
        <Heading />
        <div className="intro-text-container mx-5 xl:!ml-0 pt-10">
          <h2>The Squad</h2>
          <p className="intro-text">
            Slimes are a community of art collectors who&apos;ve rallied around
            Scum to support and amplify him in his efforts as an artist and
            activist.
          </p>
          <p className="intro-text">
            These characters act as their respective holder&apos;s identity on
            social media as well as a membership to this tight-knit community.
            But most importantly, these characters are just the beginning of a
            larger story being told in the Maquina Muertes series.
          </p>
        </div>
        {/* slimes */}
        <div className="flex items-center w-full px-5 xl:px-0 py-5 xl:pb-12">
          <hr className="flex-grow border-t border-dotted border-black/40 mr-2 w-full" />
          <div className="whitespace-nowrap font-forma-medium text-2xl lg:text-4xl 2xl:text-5xl">
            {collection.length}/<span className="opacity-50">50</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 bg-scum-black">
          {collection.map((slime, i) => (
            <SlimeItem key={i} item={slime} />
          ))}
        </div>
      </AnimateWrapper>
    </motion.div>
  );
};

export default SlimesView;
