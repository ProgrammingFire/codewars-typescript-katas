
export function playPass(s: string, n: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyz".split('')
  const isDigit = (character: string) => {
    const EXPRESSION = /^\d$/;
    return character && EXPRESSION.test(character);
  };
  const isLetter = (character: string) => {
    const EXPRESSION = /^[a-z]$/i;
    return character && EXPRESSION.test(character);
  };
  let str = s.split(" ")
  let result = ""
  str.forEach(s => {
    let word: string[] = []
    s.toUpperCase().split("").forEach((c, i) => {
      let index = chars.indexOf(c.toLowerCase())
      if (isDigit(c)) {
        word.push((9 - parseInt(c)).toString())
      } else if (isLetter(c)) {
        console.log(i, chars[index])
        if (i % 2 == 0) {
          word.push(chars[index + n].toUpperCase())
        }
      } else {
        word.push(c)
      }
    })
    result += word.join("") + " "
  })

  return result.split("").reverse().join("").slice(1, result.length)
}
