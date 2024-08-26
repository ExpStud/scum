
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
  name: string;
  lowResPath: string;
  highResPath: string;
  width: number;
  height: number;
  className?: string;
  extension: string;
};

export type AxolotlInfo = {
  title: string;
  description: string[];
  src: string;
};
