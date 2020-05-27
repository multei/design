import { colors } from "../../lib/colors";

describe("Color tokens", () => {
  it("should include common colors", () => {
    expect(colors.common).toBeDefined();
  });
});
