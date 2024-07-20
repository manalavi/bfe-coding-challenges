/**
 * What if we need to support old JavaScript env like es5, how would you create your own Node Store as above?
 * You are asked to implement a Node Store, which supports DOM element as key.
 */

class NodeStore {
  constructor() {
    this.store = {};
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.store[node] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.store[node];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.store[node];
  }
}

/**
 * class syntax which is introduces in es6, is a syntatic sugar of how prototype inheritance and prototype chain works are been done earlier using functions and objects.
 */
