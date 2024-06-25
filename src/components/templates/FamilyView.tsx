import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const FamilyView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <motion.div
      className="page-start gap-0 mt-[86px] xl:mt-0 xl:py-10"
      {...midEnterAnimation}
    >
      <Heading />
      <div className="flex flex-col lg:flex-row justify-start w-full">
        <div className="col-start gap-8 my-10 mx-5 xl:!ml-0 max-w-[530px] 2xl:max-w-[600px]">
          <h2 className="whitespace-nowrap">meet the family</h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl  font-forma-medium">
            We have extended our community through a series of artworks lovingly
            known as the Slimes Family Collection.
          </p>
          <p className="text-lg lg:text-xl 2xl:text-2xl font-forma-medium">
            We&apos;ve been blessed to have some of our favorite artists in the
            space creating beautiful works inspired by the slimes world,
            axolotls and renditions of the characters themselves.
          </p>
        </div>
        <Image
          src="/images/family/hands.png"
          width={300}
          height={300}
          alt="Hands"
          className="rotate-6 lg:-mb-20 lg:ml-[10%] self-center lg:self-end"
        />
      </div>
    </motion.div>
  );
};

export default FamilyView;
