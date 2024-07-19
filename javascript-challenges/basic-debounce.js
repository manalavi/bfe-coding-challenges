/**
 * In case you forgot, debounce(func, delay) will returned a debounced function, which delays the invoke
 */

function debounce(callback) {
  let timer = null;

  clearTimeout(timer);

  return function (...args) {
    timer = setTimeout(() => {
      callback.apply(this, args);
      timer = null;
    }, args);
  };
}

const timerClick = (delay) => {
  console.log(`clicked after ${delay}ms`);
};

const debouncedCall = debounce(timerClick);

debouncedCall(2000);
