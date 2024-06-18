import { AxolotlView, PageLayout } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Axolotl: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <AxolotlView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Axolotl;
