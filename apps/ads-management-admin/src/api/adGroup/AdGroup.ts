import { Ad } from "../ad/Ad";
import { Campaign } from "../campaign/Campaign";
import { Category } from "../category/Category";
import { Channel } from "../channel/Channel";
import { Platform } from "../platform/Platform";

export type AdGroup = {
  ads?: Array<Ad>;
  campaign?: Campaign | null;
  category?: Category | null;
  channel?: Channel | null;
  createdAt: Date;
  id: string;
  name: string | null;
  platform?: Platform | null;
  updatedAt: Date;
};
