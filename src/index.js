// vectorFn :: Function -> [ { Vector } ] -> { Vector }
const vectorFn = fn => (...args) =>
  args.reduce((v1, v2) => ({
    x: fn(v1.x, v2.x),
    y: fn(v1.y, v2.y)
  }))

export const add = vectorFn((a,b) => a + b)

export const sub = vectorFn((a,b) => a - b)

// compose :: [Function] -> a -> a
export const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)

// sum :: [ Int ] -> Int
export const sum = arr =>
  arr.reduce((a,b) => a + b)

// zip :: [ a ] -> [ a ] -> [ [a, a] ]
export const zip = (as, bs) =>
  as.map((a, i) => [a, bs[i]])

// not :: a -> Boolean
export const not = a => !a

// notEqual :: [ a ] -> [ a ] -> Boolean
export const notEqual = (as, bs) =>
    as.some((a, i) => a !== bs[i])

// norma :: a -> a -> Function -> a -> a
export const norma = (a, b, rule) => n => rule(n) ? b : a

export const box = (w, h) => ({w, h, landscape: w > h })

export const center = (a, b) => [ (a.w - b.w)/2, (a.h - b.h)/2 ]

export const trigger = (fn, fn2, f = false) =>
  x => {
    f = !f
    f ? fn(x) : fn2(x)
  }

export const isFunc = x => typeof x === 'function' ? x : false

export const getMethods = obj =>
    Object.keys(obj).map(key =>
      isFunc(obj[key]))

export const toggleKey = obj => key => ({
  ...obj, key: !obj[key]
})

export const same = (a, b) =>
  JSON.stringify(a) === JSON.stringify(b)

export const renew = (prev, next={}) =>
  not(same(prev, next)) ?
    next :
    prev

export const fillArr = ([x, ...xs], fn) =>
  Array.from(new Array(x), (_, i) =>
    xs.length ? fillArr(xs, fn) : fn(i))

export const fillMatrix = ([w, h], fn) =>
  Array.from(new Array(w), () =>
    fillArr([h], fn))

export const toRow = (arr, w) =>
  Array.from(new Array(Math.floor(arr.length/w)), (_, x) =>
      arr.slice(x * w, w * (x + 1)
    )
  )

export const toCol = (arr, w) =>
  Array.from(new Array(w), (_, x) =>
    Array.from(new Array(arr.length/w), (_,y) =>
      arr[x + y * w]
    )
  )

export const fromRow = (arr) =>
  [].concat(...arr)

export const fromCol = (arr) => {
  const [ w, h ] = [ arr.length, arr[0].length]
  return Array.from(new Array(w * h), (_, i) =>
    arr[i % w][Math.floor(i / w)]
  )
}

export const resizeArr = (arr, w) => {
  const x = Math.round((w - arr.length)/2)
  return x > 0
    ? [
      ...fillArr([x], () => 0),
      ...arr,
      ...fillArr([x - (w - arr.length) % 2], () => 0)
    ]
    : [
      ...arr.slice(-x, w + -x)
    ]
}

export const todo = (from, to) =>
  (arr, w, x) =>
    from(to(arr, w).map(xs =>
      resizeArr(xs, x)
  ))

export const addColumn = todo(fromCol, toCol)
export const addRow = todo(fromRow, toRow)
