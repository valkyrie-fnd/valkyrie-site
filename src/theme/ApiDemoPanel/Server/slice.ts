import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServerObject } from "docusaurus-plugin-openapi-docs/src/openapi/types";

export interface State {
  value?: ServerObject;
  options: ServerObject[];
}

const initialState: State = {} as any;

export const slice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setServer: (state, action: PayloadAction<string>) => {
      const parsedPayload = JSON.parse(action.payload);
      const fromOptions = state.options.find(
        (s) => s.url === parsedPayload.url
      );
      if (fromOptions) {
        console.log(JSON.stringify(fromOptions));
        state.value = fromOptions
      } else if (state.value) {
        state.value.url = parsedPayload.url;
      } else {
        state.value = {
          url: parsedPayload.url,
          description: parsedPayload.description,
        }
      }
      state.options[0].url = parsedPayload.url;
    },
  },
});

export const { setServer } = slice.actions;

export default slice.reducer;
