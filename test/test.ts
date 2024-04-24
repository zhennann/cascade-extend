import cascadeExtend from '../src/main.mjs';

const scope = {
    group: true,
    mobile: true,
    small: true,
    view: true,
}
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
        name: 'kevin',
        group: true,
    },
}
console.log(new Date());
let res;
for (let i = 0; i < 100; i++) {
    res = cascadeExtend({ scope, source, name: 'ebParams' });
}
console.log(new Date());
console.log(res);
