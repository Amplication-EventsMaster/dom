import { AdGroup } from "../adGroup/AdGroup";

export type Campaign = {
  adGroups?: Array<AdGroup>;
  comment: string | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
