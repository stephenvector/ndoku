type Possibilities = {
  [squareIndex: number]: number[];
};

export function getSquareRowBoxColumn(squareIndex: number, n: number) {
  const numPerRow = n * n;
  const row = Math.floor(squareIndex / numPerRow);
  const column = squareIndex % numPerRow;
  const box = Math.floor(row / n) * n + Math.floor(column / n);
  return { row, column, box };
}

export function removeValueFromPossibilities(
  value: number,
  squareIndex: number,
  possibilities: Possibilities,
  n: number
) {
  const { row, box, column } = getSquareRowBoxColumn(squareIndex, n);
  Object.keys(possibilities).forEach(blankIndex => {
    const blankRowBoxColumn = getSquareRowBoxColumn(parseInt(blankIndex), n);
    if (
      row === blankRowBoxColumn.row ||
      box === blankRowBoxColumn.box ||
      column === blankRowBoxColumn.column
    ) {
      const valueIndex = possibilities[blankIndex].indexOf(value);

      if (valueIndex !== -1) {
        possibilities[blankIndex] = [
          ...possibilities[blankIndex].slice(0, valueIndex),
          ...possibilities[blankIndex].slice(valueIndex + 1)
        ];
      }
    }
  });

  return possibilities;
}

export function getPossibilities(n: number): number[] {
  const possibilities: number[] = [];
  for (let i = 0; i < n * n; i++) {
    possibilities.push(i + 1);
  }
  return possibilities;
}

export function getNumBlanks(puzzle: number[]): number {
  return puzzle.filter(square => square === 0).length;
}

export function getSquareIndexesWithFewestPossibilities(
  p: Possibilities,
  n: number
): number[] {
  const squareIndexes = [];

  // Find lowest number of possibilities that exists in the puzzle
  let lowestNumberOfPossibilities = n * n;
  Object.keys(p).forEach(squareIndex => {
    const numPossible = p[squareIndex].length;
    if (numPossible < lowestNumberOfPossibilities) {
      lowestNumberOfPossibilities = numPossible;
    }
  });

  Object.keys(p).forEach(squareIndex => {
    if (p[squareIndex].length === lowestNumberOfPossibilities) {
      squareIndexes.push(parseInt(squareIndex));
    }
  });

  return squareIndexes;
}

export function createCompletedPuzzle(n: number) {
  const totalNumSquares = n * n * (n * n);
  const puzzle: number[] = Array(totalNumSquares).fill(0);
  let possibilities: Possibilities = {};
  let numBlanks = totalNumSquares;

  // Initialize possibilities
  for (let i = 0; i < totalNumSquares; i++) {
    possibilities[i] = getPossibilities(n);
  }

  while (numBlanks > 0) {
    const blanks = getSquareIndexesWithFewestPossibilities(possibilities, n);

    const randomBlankSquareIndex =
      blanks[Math.floor(Math.random() * blanks.length)];

    const randomValue =
      possibilities[randomBlankSquareIndex][
        Math.floor(Math.random() * possibilities[randomBlankSquareIndex].length)
      ];

    puzzle[randomBlankSquareIndex] = randomValue;

    possibilities = removeValueFromPossibilities(
      puzzle[randomBlankSquareIndex],
      randomBlankSquareIndex,
      possibilities,
      n
    );

    delete possibilities[randomBlankSquareIndex];

    numBlanks = getNumBlanks(puzzle);
  }

  return puzzle;
}
