/**
 * There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.
 * Could you manage to implement your own one?
 * Here is an example to illustrate
 */

const arr = [1, [2], [3, [4]]];

function flat(arr, depth = 1) {
  const result = [];
  const stack = [...arr.map((item) => [item, depth])];

  while (stack.length > 0) {
    const [top, depth] = stack.pop();
    if (Array.isArray(top) && depth > 0) {
      stack.push(...top.map((item) => [item, depth - 1]));
    } else {
      res.push(top);
    }
  }
  console.log(res.reverse());

  // using recursion
  //   r(stack, result);
}

function r(stack, res) {
  if (!stack.length) {
    console.log(res.reverse());
    return res;
  } else {
    const [top, depth] = stack.pop();
    if (Array.isArray(top) && depth > 0) {
      r([...stack, ...top.map((item) => [item, depth - 1])], res);
    } else {
      r(stack, [...res, top]);
    }
  }
}

// flat(arr);
// flat(arr, 1);
// flat(arr, 2);
