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
  Campaign as PrismaCampaign,
  AdGroup as PrismaAdGroup,
} from "@prisma/client";
import { CampaignWhereUniqueInput } from "./CampaignWhereUniqueInput";
import { CampaignCountArgs } from "./CampaignCountArgs";

export class CampaignServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CampaignCountArgs, "select">): Promise<number> {
    return this.prisma.campaign.count(args);
  }

  async campaigns<T extends Prisma.CampaignFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignFindManyArgs>
  ): Promise<PrismaCampaign[]> {
    return this.prisma.campaign.findMany<Prisma.CampaignFindManyArgs>(args);
  }
  async campaign<T extends Prisma.CampaignFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignFindUniqueArgs>
  ): Promise<PrismaCampaign | null> {
    return this.prisma.campaign.findUnique(args);
  }
  async createCampaign<T extends Prisma.CampaignCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignCreateArgs>
  ): Promise<PrismaCampaign> {
    return this.prisma.campaign.create<T>(args);
  }
  async updateCampaign<T extends Prisma.CampaignUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignUpdateArgs>
  ): Promise<PrismaCampaign> {
    return this.prisma.campaign.update<T>(args);
  }
  async deleteCampaign<T extends Prisma.CampaignDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDeleteArgs>
  ): Promise<PrismaCampaign> {
    return this.prisma.campaign.delete(args);
  }

  async findAdGroups(
    parentId: string,
    args: Prisma.AdGroupFindManyArgs
  ): Promise<PrismaAdGroup[]> {
    return this.prisma.campaign
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .adGroups(args);
  }
  async CampaignFreeze(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FreezeCampaign(
    args: CampaignWhereUniqueInput
  ): Promise<CampaignCountArgs> {
    throw new Error("Not implemented");
  }
}
