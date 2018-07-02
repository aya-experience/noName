import ViewContainer from './index';
import View from '../View/index';

describe('ViewContainer', () => {
  let viewContainer;
  let root;
  let child;

  beforeEach(() => {
    root = new View(1, 'RTCView', { backgroundColor: 'JaunePika' });
    child = new View(2, 'RTCText', {});
    viewContainer = new ViewContainer(root);
  });

  it('should have an root component', () => {
    expect(viewContainer).toMatchObject({ root });
  });

  it('should add a view to views', () => {
    viewContainer.addView(child);
    expect(Object.keys(viewContainer.views)).toHaveLength(2);
  });

  it('should return a view recently added', () => {
    viewContainer.addView(child);
    expect(viewContainer.get(child.id)).toBe(child);
  });

  it('should registerResponder push a view to responders', () => {
    viewContainer.registerResponder(root);
    expect(viewContainer.responders).toEqual([root]);
  });

  it('should clearJSResponders clear responders', () => {
    viewContainer.registerResponder(root);
    viewContainer.clearResponders();
    expect(viewContainer.responders).toEqual([]);
  });

  it('should registerResponder call view.activeResponding', () => {
    const view = { activateResponding: jest.fn() };
    viewContainer.registerResponder(view);
    expect(view.activateResponding).toBeCalled();
  });

  it('should clearResponders call view.deactiveResponding for each responder', () => {
    const responders = [{ deactivateResponding: jest.fn() }];
    viewContainer.responders = responders;
    viewContainer.clearResponders();
    expect(responders[0].deactivateResponding).toBeCalled();
  });

  it('should registerFocus call focus on the view passed in param', () => {
    const view = { focus: jest.fn() };
    viewContainer.registerFocus(view);
    expect(view.focus).toBeCalled();
  });

  it('should registerFocus store view on focus', () => {
    const view = { focus: jest.fn() };
    viewContainer.registerFocus(view);
    expect(viewContainer.focus).toBe(view);
  });

  it('should registerFocus remove the last focus with the new', () => {
    const view = { focus: jest.fn() };
    viewContainer.focus = { unfocus: jest.fn() };
    viewContainer.registerFocus(view);
    expect(viewContainer.focus).toBe(view);
  });

  it('should registerFocus call on the last focus unfocus', () => {
    const view = { unfocus: jest.fn() };
    viewContainer.focus = view;
    viewContainer.registerFocus({ focus: jest.fn() });
    expect(view.unfocus).toBeCalled();
  });
});
