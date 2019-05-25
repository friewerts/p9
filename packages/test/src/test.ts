import { getValue } from '@p9/js-utils/lib/object-helpers';

const obj = {
  a: {
    b: {
      c: 1
    },
    d: true
  }
};
console.log('1', getValue(obj, "a.b"));
console.log('2', getValue(obj, "a.f"));