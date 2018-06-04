const BaseModule = require('../BaseModule/index');
const Response = require('../../models/Response/index');
const View = require('../../models/View/index');
const EmitterType = require('../../enum/EmitterType');

class UIManager extends BaseModule {
  constructor(sessionManager) {
    super(sessionManager);
    this.createView = this.createView.bind(this);
    this.setChildren = this.setChildren.bind(this);
    this.manageChildren = this.manageChildren.bind(this);
    this.measureInWindow = this.measureInWindow.bind(this);
    this.handle = this.handle.bind(this);
  }

  /**
   * Create a view and add it in view container
   * map createView method from the bridge
   * @param {Object} args
   */
  createView(args) {
    const viewContainer = this._getViewContainer();
    const view = new View(args[0], args[1], args[3]);
    viewContainer.addView(view);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  /**
   * Set all children of a view
   * map setChildren method from the bridge
   * @param {Object} args
   */
  setChildren(args) {
    const viewContainer = this._getViewContainer();
    const parent = viewContainer.get(args[0]);
    const children = args[1].map(viewContainer.get);
    parent.setChildren(children);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  _move(viewTag, moveFrom, moveTo) {
    throw new Error('manageChildren : move');
  }

  _removeChildren(viewTag, indices) {
    const viewContainer = this._getViewContainer();
    const view = viewContainer.get(viewTag);
    const newChilds = view.children.filter((child, index) => indices.indexOf(index) === -1);
    view.setChildren(newChilds);
  }

  _addChildren(viewTag, addChildTags, addAtIndices) {
    const viewContainer = this._getViewContainer();
    const view = viewContainer.get(viewTag);
    const newChilds = [...view.children];
    addChildTags.forEach((child, index) => {
      const childToAdd = viewContainer.get(child);
      newChilds.splice(addAtIndices[index], 0, childToAdd);
    });
    view.setChildren(newChilds);
  }

  /**
   * Manage children of view container
   * map createView method from the bridge
   * @param {Object} args
   */
  manageChildren(args) {
    const viewTag = args[0];
    const moveFrom = args[1];
    const moveTo = args[2];
    const addChildTags = args[3];
    const addAtIndices = args[4];
    const removeFrom = args[5];

    if (moveFrom.length && moveTo.length) {
      this._move(viewTag, moveFrom, moveTo);
    }

    if (addChildTags.length && addAtIndices.length) {
      this._addChildren(viewTag, addChildTags, addAtIndices);
    }

    if (removeFrom.length) {
      this._removeChildren(viewTag, removeFrom);
    }

    return new Response(EmitterType.TreeView, this._getViewContainer());
  }

  updateView(args) {
    const viewContainer = this._getViewContainer();
    const view = viewContainer.get(args[0]);
    view.setClassName(args[1]);
    view.setProps(args[2]);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  measureInWindow(args) {
    const viewContainer = this._getViewContainer();
    const view = viewContainer.get(args[0]);
    view.addMeasures('measureInWindow', args[1]);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  dispatchViewManagerCommand(args) {
    const viewContainer = this._getViewContainer();
    const view = viewContainer.get(args[0]);
    const commandId = args[1];
    const commandArgs = args[2];
    view.addCommandCall(commandId, commandArgs);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  setJSResponder(args) {
    const viewContainer = this._getViewContainer();
    viewContainer.setJsResponder(args[0], args[1]);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  clearJSResponder() {
    const viewContainer = this._getViewContainer();
    viewContainer.clearJSResponders();
    return new Response(EmitterType.TreeView, viewContainer);
  }

  measure(args) {
    const viewContainer = this._getViewContainer();
    const view = viewContainer.get(args[0]);
    view.addMeasures('measure', args[1]);
    return new Response(EmitterType.TreeView, viewContainer);
  }

  _getViewContainer() {
    return this.sessionManager.get('ViewContainer');
  }
}

module.exports = UIManager;
