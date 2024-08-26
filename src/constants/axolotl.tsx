import { AxolotlInfo } from "src/types";
import Image from "next/image";

export const axolotlInfo: AxolotlInfo[] = [
  {
    title: "the axies need our help",
    src: "dropdown-1.png",
    description: [
      "Lake Xochimilco is home to hundreds of tourists a day, and has been for quite some time now.",
      "While it's a beautiful experience, this is the last part of the world where Axolotls are known to inhabit.",
      "Due to the lakes heavy pollution, and introduction of foreign fish species, over time the Axolotl's population has nearly vanished.",
    ],
    imgPosition: "bottom",
    image: (
      <Image
        src="/images/axolotl/dropdown-1.png"
        width={1240}
        height={540}
        alt="Axolotl Art"
      />
    ),
  },
  {
    title: "the axies need our help",
    src: "dropdown-1.png",
    description: [
      "Lake Xochimilco is home to hundreds of tourists a day, and has been for quite some time now.",
      "While it's a beautiful experience, this is the last part of the world where Axolotls are known to inhabit.",
      "Due to the lakes heavy pollution, and introduction of foreign fish species, over time the Axolotl's population has nearly vanished.",
    ],
    imgPosition: "right",
    image: (
      <Image
        src="/images/axolotl/dropdown-2.png"
        width={469}
        height={511}
        alt="Axolotl"
      />
    ),
  },
  {
    title: "Preservation efforts",
    src: "dropdown-1.png",
    description: [
      "In order to preserve the species, many organizations like Somos Axolotl have begun to relocate these marvelous creatures into captivity where a consistent water quality, and safe environment can be provided.",
      "On the exact same Chinampa where the Axolotl Statues are installed, our team has begun the development of organic bio-filters.",
      "These filters will funnel water directly from the lake where it begins a 4 step filtration system through various plants, and volcanic rock.",
      "The goal being to eventually amass a body of water clean enough to re-introduce the Axolotls held in captivation back into the wild.",
    ],
    imgPosition: "left",
    image: (
      <Image
        src="/images/axolotl/dropdown-3.png"
        width={480}
        height={610}
        alt="Xoximilco"
        className="flex-grow w-full min-w-[320px] max-w-[480px] max-h-[610px] object-cover rounded-br-[100px] mt-5"
      />
    ),
  },
  {
    title: "moving the needle",
    src: "dropdown-1.png",
    description: [
      "In collaboration with the Solana Foundation and Sphere we have begun development on a donation system that accepts major currencies including crypto through Solana.",
      "By the simple scan of a QR code installed on the Axolotl statues, you will be able to send funds within seconds to everyone involved.",
      "These donations are automatically split 3 ways and distributed in real time to the Somos Axolotl organization, the owners and drivers of the boats on Lake Xochimilco, and the Chinampa owners.",
    ],
    imgPosition: "left",
    image: (
      <div className="flex flex-col h-full items-start justify-start gap-8 my-7 min-w-[281px]">
        <Image
          src="/images/axolotl/solana-foundation.svg"
          width={281}
          height={48}
          alt="Axolotl"
        />
        <Image
          src="/images/axolotl/sphere.svg"
          width={204}
          height={48}
          alt="Sphere"
        />
      </div>
    ),
  },
];
