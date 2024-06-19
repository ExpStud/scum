import { useRouter } from "next/router";
import { Heading, PageLayout } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";

const SlimePage = () => {
  const router = useRouter();
  const { name } = router.query;

  // Fetch and display data based on id...

  return (
    <PageLayout headerType="absolute">
      <motion.div
        className="page-start gap-5 xl:gap-10 mt-[86px] xl:mt-0 xl:py-10"
        {...midEnterAnimation}
      >
        <Heading />
      </motion.div>
    </PageLayout>
  );
};

export default SlimePage;
