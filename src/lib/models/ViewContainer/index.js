class ViewContainer {
  /**
   * @param {View} root
   */
  constructor(root) {
    this.root = root;
    this.views = {};
    this.views[root.id] = root;
    this.jsResponders = {};
    this.get = this.get.bind(this);
  }

  /**
   * Add a new view
   * @param {Object} data
   */
  addView(view) {
    this.views[view.id] = view;
  }

  /**
   * Return a view by id
   * @param {Number} id
   */
  get(id) {
    return this.views[id];
  }

  clearJSResponders() {
    this.jsResponders = {};
  }

  addJSResponder(tag, value) {
    this.jsResponders[tag] = value;
  }
}

module.exports = ViewContainer;
