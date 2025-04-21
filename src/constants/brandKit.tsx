import { BrandKit } from "@types";
import Image from "next/image";

export const brandKit: BrandKit[] = [
  //slimes studio
  {
    name: "Slimes Studio",
    items: [
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss1.svg`}
            width={120}
            height={120}
            alt={"SS1"}
          />
        ),
        backgroundColor: "bg-scum-beige",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss1.svg`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss2.svg`}
            width={120}
            height={120}
            alt={"SS2"}
          />
        ),
        backgroundColor: "bg-scum-black-750",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss2.svg`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss3.svg`}
            width={120}
            height={120}
            alt={"SS3"}
          />
        ),
        backgroundColor: "bg-scum-black-750",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss3.svg`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss4.svg`}
            width={180}
            height={55}
            alt={"SS4"}
          />
        ),
        backgroundColor: "bg-scum-black-750",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ss4.svg`,
      },
    ],
  },
  //all in time
  {
    name: "All in Time",
    items: [
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ait1.png`}
            width={180}
            height={84}
            alt={"ait1"}
          />
        ),
        backgroundColor: "bg-scum-beige",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ait1.png`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ait2.png`}
            width={180}
            height={84}
            alt={"ait2"}
          />
        ),
        backgroundColor: "bg-scum-black-750",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/ait2.png`,
      },
    ],
  },
  //slimes
  {
    name: "Slimes",
    items: [
      //row 1
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s1.svg`}
            width={140}
            height={176}
            alt={"s1"}
          />
        ),
        backgroundColor: "bg-scum-red",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s1.svg`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s2.svg`}
            width={140}
            height={184}
            alt={"s2"}
          />
        ),
        backgroundColor: "bg-scum-beige",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s2.svg`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s3.svg`}
            width={140}
            height={252}
            alt={"s3"}
          />
        ),
        backgroundColor: "bg-scum-black-750",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s3.svg`,
      },
      //row 2
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s4.png`}
            width={180}
            height={180}
            alt={"s4"}
          />
        ),
        backgroundColor: "bg-scum-beige",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s4.png`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s5.svg`}
            width={140}
            height={70}
            alt={"s5"}
          />
        ),
        backgroundColor: "bg-scum-beige",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s5.svg`,
      },
      {
        content: (
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s6.svg`}
            width={132}
            height={158}
            alt={"s6"}
          />
        ),
        backgroundColor: "bg-scum-black-750",
        action: "download",
        value: `${process.env.CLOUDFLARE_STORAGE}/images/scum/brand-kit/s6.svg`,
      },
      //row 3
      {
        content: <p className="text-xl text-scum-beige">B12F4E</p>,
        backgroundColor: "bg-scum-red",
        action: "copy",
        value: "B12F4E",
      },
      {
        content: <p className="text-xl">F6EFD3</p>,
        backgroundColor: "bg-scum-beige",
        action: "copy",
        value: "F6EFD3",
      },
      {
        content: <p className="text-xl">86E4C5</p>,
        backgroundColor: "bg-scum-teal",
        action: "copy",
        value: "86E4C5",
      },
      {
        content: <p className="text-xl text-scum-beige">2C2524</p>,
        backgroundColor: "bg-scum-black-750",
        action: "copy",
        value: "2C2524",
      },
    ],
  },
];
