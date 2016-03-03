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
// zip :: [ a ] -> [ a ] -> [ [a, a] ]
export const zip = (as, bs) =>
  as.map((a, i) => [a, bs[i]])
