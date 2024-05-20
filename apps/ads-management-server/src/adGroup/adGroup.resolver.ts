import * as graphql from "@nestjs/graphql";
import { AdGroupResolverBase } from "./base/adGroup.resolver.base";
import { AdGroup } from "./base/AdGroup";
import { AdGroupService } from "./adGroup.service";

@graphql.Resolver(() => AdGroup)
export class AdGroupResolver extends AdGroupResolverBase {
  constructor(protected readonly service: AdGroupService) {
    super(service);
  }
}
