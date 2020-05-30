const { dark } = require("../lib/dark.js");

describe("Dark theme", () => {
  const {
    palette: { background, common, type },
  } = dark;

  it("should set palette type to dark", () => {
    expect(type).toBe("dark");
  });

  it("should set paper background color", () => {
    expect(background.paper).toBeDefined();
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
