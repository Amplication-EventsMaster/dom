/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Ad } from "../../ad/base/Ad";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Campaign } from "../../campaign/base/Campaign";
import { Category } from "../../category/base/Category";
import { Channel } from "../../channel/base/Channel";
import { Platform } from "../../platform/base/Platform";

@ObjectType()
class AdGroup {
  @ApiProperty({
    required: false,
    type: () => [Ad],
  })
  @ValidateNested()
  @Type(() => Ad)
  @IsOptional()
  ads?: Array<Ad>;

  @ApiProperty({
    required: false,
    type: () => Campaign,
  })
  @ValidateNested()
  @Type(() => Campaign)
  @IsOptional()
  campaign?: Campaign | null;

  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  category?: Category | null;

  @ApiProperty({
    required: false,
    type: () => Channel,
  })
  @ValidateNested()
  @Type(() => Channel)
  @IsOptional()
  channel?: Channel | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => Platform,
  })
  @ValidateNested()
  @Type(() => Platform)
  @IsOptional()
  platform?: Platform | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { AdGroup as AdGroup };