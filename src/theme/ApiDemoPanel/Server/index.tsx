import React from "react";

import FormItem from "@theme/ApiDemoPanel/FormItem";
import FormTextInput from "@theme/ApiDemoPanel/FormTextInput";
import { useTypedDispatch, useTypedSelector } from "@theme/ApiItem/hooks";
import { setServer } from "./slice";

function Server() {
  const value = useTypedSelector((state: any) => state.server.value);
  const options = useTypedSelector((state: any) => state.server.options);
  const dispatch = useTypedDispatch();

  if (!value) {
    const defaultOption = options[0];
    dispatch(setServer(JSON.stringify(defaultOption)));
  }
  if (value) {
    const urlExists = options.find((s: any) => s.url === value.url);
    if (!urlExists) {
      const defaultOption = options[0];
      dispatch(setServer(JSON.stringify(defaultOption)));
    }
  }

  return (
    <FormItem label="Base URL">
      <FormTextInput
        placeholder={value?.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(
            setServer(
              JSON.stringify({ url: e.target.value, description: value?.description })
            )
          );
        }}
        value={value?.url}
      />

    </FormItem>
  );
}

export default Server;
