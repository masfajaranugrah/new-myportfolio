import { StaticImageData } from "next/image";
 

export interface ShowcaseType {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  alt: string;
  url: string;
  tags: string[];
  type: "frontend" | "backend" | "fullstack";
}
