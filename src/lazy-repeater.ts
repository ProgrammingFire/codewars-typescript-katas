export function makeLooper(str: string): () => string {
  let currentIndex = 0
  return () => {
    if (currentIndex >= str.length) {
      currentIndex = 0
    }
    let index = currentIndex
    currentIndex++
    return str[index]
  };
}
