export function findUniq(arr: string[]): string {
  let strArr = arr.map(a => { return [...new Set(a.toLowerCase())].sort().join('') });
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) return arr[i]
  }
  return strArr[0];
}
