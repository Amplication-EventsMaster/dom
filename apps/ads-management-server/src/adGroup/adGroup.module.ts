import { Module } from "@nestjs/common";
import { AdGroupModuleBase } from "./base/adGroup.module.base";
import { AdGroupService } from "./adGroup.service";
import { AdGroupController } from "./adGroup.controller";
import { AdGroupResolver } from "./adGroup.resolver";

@Module({
  imports: [AdGroupModuleBase],
  controllers: [AdGroupController],
  providers: [AdGroupService, AdGroupResolver],
  exports: [AdGroupService],
})
export class AdGroupModule {}
