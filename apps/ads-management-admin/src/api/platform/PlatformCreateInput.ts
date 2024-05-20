import { AdGroupCreateNestedManyWithoutPlatformsInput } from "./AdGroupCreateNestedManyWithoutPlatformsInput";

export type PlatformCreateInput = {
  adGroups?: AdGroupCreateNestedManyWithoutPlatformsInput;
  name?: string | null;
};
