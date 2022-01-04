// import modules
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

// import components
import Modal from "../Modal";

describe("Modal", () => {
  afterEach(cleanup);

  test("renders text", () => {
    const { getByText } = render(
      <Modal returnHandler={jest.fn()} returnText="button" blurbText="hello" />
    );

    expect(getByText("button")).toBeInTheDocument();
    expect(getByText("hello")).toBeInTheDocument();
  });

  test("onClick triggers returnHandler", () => {
    const returnHandler = jest.fn();
    const { getByText } = render(
      <Modal
        returnHandler={returnHandler}
        returnText="button"
        blurbText="hello"
      />
    );
    expect(returnHandler).not.toBeCalled();
    fireEvent.click(getByText(/button/));
    expect(returnHandler).toHaveBeenCalledTimes(1);
  });
});
