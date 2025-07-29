import { PageLayout, BrandKitView } from "@components";
import { getTheme } from "@utils";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Theme } from "src/types";

const Brand: NextPage<{ initialTheme: Theme }> = ({ initialTheme }) => {
  const [assets, setAssets] = useState<boolean[]>([true]);

  return (
    <PageLayout
      headerType="absolute"
      assets={assets}
      initialTheme={initialTheme}
      metatitle="Scum - Brand Kit | Slimes Studio, All in Time, and more."
      metadescription="Explore the Scum brand kit, featuring Slimes Studio, All in Time, and more. Download logos, graphics, and brand assets."
    >
      <BrandKitView setAssets={setAssets} />
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

export default Brand;
