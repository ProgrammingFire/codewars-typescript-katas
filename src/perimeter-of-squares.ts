export const perimeter = (n: number): number => {
  let sum = 1
  let n1 = 0, n2 = 1, next;
  for (let index = 0; index < n; index++) {
    next = n1 + n2
    n1 = n2
    n2 = next
    sum += next
  }
  const peri = 4 * sum
  return peri
}
