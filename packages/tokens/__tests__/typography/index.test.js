"use strict";

import { typography } from "../../lib/typography";

describe("Typography token", () => {
  it("should be an object", () => {
    expect(typography).toBeInstanceOf(Object);
  });
  describe("font family", () => {
    it("should have Overpass as first font family", () => {
      expect(typography.fontFamily[0]).toBe("Overpass");
    });
    /**
     * @see https://css-tricks.com/snippets/css/system-font-stack/
     * @type {string[][]}
     */
    const nativeFontFamilies = [
      ['"-apple-system"', "Firefox and Safari at macOS"],
      ["BlinkMacSystemFont", "Blink at macOS"],
      ["Cantarell", "GNOME operating system"],
      ["Droid Sans", "Android 3-"],
      ["Fira Sans", "Firefox OS"],
      ["Helvetica Neue", "Mac OS X Yosemite"],
      ["Oxygen", "GNU+Linux operating system"],
      ["Roboto", "Android 4+"],
      ["Segoe UI", "Windows Vista"],
      ["Ubuntu", "Ubuntu"],
    ];
    it.each(nativeFontFamilies)(
      "should support %p as native font family for %p",
      (font) => {
        expect(typography.fontFamily).toContainEqual(font);
      }
    );
    it("should fallback to sans-serif as last font family", () => {
      const lastIndex = typography.fontFamily.length - 1;
      expect(typography.fontFamily[lastIndex]).toBe("sans-serif");
    });
  });
});
