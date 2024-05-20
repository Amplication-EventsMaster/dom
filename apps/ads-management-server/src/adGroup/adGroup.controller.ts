import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdGroupService } from "./adGroup.service";
import { AdGroupControllerBase } from "./base/adGroup.controller.base";

@swagger.ApiTags("adGroups")
@common.Controller("adGroups")
export class AdGroupController extends AdGroupControllerBase {
  constructor(protected readonly service: AdGroupService) {
    super(service);
  }
}
