import { HTMLAttributes, FC, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MaquinaCollaborations: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (src: string) => {
    if (src === playingVideo) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(src);
    }
  };

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
          isPlaying={
            playingVideo ===
            `${process.env.CLOUDFLARE_STORAGE}/videos/wacko-trailer.mp4`
          }
          onPlay={handlePlay}
        />
        <VideoControls
          src={`${process.env.CLOUDFLARE_STORAGE}/videos/first-auctions.mp4`}
          isPlaying={
            playingVideo ===
            `${process.env.CLOUDFLARE_STORAGE}/videos/first-auctions.mp4`
          }
          onPlay={handlePlay}
        />
      </div>
    </motion.div>
  );
};

interface VideoProps {
  src: string;
  isPlaying: boolean;
  onPlay: (src: string) => void;
}
const VideoControls: FC<VideoProps> = (props: VideoProps) => {
  const { src, isPlaying, onPlay } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  //handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  //scroll video into view on click
  const handleClick = () => {
    // if (containerRef.current) {
    //   containerRef.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "nearest",
    //     inline: "center",
    //   });
    // }
    // setIsPlaying(!isPlaying);
    onPlay(src);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        key="vids"
        playsInline
        style={{ objectFit: "cover" }}
        className={`w-[825px] xl:min-w-[825px] rounded-br-[50px] lg:rounded-br-[100px] object-cover`}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-scum-black/50 rounded-br-[50px] lg:rounded-br-[100px] max-w-[825px]">
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
