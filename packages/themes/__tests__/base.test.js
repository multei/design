import { color } from "@multei/tokens";

const { base } = require("../lib/base.js");

describe("Base theme", () => {
  const {
    overrides: {
      MuiCssBaseline: {
        "@global": { code, mark },
      },
    },
    palette,
    typography,
  } = base({
    palette: {
      background: {
        paper: color.background.default.value,
      },
      type: "light",
    },
  });

  describe("<MuiCssBaseline /> @global overrides", () => {
    it("should override <code /> background color", () => {
      expect(code.backgroundColor).toBeDefined();
    });
    it("should override <mark /> colors", () => {
      expect(mark.backgroundColor).toBeDefined();

      expect(mark.color).toBeDefined();
    });
  });

  describe("Default palette", () => {
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

    describe("Common colors", () => {
      const commonColors = ["black", "white"];

      describe.each(commonColors)("%p", (color) => {
        it("should be defined", () => {
          expect(palette.common[color]).toBeDefined();
        });
      });
    });

    it("should define default background color", () => {
      expect(palette.background.default).toBeDefined();
    });

    it("should define paper color as a string", () => {
      expect(palette.background.paper).not.toBeInstanceOf(Object);
    });
  });

  describe("Typography", () => {
    it("should define default font family", () => {
      expect(typography.fontFamily).toBeDefined();
    });
  });
});
