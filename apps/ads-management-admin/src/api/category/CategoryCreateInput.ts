import { AdGroupCreateNestedManyWithoutCategoriesInput } from "./AdGroupCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  adGroups?: AdGroupCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
