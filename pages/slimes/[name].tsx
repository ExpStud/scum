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

  return (
    <PageLayout headerType="absolute" initialTheme={initialTheme}>
      <motion.div
        className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 xl:pt-10 xl:pb-32"
        {...midEnterAnimation}
      >
        <Heading />
        <SlimeNav currentIndex={currentIndex} />
        {/* content */}
        <div className="flex flex-col gap-5 xl:gap-10 mx-5 xl:mx-0 text-container-width mt-10">
          <h2>{name}</h2>
          <p className="intro-text max-w-[920px]">{item?.description}</p>
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
