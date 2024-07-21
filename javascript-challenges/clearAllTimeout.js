/**
 * cancel all timer from window.setTimeout
 */

function clearAllTimeout() {
  // your code here
  let id = setTimeout(() => null, 0);
  while (id) {
    clearTimeout(id);
    id--;
  }
}

setTimeout(() => {
  console.log(1);
}, 1000);
setTimeout(() => {
  console.log(2);
}, 1000);
setTimeout(() => {
  console.log(3);
}, 1000);

clearAllTimeout();

/**
 * in order to clearalltimeout func prev created, the solution is to create a new timeout func and get the latest id
 * by then loop over the ids clearing the timeouts of prev ids created.
 */
