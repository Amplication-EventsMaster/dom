import { AdGroupListRelationFilter } from "../adGroup/AdGroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChannelWhereInput = {
  adGroups?: AdGroupListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
