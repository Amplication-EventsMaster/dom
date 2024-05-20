import { AdGroup } from "../adGroup/AdGroup";

export type Channel = {
  adGroups?: Array<AdGroup>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
