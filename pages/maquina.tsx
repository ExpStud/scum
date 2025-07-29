import { MaquinaView, PageLayout } from "@components";
import { getTheme } from "@utils";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Theme } from "src/types";

const Maquina: NextPage<{ initialTheme: Theme }> = ({ initialTheme }) => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout
      assets={assets}
      initialTheme={initialTheme}
      metatitle="Scum - Maquina Muertes and World Building"
      metadescription="Learn about Scum's Maquina Muertes project, a creative exploration of his subconscious."
    >
      <MaquinaView setAssets={setAssets} />
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

export default Maquina;
