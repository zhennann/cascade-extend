import { cascadeExtendKeys, cascadeExtend } from '../dist/index.js';

const scope = {
  group: true,
  mobile: true,
  small: true,
  view: true,
};
const source = {
  ebParams_mobile: {
    size: 'small',
    scene: 'mobile',
    group: true,
  },
  ebParams: {
    size: 'large',
    scene: 'pc',
    name: 'yang',
  },
  ebParams_pc: {
    size: 'large',
    scene: 'pc',
    name: 'kevin_pc',
    group: true,
  },
  ebParams_view: {
    name: 'kevin_view',
  },
  ebParams_pc_view: {
    size: 'large',
    scene: 'pc',
  },
};
//{ size: 'small', scene: 'mobile', name: 'kevin_view', group: true }

console.log(new Date());
let resKeys;
let res;
for (let i = 0; i < 100; i++) {
  resKeys = cascadeExtendKeys(scope, source, 'ebParams');
  res = cascadeExtend({ scope, source, name: 'ebParams' });
}
console.log(new Date());
console.log(resKeys);
console.log(res);
