import { PageLayout } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Slimes: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <div></div>
    </PageLayout>
  );
};

export default Slimes;
