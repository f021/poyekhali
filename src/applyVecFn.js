/**
* returns vector making by function rules
@memberOf poyekhali
@category Function
@sig
@param {Function} fn
@param {array} args
@return array
@example
  go.applyVecFn(
    (a, b) =>
      a + b)
    ([ 1, 2 ], [ -1, -2 ])
  )
  // => [0, 0]
  go.applyVecFn(
    (a, b) =>
      a - b)
    ([ 1, 2 ], [ -1, -2 ])
  )
  // => [2, 4]
*/

export const applyVecFn = fn =>
  (...args) =>
    args.reduce((prev, next) =>
      prev.map((elm, i) =>
        fn(elm, next[i])
      )
    )
