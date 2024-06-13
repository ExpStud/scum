import { useRouter } from "next/router";
import { FC, HTMLAttributes, useEffect } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

const MenuIcon: FC<Props> = (props: Props) => {
  const { animate = false } = props;

  const router = useRouter();
  const stroke =
    router.pathname === "/maquina" || router.pathname === "/axolotl"
      ? "#FDC3AE"
      : "#2C2524";

  // useEffect(() => {
  //     if (router.pathname === "/maquina" || router.pathname === "/axolotl") {
  //       setShowDark(false);
  //     } else {
  //       setShowDark(true);
  //     }
  //   }, [router.pathname]);

  return (
    <div
      className={` transition-200 relative flex-gap-2 w-7 h-7 cursor-pointer  ${
        props.className ?? ""
      }`}
      onClick={props.onClick}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute  left-0 w-full h-full transform transition-transform duration-300 ${
          animate ? "rotate-45 top-0" : "-top-1"
        }`}
      >
        <path d="M0.75 7H13.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute  left-0 w-full h-full transform transition-transform duration-300 ${
          animate ? "-rotate-45 top-0" : "top-1"
        }`}
      >
        <path
          d={"M0.75 7H13.25"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
