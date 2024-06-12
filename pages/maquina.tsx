import { PageLayout } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Maquina: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets}>
      <div>Hello there</div>
    </PageLayout>
  );
};

export default Maquina;
