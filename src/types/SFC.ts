export interface SFC {
  id: number;
  src: string;
  highResSrc?: string;
  name: string;
  description: string;
  twitter: string[];
  artist: string[];
  url: string;
  season: number;
  aspect: "square" | "long" | "wide"
}
