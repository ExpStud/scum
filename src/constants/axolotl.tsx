import { AxolotlInfo } from "src/types";
import Image from "next/image";

export const axolotlInfo: AxolotlInfo[] = [
  {
    title: "the axies need our help",
    src: "dropdown-1.png",
    description: [
      "Lake Xochimilco is visited by thousands of tourists each day and has been for decades. Pollution, single-use plastics, gas-powered boats, and runoff from improper city drainage after heavy rains have led to a dramatic decline in axolotl populations.",
      "We are focused on supporting organizations that are working to create safe and clean enclaves within the lake to reintroduce and hopefully proliferate the species.",
    ],
    imgPosition: "bottom",
    image: (
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/axolotl/dropdown-1.png`}
        width={1240}
        height={540}
        alt="Axolotl Art"
        className="object-contain"
      />
    ),
  },
  {
    title: "Web 3 + Donations",
    src: "dropdown-1.png",
    description: [
      "Blockchain and cryptocurrency are often mentioned in the same breath, leading to a common misconception that they are one and the same. While they are interrelated, it’s crucial to distinguish between them to fully understand their unique potentials and the positive changes blockchain technology can bring to various sectors.",
      "At its core, blockchain is a decentralized ledger technology that ensures secure, transparent, and immutable recording of transactions. It operates without a central authority, making it highly resistant to tampering and fraud. Think of blockchain as the foundational technology that supports various applications, including but not limited to cryptocurrencies. Blockchain’s potential extends far beyond the realm of cryptocurrencies.",
      "The charitable sector can benefit immensely from blockchain’s transparency and traceability. Donors can track their contributions to ensure they are used effectively and reach the intended recipients. This can enhance trust in charitable organizations and potentially increase the volume of donations.",
    ],
    imgPosition: "right",
    image: (
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/axolotl/dropdown-2.png`}
        width={469}
        height={511}
        alt="Axolotl"
        className="object-contain"
      />
    ),
  },
  {
    title: "Preservation efforts",
    src: "dropdown-1.png",
    description: [
      "There are upwards of 30 separate organizations in Xochimilco working in parallel, but not yet together. Our aim is to help build a network of these stakeholders and lake residents through our sculpture series. The recipient of each sculpture will be a designated member of our network. Each sculpture will provide a geolocation on an interactive map, a spot on tours focused on sustainable practices, and will be a recipient of donations generated through these activities.",
      "We are currently exploring ways to turn the sculptures into revenue-generating nodes on a decentralized wireless network.",
    ],
    imgPosition: "left",
    image: (
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/axolotl/dropdown-3.png`}
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
      "In collaboration with the Solana Foundation and Sphere, we have begun development on a donation system that accepts fiat and cryptocurrencies, built on top of the very efficient Solana network.",
      "Through our partners in the lake, every tour guide can accept donations and, in turn, be a direct recipient of a percentage of the funds received. Once funds are accepted, they are automatically split and sent to designated recipients in our network within minutes. We can also safely and truthfully share the path of every single dollar accepted through this system, thanks to the power of blockchain.",
    ],
    imgPosition: "left",
    image: (
      <div className="flex flex-col h-full items-start justify-start gap-8 my-7 min-w-[281px]">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/axolotl/solana-foundation.svg`}
          width={281}
          height={48}
          alt="Axolotl"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/axolotl/sphere.svg`}
          width={204}
          height={48}
          alt="Sphere"
        />
      </div>
    ),
  },
];
