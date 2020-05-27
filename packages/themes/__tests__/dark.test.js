const { dark } = require("../lib/dark.js");

describe("Dark theme", () => {
  it("should set palette type to dark", () => {
    const {
      palette: { type },
    } = dark;
    expect(type).toBe("dark");
  });
  it("should set paper background color", () => {
    const {
      palette: { background },
    } = dark;
    expect(background.paper).toBeDefined();
  });
});
