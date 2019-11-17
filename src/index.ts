export function getSquareRowBoxColumn(squareIndex: number, n: number) {
  const numPerRow = n * n;
  const row = Math.floor(squareNumber / numPerRow);
  const column = squareNumber % numPerRow;
  const box = Math.floor(row/n) * n + Math.floor(column/n);
  return { row, col, box }
}

export function getPossibilities(n: number): number[] {
  const possibilities: number[] = [];
  for (let i=0; i< n * n; n++) {
    possibilities.push(i + 1);
  }
  return possibilities;
}