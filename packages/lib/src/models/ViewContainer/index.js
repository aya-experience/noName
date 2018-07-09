class ViewContainer {
  /**
   * @param {View} root
   */
  constructor(root) {
    this.root = root;
    this.views = {};
    this.views[root.id] = root;
    this.responders = [];
    this.focus = null;
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

  clearResponders() {
    this.responders.forEach(view => view.deactivateResponding());
    this.responders = [];
  }

  registerFocus(view) {
    if (this.focus) this.focus.unfocus();
    view.focus();
    this.focus = view;
  }

  registerResponder(view) {
    view.activateResponding();
    this.responders.push(view);
  }
}

module.exports = ViewContainer;
