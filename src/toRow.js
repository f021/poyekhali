export const toRow = (arr, w) =>
  Array.from({ length: Math.floor(arr.length/w) }, (_, x) =>
      arr.slice(x * w, w * (x + 1)
    )
  )
