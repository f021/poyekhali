// compose :: [Function] -> a -> a
export const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)
