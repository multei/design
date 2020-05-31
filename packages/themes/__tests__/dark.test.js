const { dark } = require("../lib/dark.js");

describe("Dark theme", () => {
  const {
    palette: { background, common, type },
  } = dark;

  it("should set palette type to dark", () => {
    expect(type).toBe("dark");
  });

  describe("Paper background color", () => {
    it("should be defined", () => {
      expect(background.paper).toBeDefined();
    });
    it("should not be a zero black", () => {
      expect(background.paper).not.toBe("#000");
      expect(background.paper).not.toBe("#000000");
      expect(background.paper).not.toBe("#00000000");
      expect(background.paper).not.toBe("black");
    });
  });

  describe("Common palette", () => {
    describe("Black color", () => {
      it("should be defined", () => {
        expect(common.black).toBeDefined();
      });

      it("should not be a zero black", () => {
        expect(common.black).not.toBe("#000");
        expect(common.black).not.toBe("#000000");
        expect(common.black).not.toBe("#00000000");
        expect(common.black).not.toBe("black");
      });
    });
  });
});
