/**
* return n-dimension array filling by param function
@memberOf poyekhali
@category Function
@sig
@param {(int|array)} xs
@param {Function}
@return array
@example
  go.fillArr([2], () => 0)
  // => [ 0, 0 ]
  go.fillArr([2, 2], i => i)
  // => [ [0, 1], [0, 1]]
  go.fillArr([2, 2], (a, b) => b)
  // => [ [0, 1], [2, 3]]
*/

import { count } from './count'

const makeArr = ([x, ...xs], fn) =>
  Array.from({ length: x }, () =>
    xs.length ? makeArr(xs, count(fn)) : fn()
  )

export const fillArr = (xs, fn) =>
  makeArr(
    Array.isArray(xs) ?
      [...xs.reverse() ] :
      [ xs ]
    , count(fn)
  )
