export const isPangram = (phrase: string): boolean => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (const a in alphabets) {
    if (!phrase.toLowerCase().includes(alphabets[a])) {
      return false
    }
  }

  return true;
}
