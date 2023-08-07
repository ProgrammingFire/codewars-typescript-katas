export const findOdd = (xs: number[]): number => {
  const counter: any = {};

  for (const index in xs) {
    const ele = xs[index]
    if (counter[ele]) {
      counter[ele] += 1;
    } else {
      counter[ele] = 1;
    }
  }

  for (const key in counter) {
    if (counter[key] % 2 === 1) {
      return parseInt(key);
    }
  }

  return 0;
};
