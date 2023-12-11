import extend from '@zhennann/extend';

export default function cascadeExtend({ scope, source, name }) {
  if (!source || !name) return null;
  // filter
  const keys = Object.keys(source).filter(key => {
    return key === name || key.indexOf(name + '_') === 0
  });
  if (keys.length === 0) return null;
  if (keys.length === 1 && keys[0] === name) return source[keys[0]];
  // sort
  keys.sort((a, b) => {
    return a.split('_').length - b.split('_').length;
  })
  // extend
  const result = {};
  const nameLength = name.length;
  for (const key of keys) {
    if (key === name) {
      extend(true, result, source[key]);
    } else {
      const parts = key.substring(nameLength + 1).split('_');
      const test = parts.every(part => !!scope[part]);
      if (test) {
        extend(true, result, source[key]);
      }
    }
  }
  return result;
}