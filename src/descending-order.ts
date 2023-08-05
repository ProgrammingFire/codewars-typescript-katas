export function descendingOrder(n: number): number {
  let numArr = n.toString().split('').map((s) => parseInt(s))
  return parseInt(numArr.sort().reverse().join(''))
}
