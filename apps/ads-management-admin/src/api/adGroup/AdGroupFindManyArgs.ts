import { AdGroupWhereInput } from "./AdGroupWhereInput";
import { AdGroupOrderByInput } from "./AdGroupOrderByInput";

export type AdGroupFindManyArgs = {
  where?: AdGroupWhereInput;
  orderBy?: Array<AdGroupOrderByInput>;
  skip?: number;
  take?: number;
};
