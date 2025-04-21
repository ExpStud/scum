import { ReactNode } from "react";


export interface BrandKitItem {
  content: ReactNode;
  backgroundColor: string; 
  action: "download" | "copy";
  value: string;
}
export interface BrandKit {
  name: string;
  items: BrandKitItem[];
}
