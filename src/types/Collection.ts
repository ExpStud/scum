
export interface Collection {
  id: number;
  tag: string;
  name: string;
  burned?: boolean;
  color: string;
  doublePfp?: boolean;
  mintAddress: string;
  description: string;
}

export interface Maquina {
  id: number;
  href: string;
}

export type AssetOption = {
  id: number;
  name: string;
  lowResPath: string;
  highResPath: string;
  width: number;
  height: number;
  className?: string;
  extension: string;
  isTinyDenise?: boolean
};

export type AxolotlInfo = {
  title: string;
  description: string[];
  src: string;
  imgPosition: "left" | "right" | "bottom";
  image: React.ReactNode
};
