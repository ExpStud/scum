import { PageLayout, LandingView } from "@components";
import { getTheme } from "@utils";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Theme } from "src/types";

const Home: NextPage<{ initialTheme: Theme }> = ({ initialTheme }) => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [showView, setShowView] = useState<boolean>(false);

  return (
    <PageLayout
      fixed
      assets={assets}
      initialTheme={initialTheme}
      footer={showView}
      header={showView}
      animateHeader={true}
      showLines={showView}
    >
      <LandingView
        setAssets={setAssets}
        showView={showView}
        setShowView={setShowView}
      />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pathname = context.resolvedUrl;
  const initialTheme = getTheme(pathname);

  return {
    props: {
      initialTheme,
    },
  };
};

export default Home;
