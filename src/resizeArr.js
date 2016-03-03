export const resizeArr = (arr, w) => {
  const x = Math.round((w - arr.length)/2)
  return x > 0
    ? [
      ...fillArr([x], () => 0),
      ...arr,
      ...fillArr([x - (w - arr.length) % 2], () => 0)
    ]
    : [
      ...arr.slice(-x, w + -x)
    ]
}
