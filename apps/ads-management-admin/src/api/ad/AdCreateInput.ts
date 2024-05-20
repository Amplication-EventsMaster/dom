import { AdGroupWhereUniqueInput } from "../adGroup/AdGroupWhereUniqueInput";

export type AdCreateInput = {
  adGroup?: AdGroupWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
