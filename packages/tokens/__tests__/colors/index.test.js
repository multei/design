"use strict";

import { colors } from "../../lib/colors";

describe("Color tokens", () => {
  it("should be an object", () => {
    expect(colors).toBeInstanceOf(Object);
  });
  const expectedColors = [
    "black",
    "blueGreen",
    "green",
    "purple",
    "red",
    "transparentBlack",
    "transparentGray",
    "white",
    "yellow",
  ];
  it.each(expectedColors)("should define %p color", (expectedColor) => {
    expect(colors[expectedColor]).toBeDefined();
    expect(colors[expectedColor].length).toBeGreaterThan(0);
  });
});
