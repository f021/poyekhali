/**
* returns true if false, null or undefined
@memberOf poyekhali
@category Function
@sig
@param {(string|array)} xs
@return boolean
@example
  go.isEmpty('abc') //=> false
  go.toArr(false) //=> true
*/
export const isEmpty = x =>
  (x === false || x === null || x === undefined)
