/**
* returns array with new size
@memberOf poyekhali
@category Function
@sig
@param { array } xs
@param { int } w
@param { int | string } feed = 0
@return array
@example
  go.zoomArr([ 1, 2, 3, 4 ] , 2)
  //=> [ 2, 3 ]
  go.zoomArr([ 'a' ], 3, '@')
  //=> [ '@', 'a', '@' ]
*/

export const zoomArr = (arr, w, feed = 0) => {

  const left = Math.round((w - arr.length) / 2)
  const right = left - ( w - arr.length) % 2
  const fill = n =>
    Array.from({ length: n },  () => feed)

  return left > 0
    ? [].concat(fill(left), arr, fill(right))
    : [ ...arr.slice(-left, w + -left) ]
}
