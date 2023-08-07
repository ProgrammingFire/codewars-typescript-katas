export function findOutlier(integers: number[]): number {
  const evens = []
  const odds = []
  for (const i in integers) {
    const int = integers[i]
    if (int % 2 == 0) {
      evens.push(int)
    } else {
      odds.push(int)
    }
  }
  const isEven = odds.length == 1
  return isEven ? odds[0] : evens[0];
}
