import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PropertiesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="number" source="numberField" />
        <TextInput label="smoobuId" source="smoobuId" />
      </SimpleForm>
    </Create>
  );
};
