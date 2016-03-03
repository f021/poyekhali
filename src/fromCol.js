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
export const fromCol = (arr) => {
  const [ w, h ] = [ arr.length, arr[0].length]
  return Array.from(new Array(w * h), (_, i) =>
    arr[i % w][Math.floor(i / w)]
  )
}
