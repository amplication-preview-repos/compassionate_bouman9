import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PropertiesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="number" source="numberField" />
        <TextInput label="smoobuId" source="smoobuId" />
      </SimpleForm>
    </Edit>
  );
};
