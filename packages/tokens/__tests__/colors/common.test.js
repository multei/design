"use strict";

import { common } from "../../lib/colors/common";

describe("Common color tokens", () => {
  it("should be in an object", () => {
    expect(common).toBeInstanceOf(Object);
  });
  const expectedColors = [
    "black",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "transparentBlack",
    "transparentGray",
    "white",
    "yellow",
  ];
  it.each(expectedColors)("should define %p color", (expectedColor) => {
    expect(common[expectedColor]).toBeDefined();
    expect(common[expectedColor].length).toBeGreaterThan(0);
  });
});
