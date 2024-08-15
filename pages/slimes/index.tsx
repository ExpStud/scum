import { PageLayout, SlimesView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Slimes: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <SlimesView setAssets={setAssets} />
    </PageLayout>
  );
};

// scum - infinite scroll on all galleries
// somos - brief cta and sphere widget will get $750-1000

export default Slimes;
