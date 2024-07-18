/**
 * Currying is a useful technique used in JavaScript applications.
 * Please implement a curry() function, which accepts a function and return a curried one.
 * Here is an example
 */

const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`);
  // return `${a}_${b}_${c}`
};

// using closures
function curry(fn) {
  return function innerCurry(...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    }
    return function (...args2) {
      return innerCurry(...args1.concat(...args2));
    };
  };
}

// using bind
function curry(fn) {
  return function innerCurry(...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    }
    return innerCurry.bind(this, ...args1);
  };
}

const curriedJoin = curry(join);

// curriedJoin(1, 2, 3); // '1_2_3'

// curriedJoin(1)(2, 3); // '1_2_3'

// curriedJoin(1, 2)(3); // '1_2_3'
