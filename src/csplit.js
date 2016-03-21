/**
* returns splited array by column
@memberOf poyekhali
@category Function
@sig
@param {array} arr
@param {int} w
@return [ [a] ]
@example
  go.csplit([1, 2, 3, 4], 2)
  //=> [[1, 3], [2, 4]]
*/

export const csplit = (arr, w) =>
  Array.from({ length : w}, (_, x) =>
    Array.from({ length: arr.length/w }, (_,y) =>
      arr[x + y * w]
    )
  )
