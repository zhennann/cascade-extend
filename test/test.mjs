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
}
const res = cascadeExtend({ scope, source, name: 'ebParams' });
console.log(res);