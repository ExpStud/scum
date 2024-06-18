import { FamilyView, PageLayout } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Family: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <FamilyView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Family;
