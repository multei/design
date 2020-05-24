"use strict";

import { colors, typography } from "../lib";

describe("@multei/tokens package", () => {
  it("should export color tokens", () => {
    expect(colors).toBeDefined();
  });
  it("should export typography tokens", () => {
    expect(typography).toBeDefined();
  });
});
