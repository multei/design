"use strict";

const { dark, light } = require("..");

describe("@multei/themes", () => {
  it("exports dark theme", () => {
    expect(dark).toBeDefined();
    expect(dark).not.toEqual({});
  });
  it("exports light theme", () => {
    expect(light).toBeDefined();
    expect(light).not.toEqual({});
  });
});
