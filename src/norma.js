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
// norma :: a -> a -> Function -> a -> a
export const norma = (a, b, rule) =>
  n =>
    rule(n) ? b : a
