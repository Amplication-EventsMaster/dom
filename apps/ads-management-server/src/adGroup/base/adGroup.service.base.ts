/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AdGroup as PrismaAdGroup,
  Ad as PrismaAd,
  Campaign as PrismaCampaign,
  Category as PrismaCategory,
  Channel as PrismaChannel,
  Platform as PrismaPlatform,
} from "@prisma/client";

export class AdGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AdGroupCountArgs, "select">): Promise<number> {
    return this.prisma.adGroup.count(args);
  }

  async adGroups<T extends Prisma.AdGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupFindManyArgs>
  ): Promise<PrismaAdGroup[]> {
    return this.prisma.adGroup.findMany<Prisma.AdGroupFindManyArgs>(args);
  }
  async adGroup<T extends Prisma.AdGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupFindUniqueArgs>
  ): Promise<PrismaAdGroup | null> {
    return this.prisma.adGroup.findUnique(args);
  }
  async createAdGroup<T extends Prisma.AdGroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupCreateArgs>
  ): Promise<PrismaAdGroup> {
    return this.prisma.adGroup.create<T>(args);
  }
  async updateAdGroup<T extends Prisma.AdGroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupUpdateArgs>
  ): Promise<PrismaAdGroup> {
    return this.prisma.adGroup.update<T>(args);
  }
  async deleteAdGroup<T extends Prisma.AdGroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupDeleteArgs>
  ): Promise<PrismaAdGroup> {
    return this.prisma.adGroup.delete(args);
  }

  async findAds(
    parentId: string,
    args: Prisma.AdFindManyArgs
  ): Promise<PrismaAd[]> {
    return this.prisma.adGroup
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ads(args);
  }

  async getCampaign(parentId: string): Promise<PrismaCampaign | null> {
    return this.prisma.adGroup
      .findUnique({
        where: { id: parentId },
      })
      .campaign();
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.adGroup
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getChannel(parentId: string): Promise<PrismaChannel | null> {
    return this.prisma.adGroup
      .findUnique({
        where: { id: parentId },
      })
      .channel();
  }

  async getPlatform(parentId: string): Promise<PrismaPlatform | null> {
    return this.prisma.adGroup
      .findUnique({
        where: { id: parentId },
      })
      .platform();
  }
}
