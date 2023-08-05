export function narcissistic(value: number): boolean {
  let narNum: number = value
  let narStr: string = narNum.toString()

  let result: number = 0;

  for (let index = 0; index < narStr.length; index++) {
    let num = parseInt(narStr[index])
    result = result + Math.pow(num, narStr.length)
  }


  return result == value
}
