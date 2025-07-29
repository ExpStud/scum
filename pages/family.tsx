import { FamilyView, PageLayout } from "@components";
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
      metatitle="Scum - Family | Explore the Scum family of projects and collaborations."
      metadescription="Discover the Scum family, a collection of projects and collaborations that showcase the creative spirit of scum. Explore Slimes, Maquina Muertes, and more."
    >
      <FamilyView setAssets={setAssets} />
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
