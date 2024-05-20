import { SortOrder } from "../../util/SortOrder";

export type AdGroupOrderByInput = {
  campaignId?: SortOrder;
  categoryId?: SortOrder;
  channelId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  platformId?: SortOrder;
  updatedAt?: SortOrder;
};
