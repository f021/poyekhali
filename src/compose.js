/**
* returns function composition from right
@memberOf poyekhali
@category Function
@sig
@param {Function} fns
@param { a } x
@return a
@example
  go.compose(x => x - 4, x => x / 2)(10)
  // => 1
  go.compose(head, reverse)([ 1, 2, 3 ])
  // => 3
*/
// compose :: [Function] -> a -> a
export const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)
