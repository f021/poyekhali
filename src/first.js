/**
* returns the value of first elements in string or array
@memberOf poyekhali
@category Function
@sig [ a ] -> a
@param {(string|array)} xs
@param {string} [n='']
@return {a}
@example
  go.toArr('abc') //=> ['a', 'b', 'c']
  go.toArr([1,2,3]) //=> [1, 2, 3]
*/
export const first = xs =>
  xs[0]
