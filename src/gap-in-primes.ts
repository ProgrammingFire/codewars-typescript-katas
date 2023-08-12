export const gap = (g: number, m: number, n: number): number[] | null => {
  let arr = [];
  let counter = [];
  let result: number[] | null = null;
  for (var x = m; x <= n; x++) {
    if (x % 2 == 1) {
      arr.push(x)
    }
  }
  for (var cache = arr.length, j = cache; j >= 0; j--) {
    for (var i = 2; i <= Math.sqrt(arr[j]); i++) {
      if (arr[j] % i === 0) {
        if (i != arr[j] / i || i * i == arr[j]) {
          counter.push(arr[j] / i)
          arr.splice(j, 1)
          break;
        }
      }
    }

    if ((arr[j + 1] - arr[j]) == g) {
      result = [arr[j], arr[j + 1]]
    } else if (result == undefined) {
      result = null
    }
  }

  return result
}
