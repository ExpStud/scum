import { FC, ReactNode } from "react";
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
        <Image src="/images/arrow.png" alt="arrow" width={14} height={22} />
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
  return (
    <p
      className={`text-secondary text-[40px] transition-200 ${
        isHome ? "xl:text-6xl 2xl:text-7xl 1690:text-[84px]" : "xl:text-xl "
      } ${
        isCurrent
          ? "underline xl:no-underline opacity-100 cursor-default"
          : "text-gray-400 hover:opacity-50 xl:hover:opacity-80 xl:opacity-50  cursor-pointer"
      }`}
    >
      {children}
    </p>
  );
};

export default NavItem;
