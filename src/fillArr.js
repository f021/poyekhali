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
export const fillArr = ([x, ...xs], fn) =>
  Array.from({ length: x }, (_, i) =>
    xs.length ? fillArr(xs, fn) : fn(i))
