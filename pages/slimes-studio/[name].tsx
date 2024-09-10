import { useRouter } from "next/router";
import { Heading, PageLayout } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation, slimesStudio } from "@constants";
import { GetServerSideProps, NextPage } from "next";
import { SlimesStudio, Theme } from "@types";
import { getTheme } from "@utils";

type Props = {
  currentIndex: number;
  item: SlimesStudio;
  initialTheme: Theme;
};

const SlimePage: NextPage<Props> = (props: Props) => {
  const { currentIndex, item, initialTheme } = props;

  const router = useRouter();
  const { name } = router.query;

  return (
    <PageLayout headerType="absolute" initialTheme={initialTheme}>
      <motion.div
        className="page-start gap-5 lg:gap-10 mt-[86px] lg:mt-0 lg:pt-10 lg:pb-44"
        {...midEnterAnimation}
      >
        <Heading />
        name: {name}
      </motion.div>
    </PageLayout>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const name = context.params?.name as string;
  const currentIndex = slimesStudio.findIndex((item) => item.pathname === name);
  const item = currentIndex >= 0 ? slimesStudio[currentIndex] : slimesStudio[0];

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
