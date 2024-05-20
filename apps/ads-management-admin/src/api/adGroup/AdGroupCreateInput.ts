import { AdCreateNestedManyWithoutAdGroupsInput } from "./AdCreateNestedManyWithoutAdGroupsInput";
import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";

export type AdGroupCreateInput = {
  ads?: AdCreateNestedManyWithoutAdGroupsInput;
  campaign?: CampaignWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  channel?: ChannelWhereUniqueInput | null;
  name?: string | null;
  platform?: PlatformWhereUniqueInput | null;
};
