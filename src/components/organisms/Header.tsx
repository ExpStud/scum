import { FC } from "react";
import { AnimateWrapper, HeaderContent } from "@components";
interface Props {
  showHeader?: boolean;
  animateHeader?: boolean;
  type?: string;
}

const Header: FC<Props> = (props: Props) => {
  const { type = "absolute", showHeader = true, animateHeader = true } = props;

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 w-full ${
        type === "scroll" ? "fixed" : type
      } `}
    >
      {animateHeader ? (
        <AnimateWrapper animate={showHeader} opacity={true}>
          <HeaderContent />
        </AnimateWrapper>
      ) : (
        <HeaderContent />
      )}
    </header>
  );
};

export default Header;
