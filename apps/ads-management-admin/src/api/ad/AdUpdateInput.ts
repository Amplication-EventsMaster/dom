import { AdGroupWhereUniqueInput } from "../adGroup/AdGroupWhereUniqueInput";

export type AdUpdateInput = {
  adGroup?: AdGroupWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
