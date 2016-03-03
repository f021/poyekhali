export const fromCol = (arr) => {
  const [ w, h ] = [ arr.length, arr[0].length]
  return Array.from(new Array(w * h), (_, i) =>
    arr[i % w][Math.floor(i / w)]
  )
}
