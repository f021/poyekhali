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
// compose :: [Function] -> a -> a
export const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)
