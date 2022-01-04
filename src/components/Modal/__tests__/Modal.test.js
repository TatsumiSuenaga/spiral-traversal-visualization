// import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// import components
import Modal from "../Modal";

describe("Modal", () => {
  let returnHandler = jest.fn();

  test("renders", () => {
    render(
      <Modal returnHandler={jest.fn()} returnText="hi" blurbText="hello" />
    );

    screen.debug();

    expect(screen.getByText("hi")).toBeInTheDocument();
  });
});
