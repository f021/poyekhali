export const toCol = (arr, w) =>
  Array.from(new Array(w), (_, x) =>
    Array.from(new Array(arr.length/w), (_,y) =>
      arr[x + y * w]
    )
  )
