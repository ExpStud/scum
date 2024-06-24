
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
