import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

const MenuIcon: FC<Props> = (props: Props) => {
  const { animate = false } = props;

  return (
    <div
      className={`transition-200 relative flex-gap-2 w-7 h-7 cursor-pointer  ${
        props.className ?? ""
      }`}
      onClick={props.onClick}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
        className={`menu-icon ${animate ? "rotate-45 top-0" : "-top-1"}`}
      >
        <path d="M0.75 7H13.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
        className={`menu-icon ${animate ? "-rotate-45 top-0" : "top-1"}`}
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
