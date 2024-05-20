import { AdGroup } from "../adGroup/AdGroup";

export type Ad = {
  adGroup?: AdGroup | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
