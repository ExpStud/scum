import { PageLayout, AboutView } from "@components";
import { getTheme } from "@utils";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Theme } from "src/types";

const About: NextPage<{ initialTheme: Theme }> = ({ initialTheme }) => {
  const [assets, setAssets] = useState<boolean[]>([true]);

  return (
    <PageLayout
      headerType="absolute"
      assets={assets}
      initialTheme={initialTheme}
      metatitle="Scum - About Matt Martinez"
      metadescription="Learn about Scum, the art project by Matt Martinez, featuring Slimes, Maquina Muertes, and more."
    >
      <AboutView setAssets={setAssets} />
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

export default About;
