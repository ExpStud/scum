import { FC, HTMLAttributes } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Heading: FC<Props> = (props: Props) => {
  const { className } = props;
  const router = useRouter();

  return (
    <div className={`p-5 xl:p-0 lg:mb-16  ${className ?? ""}`}>
      {router.pathname === "/about" && (
        <Image
          src="/images/other/about.svg"
          width={666}
          height={232}
          alt="About"
        />
      )}
      {router.pathname.startsWith("/slimes") && (
        <Image
          src="/images/other/slimes.svg"
          width={786}
          height={246}
          alt="Slimes"
        />
      )}
      {router.pathname === "/maquina" && (
        <Image
          src="/images/other/maquina.svg"
          width={1062}
          height={279}
          alt="Maquina"
        />
      )}
      {router.pathname === "/family" && (
        <Image
          src="/images/other/family.svg"
          width={792}
          height={285}
          alt="Family"
        />
      )}
      {router.pathname === "/axolotl" && (
        <Image
          src="/images/other/axolotl.svg"
          width={821}
          height={232}
          alt="Family"
        />
      )}
    </div>
  );
};

export default Heading;
