// import modules
import React from "react";
import { render } from "@testing-library/react";

// import components
import DelayCell from "../DelayCell";

// import context
import { GridContextProvider } from "../../../../context";

describe("DelayCell", () => {
  test("renders", () => {
    render(
      <GridContextProvider>
        <DelayCell />
      </GridContextProvider>
    );
  });
});
