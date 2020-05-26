import React from "react";
import {
  render,
  fireEvent,
  within,
  waitForDomChange,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { sections } from "constants/general";

import App from "pages/App";

describe("tests in content page", () => {
  let appComponent;
  let mainComponent;

  beforeEach(async () => {
    appComponent = render(<App />);
    const { container } = appComponent;

    mainComponent = appComponent.getByTestId("main");
    const button = within(mainComponent).getByTestId("goToSite");

    fireEvent.click(button);

    await waitForDomChange({ container }).then(() =>
      console.log("dom changed")
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("Switch from main to content", async () => {
    const { getByTestId } = appComponent;

    expect(mainComponent).not.toBeInTheDocument();
    expect(getByTestId("content")).toBeInTheDocument();
  });

  it("Navigation and sections generated properly", () => {
    const contentComponent = appComponent.getByTestId("content");
    const li = appComponent.queryAllByRole("li");

    sections.forEach((sec) => {
      expect(within(contentComponent).getByTestId(sec)).toBeInTheDocument();
    });

    expect(li.length).toEqual(sections.length + 1);
  });

});
