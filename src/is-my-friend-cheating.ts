export function removeNb(n: number): number[][] | null {
  let numsSum = n * (n + 1) / 2

  let result: number[][] = []

  for (let a = 1; a <= n; a++) {
    const b = Math.floor((numsSum - a) / (a + 1))
    const product = a * b
    const sum = numsSum - a - b
    if (b <= n && product == sum) {
      result.push([a, b])
    }
  }

  return result ? result : null
}
