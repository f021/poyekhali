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
import { pascal } from './pascal'

export const pascalsTriangle = (n, acc = []) =>
  n ?
    pascalsTriangle(n - 1, [
      ...Array.from({ length: n }, (_, i) =>
        pascal(i, n - 1)),
      ...acc
    ]) :
    acc
