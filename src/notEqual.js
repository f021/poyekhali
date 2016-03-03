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
// notEqual :: [ a ] -> [ a ] -> Boolean
export const notEqual = (as, bs) =>
    as.some((a, i) => a !== bs[i])
