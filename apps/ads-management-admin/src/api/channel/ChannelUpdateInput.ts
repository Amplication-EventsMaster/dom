import { AdGroupUpdateManyWithoutChannelsInput } from "./AdGroupUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  adGroups?: AdGroupUpdateManyWithoutChannelsInput;
  name?: string | null;
};
