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

export const pascal = (x, y) => {
  console.log(x, y)
  if (x === 0 || x === y || y ===0) {
    return 1
  } else {
    return pascal(x - 1, y - 1) + pascal(x, y - 1)
  }
}
