import { AdGroupUpdateManyWithoutCategoriesInput } from "./AdGroupUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  adGroups?: AdGroupUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
