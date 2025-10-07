import { useRouter } from "next/router";
import { collection } from "@constants";
import { NextPage } from "next";

type Props = {
  currentIndex: number;
};

const SlimeNav: NextPage<Props> = (props: Props) => {
  const { currentIndex } = props;

  const router = useRouter();

  const getNext = (): string => {
    if (currentIndex === undefined || currentIndex === null)
      return collection[0].tag;

    if (currentIndex >= 0 && currentIndex < collection.length - 1) {
      return collection[currentIndex + 1].tag;
    }
    return collection[0].tag;
  };

  const getPrevious = (): string => {
    if (currentIndex === undefined || currentIndex === null)
      return collection[0].tag;

    if (currentIndex > 0) {
      return collection[currentIndex - 1].tag;
    }
    return collection[collection.length - 1].tag;
  };

  return (
    <div className="flex items-center gap-2 w-full px-5 xl:px-0 ">
      <button
        className="slimes-button rounded-[22px] min-w-[166px] h-[44px]"
        onClick={() => router.push("/slimes")}
      >
        <span className="font-sans mr-2">←</span> Back to Gallery
      </button>
      <hr className="flex-grow border-t border-dotted border-black/40 mr-2 w-full" />
      <div className="flex gap-2">
        <button
          className="slimes-button-round"
          onClick={() =>
            router.push(getPrevious(), undefined, { scroll: false })
          }
        >
          ←
        </button>
        <button
          className="slimes-button-round"
          onClick={() => router.push(getNext(), undefined, { scroll: false })}
        >
          →
        </button>
      </div>
    </div>
  );
};
export default SlimeNav;
