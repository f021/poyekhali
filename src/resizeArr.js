/**
* if string return arr
@memberOf poyekhali
@category Function
@sig
@param {(string|array)} xs
@param {string} [n='']
@return array
@example
  go.toArr('abc') //=> ['a', 'b', 'c']
  go.toArr([1,2,3]) //=> [1, 2, 3]
*/
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
