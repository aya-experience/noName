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

  it('should add a js responder', () => {
    const value = [14];
    viewContainer.addJSResponder(11, value);
    expect(viewContainer.jsResponders[11]).toBe(value);
  });

  it('should add a js responder', () => {
    const value = [14];
    viewContainer.addJSResponder(11, value);
    viewContainer.clearJSResponders();
    expect(viewContainer.jsResponders).toEqual({});
  });
});
