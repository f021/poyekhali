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
import fillArr from './fillArr'

export const fillMatrix = ([w, h], fn) =>
  Array.from(new Array(w), () =>
    fillArr([h], fn))
