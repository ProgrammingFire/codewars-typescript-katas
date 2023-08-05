export function numberOfPeople(busStops: [number, number][]): number {
  let result = 0;

  for (const peopleGet in busStops) {
    let a = busStops[peopleGet]
    result = result + a[0] - a[1]
  }

  return result
}
