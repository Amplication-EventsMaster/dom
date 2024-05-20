import { AdGroupCreateNestedManyWithoutChannelsInput } from "./AdGroupCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  adGroups?: AdGroupCreateNestedManyWithoutChannelsInput;
  name?: string | null;
};
