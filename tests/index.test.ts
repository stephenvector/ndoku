import {
  getSquareRowBoxColumn,
  getPossibilities,
  createCompletedPuzzle
} from "../src";

// getSquareRowBoxColumn

test("Should return 0 for row, box, & column for square at index 0", () => {
  const { row, box, column } = getSquareRowBoxColumn(0, 3);
  expect(row).toBe(0);
  expect(box).toBe(0);
  expect(column).toBe(0);
});

// getPossibilities

test("Should return [1] from getPossibilities(1)", () => {
  expect(getPossibilities(1)).toStrictEqual([1]);
});

test("Should return [1,2,3,4] from getPossibilities(2)", () => {
  expect(getPossibilities(2)).toStrictEqual([1, 2, 3, 4]);
});

test("Should return [1,2,3,4,5,6,7,8,9] from getPossibilities(3)", () => {
  expect(getPossibilities(3)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

// createCompletedPuzzle

test("Should return [1] from createCompletedPuzzle(1)", () => {
  expect(createCompletedPuzzle(1)).toStrictEqual([1]);
});

const t = createCompletedPuzzle(3);

console.log(JSON.stringify(t));
