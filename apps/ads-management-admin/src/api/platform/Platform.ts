import { AdGroup } from "../adGroup/AdGroup";

export type Platform = {
  adGroups?: Array<AdGroup>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
