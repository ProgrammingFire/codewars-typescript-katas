export function maskify(cc: string): string {
  if (cc.length >= 5) {
    return "#".repeat(cc.length - 4) + cc.slice(cc.length - 4, cc.length)
  }
  return cc
}

