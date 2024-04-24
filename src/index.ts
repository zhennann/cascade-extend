import { extend } from '@cabloy/extend';

export function cascadeExtendKeys(
  scope: object,
  source: object | undefined,
  name?: string,
  sep: string = '_',
): string[] | undefined {
  if (!source) return undefined;
  if (name === undefined) name = '';
  // filter
  let keys = Object.keys(source).filter(key => {
    return key === name || key.indexOf(name + sep) === 0;
  });
  if (keys.length === 0) return undefined;
  if (keys.length === 1 && keys[0] === name) return keys;
  // sort
  keys.sort((a, b) => {
    return a.split('_').length - b.split('_').length;
  });
  // filter
  const nameLength = name.length;
  keys = keys.filter(key => {
    if (key === name) return true;
    const parts = key.substring(nameLength + 1).split(sep);
    return parts.every(part => !!scope[part]);
  });
  // ok
  return keys.length === 0 ? undefined : keys;
}

export function cascadeExtend({ scope, source, name }) {
  if (!source) return null;
  // filter
  const keys = Object.keys(source).filter(key => {
    return key === name || key.indexOf(name + '_') === 0;
  });
  if (keys.length === 0) return null;
  if (keys.length === 1 && keys[0] === name) return source[keys[0]];
  // sort
  keys.sort((a, b) => {
    return a.split('_').length - b.split('_').length;
  });
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
