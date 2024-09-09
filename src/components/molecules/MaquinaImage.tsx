import { HTMLAttributes, FC } from "react";
import Image from "next/image";
import { Maquina } from "@types";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  maquina: Maquina;
}
const MaquinaImage: FC<ImageProps> = (props: ImageProps) => {
  const { index, maquina, ...componentProps } = props;

  const width = index === 0 ? 1240 : 386;
  const height = index === 0 ? 698 : 686;

  return (
    <div className={`flex flex-col gap-5`} {...componentProps}>
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/maquina/maquina-${maquina.id}.jpg`}
        width={width}
        height={height}
        alt={`Maquina ${maquina.id}`}
        className={`${
          index === 0
            ? "rounded-br-[50px] lg:rounded-br-[100px]"
            : "rounded-br-[30px] lg:rounded-br-[120px] w-full"
        }`}
      />
      <div className="flex items-center justify-between px-10 rounded-bl-3xl rounded-tr-3xl bg-scum-black-800/30 h-12 w-full gap-5 ">
        <p className="text-sm sm:text-lg font-forma-medium text-[15px] tracking-widest whitespace-nowrap">
          MM # - 0{maquina.id}
        </p>
        <a
          href={maquina.href}
          target="_blank"
          rel="noreferrer"
          className="transition-200 hover:opacity-70 active:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M10.8802 6.93244e-06H1.4443C0.647658 6.93244e-06 0 0.644569 0 1.43679V10.8002C0 10.8002 4.21606e-07 12.2365 1.28249 12.2365H2.58532C3.88727 12.2365 3.87312 10.8218 3.87312 10.8218L3.89566 3.91822L10.8585 3.89523C10.8585 3.89523 12.3028 3.89523 12.3028 2.60522V1.29488C12.3028 -0.0145829 10.8806 6.93244e-06 10.8806 6.93244e-06H10.8802Z"
              className="fill-scum-beige-600"
            />
            <path
              d="M7.1365 18H16.5724C17.369 18 18.0167 17.3554 18.0167 16.5632V7.19983C18.0167 7.19983 18.0167 5.76349 16.7342 5.76349H15.4314C14.1294 5.76349 14.1436 7.17817 14.1436 7.17817L14.121 14.0818L7.15816 14.1048C7.15816 14.1048 5.71387 14.1048 5.71387 15.3948V16.7051C5.71387 18.0146 7.13606 18 7.13606 18H7.1365Z"
              className="fill-scum-beige-600"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MaquinaImage;
