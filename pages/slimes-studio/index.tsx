import { SlimesStudioView, PageLayout } from "@components";
import { getTheme } from "@utils";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Theme } from "src/types";

const Family: NextPage<{ initialTheme: Theme }> = ({ initialTheme }) => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout
      headerType="absolute"
      assets={assets}
      initialTheme={initialTheme}
      footer
      metatitle="Scum - Slimes Studio | Explore the Slimes Studio and its unique creations."
      metadescription="Discover Scum's Slimes Studio, a showcase of unique digital art pieces on Solana. Explore the art and learn about the creative process behind each piece."
    >
      <SlimesStudioView setAssets={setAssets} />
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

export default Family;
