import { ImageProps } from "next/image";

export type UserAccessInfoProps = {
  name: string;
  src?: ImageProps["src"];
  infoText?: string;
};
