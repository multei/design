import { light } from "../lib/light";

describe("Light theme", () => {
  it("should set palette type to light", () => {
    const {
      palette: { type },
    } = light;
    expect(type).toBe("light");
  });

  describe("Paper background color", () => {
    const {
      palette: { background },
    } = light;
    it("should be defined", () => {
      expect(background.paper).toBeDefined();
    });
  });
});
