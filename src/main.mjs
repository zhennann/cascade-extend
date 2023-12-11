import extend from '@zhennann/extend';

export default function cascadeExtend({ scope, source, name }) {
  if (!source || !name) return null;
  const keys = Object.keys(source).filter(key => {
    return key === name || key.indexOf(name + '_') === 0
  });
  if (keys.length === 0) return null;
  if (keys.length === 1 && keys[0] === name) return source[keys[0]];
  keys.sort((a,b)=>{
    const a2=a.split('_').length;
    const b2=b.split('_').length;
    return a2-b2;
  })
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