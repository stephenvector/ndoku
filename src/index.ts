export function getRow(squareNumber: number, n: number): number {
  const numPerRow = n * n;
  return Math.floor(squareNumber / numPerRow);
}

export function getColumn(squareNumber: number, n: number) {
  const numPerRow = n * n;
  return squareNumber % numPerRow;
}

export function getBox(squareNumber: number, n: number) {
  return 0;
}