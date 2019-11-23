import { getSquareRowBoxColumn, getPossibilities } from "../src";

test("Should return 0 for row, box, & column for square at index 0", () => {
  const { row, box, column } = getSquareRowBoxColumn(0, 3);
  expect(row).toBe(0);
  expect(box).toBe(0);
  expect(column).toBe(0);
});

test("Should return [1,2,3,4] from getPossibilities(2)", () => {
  expect(getPossibilities(2)).toStrictEqual([1, 2, 3, 4]);
});
