export function nbMonths(startPriceOld: number, startPriceNew: number, savingPerMonth: number, percentLossByMonth: number): number[] {
  let savings = 0;
  let months = 0;
  while (startPriceOld + savings < startPriceNew) {
    months += 1
    savings += savingPerMonth;

    if (months % 2 == 0) {
      percentLossByMonth += 0.5
    }

    startPriceOld -= startPriceOld * (percentLossByMonth / 100)
    startPriceNew -= startPriceNew * (percentLossByMonth / 100)
  }
  return [months, Math.round(startPriceOld + savings - startPriceNew)]
}
