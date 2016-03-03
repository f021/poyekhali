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
import { resizeArr } from './resizeArr'

export const todo = (from, to) =>
  (arr, w, x) =>
    from(to(arr, w).map(xs =>
      resizeArr(xs, x)
  ))
