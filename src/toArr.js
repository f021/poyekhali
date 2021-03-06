/**
* returns array of char if string spliting by nor return arr
@memberOf poyekhali
@category Function
@sig
@param {(string|array)} xs
@param {string} [n='']
@return array
@example
  go.toArr('abc')
  //=> ['a', 'b', 'c']
  go.toArr([1,2,3])
  //=> [1, 2, 3]
*/


export const toArr = (xs, n = '') =>
  typeof xs === 'string' ?
    xs.split(n) :
    xs
