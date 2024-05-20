import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdGroupServiceBase } from "./base/adGroup.service.base";

@Injectable()
export class AdGroupService extends AdGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
