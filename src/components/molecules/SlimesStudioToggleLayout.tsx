import React, { FC } from "react";

type Props = {
  date: string;
  descriptions: string[];
  children: React.ReactNode;
};

const SlimesStudioToggleLayout: FC<Props> = ({
  date,
  descriptions,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:justify-between px-5 xl:px-0 ">
      <div className="flex flex-col gap-4 max-w-[420px]">
        <p className="text-scum-black/70 text-[15px] uppercase">{date}</p>
        {descriptions.map((description, index) => (
          <p
            key={index}
            className="text-scum-black text-xl lg:text-2xl font-forma-medium leading-8 mb-3"
          >
            {description}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:gap-3 max-w-[760px]">
        {children}
      </div>
    </div>
  );
};

export default SlimesStudioToggleLayout;
