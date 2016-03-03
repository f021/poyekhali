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
export const toCol = (arr, w) =>
  Array.from(new Array(w), (_, x) =>
    Array.from(new Array(arr.length/w), (_,y) =>
      arr[x + y * w]
    )
  )
