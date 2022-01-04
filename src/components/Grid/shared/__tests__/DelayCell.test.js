// import modules
import React from "react";
import { render, cleanup } from "@testing-library/react";
import * as Icons from "react-feather";

// import components
import DelayCell from "../DelayCell";

// import context
import { GridContextProvider } from "../../context";

describe("DelayCell", () => {
  afterEach(cleanup);

  test("renders icon", async () => {
    const { findByTestId } = render(
      <GridContextProvider>
        <DelayCell iconName={Icons.Smile} />
      </GridContextProvider>
    );

    expect(await findByTestId("icon")).toBeInTheDocument();
  });
});
