import { JsonValue } from "@prisma/client/runtime/library";
import { IconType } from "react-icons";

export type TagType = {
  id: String;
  title: String;
  shortDesc: String;
};

export type ServiceType = {
  id: String;
  serviceId: String | null;
  serviceTypeId: String;
  title: String;
  shortDesc: String;
  desc: String;
  icon: String;
  longDesc: String;
  styles: String | null;
  tags: TagType[] | [];
  images: String[];
  benefits: String[];
  longBenefits: String[];
  instructions: JsonValue;
  basePrice: Number;
  hourlyRate: Number | null;
  specialOffer: Boolean;
  subscription: Boolean;
  featured: Boolean;
};

export type IconMapType = {
  [key: string]: IconType;
};
