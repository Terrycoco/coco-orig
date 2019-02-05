export function merge() {
  let merged = {};
  for (var i = 0; i < arguments.length; ++i) {
    Object.assign(merged, arguments[i]);
  }
  return merged;
}