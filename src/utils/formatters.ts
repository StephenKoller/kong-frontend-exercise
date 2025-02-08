export function formatThousands(num: number /*unit?: 'M' | 'k' */): number {
  // if (unit) {
  //   return Math.round(num / (unit === 'M' ? 1000000 : 1000))
  // }
  return Math.round(num / 1000)
}

const floatToPercentage = (num: number) => num * 100

export function formatPercentage(num: number): string {
  const formattedPercentage = floatToPercentage(num).toFixed(2)
  return `${formattedPercentage}%`
}
