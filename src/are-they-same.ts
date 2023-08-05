export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 && a2 !== null) {
    let squares = a1.map((a) => a * a)
    return JSON.stringify(squares.sort()) == JSON.stringify(a2.sort())
  }

  return false;
}

