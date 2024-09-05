import { useRouter } from "next/router";
import { Heading, PageLayout, SlimeGraphics, SlimeNav } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation, collection } from "@constants";
import { GetServerSideProps, NextPage } from "next";
import { Collection, Theme } from "@types";
import { getTheme } from "@utils";

type Props = {
  currentIndex: number;
  item: Collection;
  initialTheme: Theme;
};

const SlimePage: NextPage<Props> = (props: Props) => {
  const { currentIndex, item, initialTheme } = props;

  const router = useRouter();
  const { name } = router.query;

  const formatId = (id: number) => String(id).padStart(3, "0");

  return (
    <PageLayout headerType="absolute" initialTheme={initialTheme}>
      <motion.div
        className="page-start gap-5 lg:gap-10 mt-[86px] lg:mt-0 lg:pt-10 lg:pb-44"
        {...midEnterAnimation}
      >
        <Heading />
        <SlimeNav currentIndex={currentIndex} />
        {/* content */}
        <div className="flex flex-col gap-5 xl:gap-10 mx-5 xl:mx-0 text-container-width mt-10">
          <div>
            <h2>{name}</h2>
            <h2 className="opacity-20">My Slime {formatId(item.id + 1)}</h2>
          </div>
          <p className="intro-text max-w-[850px]">{item?.description}</p>
        </div>
        <SlimeGraphics slime={item} />
      </motion.div>
    </PageLayout>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const name = context.params?.name as string;
  const currentIndex = collection.findIndex((item) => item.tag === name);
  const item = currentIndex >= 0 ? collection[currentIndex] : collection[0];

  const pathname = context.resolvedUrl;
  const initialTheme = getTheme(pathname);
  return {
    props: {
      currentIndex,
      item,
      initialTheme,
    },
  };
};
export default SlimePage;
