import { AdGroup as TAdGroup } from "../api/adGroup/AdGroup";

export const ADGROUP_TITLE_FIELD = "name";

export const AdGroupTitle = (record: TAdGroup): string => {
  return record.name?.toString() || String(record.id);
};
