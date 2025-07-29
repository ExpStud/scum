import { AxolotlView, PageLayout } from "@components";
import { getTheme } from "@utils";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Theme } from "src/types";

const Axolotl: NextPage<{ initialTheme: Theme }> = ({ initialTheme }) => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout
      headerType="absolute"
      assets={assets}
      initialTheme={initialTheme}
      metatitle="Scum - Saving the Axolotls"
      metadescription="Learn about Scum's Axolotl project, a conservation effort to help preserve and regenerate what is left of the Axolotl population in Lake Xochimilco."
    >
      <AxolotlView setAssets={setAssets} />
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

export default Axolotl;
