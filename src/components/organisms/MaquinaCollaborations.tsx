import { HTMLAttributes, FC, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MaquinaCollaborations: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <motion.div
      key="collaboration"
      className="flex flex-col gap-5"
      {...fastExitAnimation}
    >
      <div className="flex flex-col gap-5 max-w-[600px]">
        <h3 className="mt-40 sm:mt-48 md:mt-60 lg:mt-[420px]">
          collaborations
        </h3>
        <p className="maquina-copy">
          One of the many joys of building this world is seeing other artists
          interpret the lore, characters and aesthetics. I&apos;ve had the honor
          of working with so many artists to expand what Slimes represent to me,
          my community and the world.
        </p>
      </div>
      <div className="maquina-scrollbar flex flex-col xl:flex-row w-full xl:overflow-x-scroll mt-5 lg:mt-10 pb-5 gap-5 lg:gap-10">
        <VideoControls
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/wacko-trailer.mp4`}
        />
        <VideoControls
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/first-auctions.mp4`}
        />
      </div>
    </motion.div>
  );
};

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  videoClass?: string;
}
const VideoControls: FC<VideoProps> = (props: VideoProps) => {
  const { src, videoClass, ...divProps } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className={`relative ${divProps.className ?? ""}`} {...divProps}>
      <video
        ref={videoRef}
        key="vids"
        playsInline
        style={{ objectFit: "cover" }}
        className={`w-[825px] xl:min-w-[825px] rounded-br-[50px] lg:rounded-br-[100px] object-cover ${videoClass}`}
        onClick={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-scum-black/50 rounded-br-[50px] lg:rounded-br-[100px] max-w-[825px]"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src="/images/icons/play.svg"
            width={40}
            height={40}
            alt="Play"
          />
        </div>
      )}
    </div>
  );
};

export default MaquinaCollaborations;
