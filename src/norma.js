// norma :: a -> a -> Function -> a -> a
export const norma = (a, b, rule) =>
  n =>
    rule(n) ? b : a
