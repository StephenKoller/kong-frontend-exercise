export function formatLargeNumber(num: number): string {
  if (num > 1000000) {
    return Math.floor(num / 10000) / 100 + 'M'
  }
  return Math.floor(num / 1000) + 'k'
}

const floatToPercentage = (num: number) => num * 100

export function formatPercentage(num: number): string {
  const formattedPercentage = floatToPercentage(num).toFixed(2)
  return `${formattedPercentage}%`
}
