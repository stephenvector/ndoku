export function getSquareRowBoxColumn(squareIndex: number, n: number) {
  const numPerRow = n * n;
  const row = Math.floor(squareIndex / numPerRow);
  const column = squareIndex % numPerRow;
  const box = Math.floor(row / n) * n + Math.floor(column / n);
  return { row, column, box };
}

export function getPossibilities(n: number): number[] {
  const possibilities: number[] = [];
  for (let i = 0; i < n * n; i++) {
    possibilities.push(i + 1);
  }
  return possibilities;
}
