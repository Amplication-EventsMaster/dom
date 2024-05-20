import { AdGroupCreateNestedManyWithoutCampaignsInput } from "./AdGroupCreateNestedManyWithoutCampaignsInput";

export type CampaignCreateInput = {
  adGroups?: AdGroupCreateNestedManyWithoutCampaignsInput;
  comment?: string | null;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
