import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMPAIGN_TITLE_FIELD } from "../campaign/CampaignTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { CHANNEL_TITLE_FIELD } from "./ChannelTitle";
import { PLATFORM_TITLE_FIELD } from "../platform/PlatformTitle";

export const ChannelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AdGroup"
          target="channelId"
          label="AdGroups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Campaign"
              source="campaign.id"
              reference="Campaign"
            >
              <TextField source={CAMPAIGN_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Channel"
              source="channel.id"
              reference="Channel"
            >
              <TextField source={CHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Platform"
              source="platform.id"
              reference="Platform"
            >
              <TextField source={PLATFORM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
