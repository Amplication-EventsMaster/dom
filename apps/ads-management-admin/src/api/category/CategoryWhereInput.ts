import { AdGroupListRelationFilter } from "../adGroup/AdGroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  adGroups?: AdGroupListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
