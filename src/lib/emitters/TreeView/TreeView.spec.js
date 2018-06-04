import { BehaviorSubject, Observable } from 'rxjs/Rx';
import TreeView from './index';
import EmitterType from '../../enum/EmitterType';

describe('TreeView', () => {
  it('should have an instace of BehaviorSubject when instancied', () => {
    const treeView = new TreeView();
    expect(treeView).toBeInstanceOf(BehaviorSubject);
  });

  it('should have a type TreeView', () => {
    const treeView = new TreeView();
    expect(treeView.type).toBe(EmitterType.TreeView);
  });

  it('should return an observable when asObservable is call', () => {
    const treeView = new TreeView();
    expect(treeView.asObservable()).toBeInstanceOf(Observable);
  });
});
