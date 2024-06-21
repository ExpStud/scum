import { useRouter } from "next/router";
import {
  Heading,
  ImageShimmer,
  PageLayout,
  SlimeGraphics,
  SlimeNav,
} from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation, collection } from "@constants";
import { GetServerSideProps, NextPage } from "next";
import { Collection } from "@types";
import Image from "next/image";

type Props = {
  currentIndex: number;
  item: Collection;
};

const SlimePage: NextPage<Props> = (props: Props) => {
  const { currentIndex, item } = props;

  const router = useRouter();
  const { name } = router.query;

  return (
    <PageLayout headerType="absolute">
      <motion.div
        className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 xl:pt-10 xl:pb-32"
        {...midEnterAnimation}
      >
        <Heading />
        <SlimeNav currentIndex={currentIndex} />
        {/* content */}
        <div className="flex flex-col gap-5 xl:gap-10 mx-5 xl:mx-0 max-w-[720px] 2xl:max-w-[920px] mt-10">
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

  return {
    props: {
      currentIndex,
      item,
    },
  };
};
export default SlimePage;
