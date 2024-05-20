import { AdGroupUpdateManyWithoutCampaignsInput } from "./AdGroupUpdateManyWithoutCampaignsInput";

export type CampaignUpdateInput = {
  adGroups?: AdGroupUpdateManyWithoutCampaignsInput;
  comment?: string | null;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
