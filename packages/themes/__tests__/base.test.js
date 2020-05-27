const { base } = require("../lib/base.js");

describe("Base theme", () => {
  describe("<MuiCssBaseline /> @global overrides", () => {
    const {
      overrides: {
        MuiCssBaseline: {
          "@global": { code, mark },
        },
      },
    } = base;
    it("should override <code /> background color", () => {
      expect(code.backgroundColor).toBeDefined();
    });
    it("should override <mark /> colors", () => {
      expect(mark.backgroundColor).toBeDefined();
      expect(mark.color).toBeDefined();
    });
  });
  describe("Default palette", () => {
    const { palette } = base;
    const properties = [
      "error",
      "info",
      "primary",
      "secondary",
      "success",
      "warning",
    ];
    describe.each(properties)("%p", (property) => {
      it("should have main color", () => {
        expect(palette[property].main).toBeDefined();
      });
      it("should have contrast text color", () => {
        expect(palette[property].contrastText).toBeDefined();
      });
    });
    it("should define default background color", () => {
      expect(palette.background.default).toBeDefined();
    });
  });
  describe("Typography", () => {
    it("should define default font family", () => {
      const { typography } = base;
      expect(typography.fontFamily).toBeDefined();
    });
  });
});
