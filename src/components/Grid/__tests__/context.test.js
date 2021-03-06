// import modules
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// import context
import { GridContextProvider } from "../context";

// import components
import Grid from "../Grid";
import SettingsPanel from "../../SettingsPanel/SettingsPanel";

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <GridContextProvider {...providerProps}>{ui}</GridContextProvider>,
    renderOptions
  );
};

describe("GridContext", () => {
  test("SettingsPanel renders", () => {
    const providerProps = {
      showGrid: false,
      setShowGrid: jest.fn(),
      gridSize: 10,
      setGridSize: jest.fn()
    };
    const { getByText } = customRender(<SettingsPanel />, { providerProps });
    expect(
      getByText(/^Enter a grid size, then enjoy the spiral/)
    ).toHaveTextContent("Enter a grid size, then enjoy the spiral");
  });
});
