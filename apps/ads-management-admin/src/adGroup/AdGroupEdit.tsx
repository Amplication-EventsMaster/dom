import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AdTitle } from "../ad/AdTitle";
import { CampaignTitle } from "../campaign/CampaignTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { ChannelTitle } from "../channel/ChannelTitle";
import { PlatformTitle } from "../platform/PlatformTitle";

export const AdGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="ads"
          reference="Ad"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="campaign.id"
          reference="Campaign"
          label="Campaign"
        >
          <SelectInput optionText={CampaignTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="channel.id" reference="Channel" label="Channel">
          <SelectInput optionText={ChannelTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="platform.id"
          reference="Platform"
          label="Platform"
        >
          <SelectInput optionText={PlatformTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
