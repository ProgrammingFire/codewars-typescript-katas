export function wave(str: string): Array<string> {
  const result = []
  for (let index = 0; index < str.length; index++) {
    if (str[index] == " ") continue;
    result.push(str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1, str.length))
  }
  return result
}
