/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdGroupWhereInput } from "./AdGroupWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdGroupListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => AdGroupWhereInput)
  @IsOptional()
  @Field(() => AdGroupWhereInput, {
    nullable: true,
  })
  every?: AdGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => AdGroupWhereInput)
  @IsOptional()
  @Field(() => AdGroupWhereInput, {
    nullable: true,
  })
  some?: AdGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => AdGroupWhereInput)
  @IsOptional()
  @Field(() => AdGroupWhereInput, {
    nullable: true,
  })
  none?: AdGroupWhereInput;
}
export { AdGroupListRelationFilter as AdGroupListRelationFilter };