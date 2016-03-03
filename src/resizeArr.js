import { fillArr } from './fillArr'

export const resizeArr = (arr, w, feed=0) => {
  const x = Math.round((w - arr.length)/2)
  return x > 0
    ? [
      ...fillArr([x], () => feed),
      ...arr,
      ...fillArr([x - (w - arr.length) % 2], () => feed)
    ]
    : [
      ...arr.slice(-x, w + -x)
    ]
}
