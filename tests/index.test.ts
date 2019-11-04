import { getRow } from "../src";

test("Should return 0 for square at index 0", () => {
  expect(getRow(0, 3)).toBe(0);
});