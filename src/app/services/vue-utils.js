export function snakeToCamel(input) {
  const regexp = /(_\w)/g
  return input.replace(regexp, match => match[1].toUpperCase())
}

export function camelToSnake(input) {
  const regexp = /\.?([A-Z]+)/g
  return input.replace(regexp, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, '')
}
