import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const About: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([true]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};

export default About;
