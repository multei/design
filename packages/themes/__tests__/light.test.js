const { light } = require("../lib/light.js");

describe("Light theme", () => {
  it("should set palette type to light", () => {
    const {
      palette: { type },
    } = light;
    expect(type).toBe("light");
  });
  it("should set paper background color", () => {
    const {
      palette: { background },
    } = light;
    expect(background.paper).toBeDefined();
  });
});
