import { AdListRelationFilter } from "../ad/AdListRelationFilter";
import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";

export type AdGroupWhereInput = {
  ads?: AdListRelationFilter;
  campaign?: CampaignWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  channel?: ChannelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  platform?: PlatformWhereUniqueInput;
};
