import { getRowBoxColumn } from "../src";

test("Should return 0 for row, box, & column for square at index 0", () => {
  const { row, box, column } = getRowBoxColumn(0,0);
  expect(row).toBe(0);
  expect(box).toBe(0);
  expect(column).toBe(0);
});