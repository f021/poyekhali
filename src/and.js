export const and = (...args) =>
  args.every(not(isEmpty)) && last(args)
