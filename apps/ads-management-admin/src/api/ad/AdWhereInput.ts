import { AdGroupWhereUniqueInput } from "../adGroup/AdGroupWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdWhereInput = {
  adGroup?: AdGroupWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
