class View {
  /**
   * @param {Number} id
   * @param {String} className
   * @param {View} parent
   * @param {Object} props
   */
  constructor(id, className, props = {}) {
    this.id = id;
    this.className = className;
    this.props = props;
    this.children = [];
    this.measures = {};
    this.commandCalls = [];
  }

  /**
   * Add a view to the children array
   * @param {View} child
   * @param {Number} index
   */
  addChildAt(child, index) {
    this.children[index] = child;
    child.setParentId(this.id);
  }

  /**
   * set id of the parent view
   * @param {Array} children
   */
  setParentId(parentId) {
    this.parentId = parentId;
  }

  /**
   * set the children array
   * @param {Array} children
   */
  setChildren(children) {
    children.forEach(child => child.setParentId(this.id));
    this.children = children;
  }

  /**
   * set props
   * @param {Object} props
   */
  setProps(props) {
    this.props = props;
  }

  /**
   * set className
   * @param {String} className
   */
  setClassName(className) {
    this.className = className;
  }

  /**
   * Return a view
   * @param {Number} index
   * @returns {View}
   */
  getChildAt(index) {
    return this.children[index];
  }

  /**
   * Delete a view to the children array
   * @param {View} child
   */
  removeChildAt(index) {
    this.children[index].setParentId(null);
    this.children.splice(index, 1);
  }

  addMeasures(name, value) {
    this.measures[name] = value;
  }

  addCommandCall(...value) {
    this.commandCalls.push(value);
  }
}

module.exports = View;
