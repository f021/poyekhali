export const getMethods = obj =>
    Object.keys(obj).map(key =>
      isFunc(obj[key]))
