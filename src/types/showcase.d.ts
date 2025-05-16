import { StaticImageData } from "next/image";

type ShowcaseType = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  url: string;
  alt: string;
  tags: string[];
};
