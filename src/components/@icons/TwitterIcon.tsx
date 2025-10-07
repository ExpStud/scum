import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  url?: string;
}

const TwitterIcon: FC<Props> = (props: Props) => {
  const { color = "white", size = 35, url = "" } = props;

  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      className="transition-200 opacity-40 hover:opacity-75"
    >
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0565368 0L9.13199 12.1341L0 22H2.05584L10.0517 13.3627L16.5115 22H23.5063L13.9207 9.18333L22.4212 0H20.3653L13.0024 7.95475L7.05272 0H0.0579001H0.0565368ZM3.07892 1.51401H6.2916L20.4811 20.486H17.2685L3.07892 1.51401Z"
          fill={color}
        />
      </svg>
    </a>
  );
};

export default TwitterIcon;
