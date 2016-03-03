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
// vectorFn :: Function -> [ { Vector } ] -> { Vector }
export const vectorFn = fn => (...args) =>
  args.reduce((v1, v2) => ({
    x: fn(v1.x, v2.x),
    y: fn(v1.y, v2.y)
  }))
