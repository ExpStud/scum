import { FC, ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { navChild } from "src/constants";

interface Props {
  children: ReactNode;
  href: string;
  disabled?: boolean;
  isExternal?: boolean;
}
const NavItem: FC<Props> = (props: Props) => {
  const { children, href, disabled = false, isExternal = false } = props;

  const router = useRouter();
  const isCurrent = router.pathname === href;
  const isHome = router.pathname === "/";

  const DisabledItem = () => (
    <div className="flex gap-2 justify-center items-center">
      <div className={`opacity-0`}>
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/arrow.png`}
          alt="arrow"
          width={14}
          height={22}
        />
      </div>
      <div className={`py-5 opacity-10 cursor-default `}>{children}</div>
    </div>
  );

  return (
    <motion.div variants={navChild(false)}>
      {disabled ? (
        <DisabledItem />
      ) : isExternal ? (
        <a href={href} rel="noreferrer" target="_blank">
          <Item isCurrent={isCurrent} isHome={isHome}>
            {children}
          </Item>
        </a>
      ) : (
        <Link href={href}>
          <Item isCurrent={isCurrent} isHome={isHome}>
            {children}
          </Item>
        </Link>
      )}
    </motion.div>
  );
};

interface ItemProps {
  children: ReactNode;
  isCurrent: boolean;
  isHome: boolean;
}
const Item: FC<ItemProps> = (props: ItemProps) => {
  const { children, isCurrent, isHome } = props;

  const [hover, setHover] = useState(false);
  console.log("hover", hover);
  return (
    <>
      {isHome ? (
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.p
            className={`text-secondary text-[40px] xl:text-6xl 2xl:text-7xl 1860:text-[78px] ${
              isCurrent
                ? "opacity-100 cursor-default"
                : "text-gray-400 opacity-50 cursor-pointer"
            }`}
            initial={{ y: 0 }}
            animate={{
              y: hover ? -80 : 0,
              transition: { duration: 0.4, ease: "linear" },
            }}
          >
            {children}
          </motion.p>
          <motion.p
            className={`absolute text-secondary text-[40px] xl:text-6xl 2xl:text-7xl 1860:text-[78px] ${
              isCurrent
                ? "opacity-100 cursor-default"
                : "text-gray-400 opacity-50 cursor-pointer"
            }`}
            initial={{ bottom: -80, opacity: 0 }}
            animate={{
              bottom: hover ? 0 : -80,
              opacity: 1,
              transition: { duration: 0.4, ease: "linear" },
            }}
            style={{ pointerEvents: "none" }}
          >
            {children}
          </motion.p>
        </div>
      ) : (
        <p
          className={`text-secondary text-[40px] transition-200 xl:text-xl ${
            isCurrent
              ? "opacity-100 cursor-default"
              : "text-gray-400 hover:opacity-50 xl:hover:opacity-80 opacity-50 cursor-pointer"
          }`}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default NavItem;
