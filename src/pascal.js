/**
* returns curryid function
@memberOf poyekhali
@category Function
@sig
@param { Funciton } arr
@return { Function }
@example
  const fn = go.curry((a, b) => a)
  //=> fn()
*/

export const pascal = (x, y) =>
  x === 0 || x === y ?  1 : pascal(x - 1, y - 1) + pascal(x, y - 1)
