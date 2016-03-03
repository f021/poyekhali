export const toRow = (arr, w) =>
  Array.from(new Array(Math.floor(arr.length/w)), (_, x) =>
      arr.slice(x * w, w * (x + 1)
    )
  )
