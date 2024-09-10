import { useRouter } from "next/router";
import {
  Heading,
  PageLayout,
  SlimeGraphics,
  SlimeNav,
  SlimesItemView,
} from "@components";
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
      <SlimesItemView
        currentIndex={currentIndex}
        item={item}
        name={name}
        formatId={formatId}
      />
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
