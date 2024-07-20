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

/**
 * debounce - a debounce function is a solution to a race condition problem wherein mutliple calls to a func can be reduced which can creates data inconsistency.
 * debouce function - a standard debounce func takes in a callback func and a delay (time) - which then executes by waiting (delay) for the current event to get complet even
 *                  when the multiple calls are trigered by the user.
 * Example - a user clicking on a shopping cart button to add product
 *         - a user searching through a list of data which result in providing data suggestion based on the input provided.
 */
