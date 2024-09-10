import { PageLayout, SlimesStudioItemView } from "@components";
import { slimesStudio } from "@constants";
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

  return (
    <PageLayout headerType="absolute" initialTheme={initialTheme}>
      <SlimesStudioItemView currentIndex={currentIndex} item={item} />
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
