import { BehaviorSubject, Observable } from 'rxjs';
import ViewState from './';
import SubjectType from '../../enum/SubjectType';

describe('ViewState', () => {
  it('should have an instace of BehaviorSubject when instancied', () => {
    const viewState = new ViewState();
    expect(viewState).toBeInstanceOf(BehaviorSubject);
  });

  it('should have a type ViewState', () => {
    const viewState = new ViewState();
    expect(viewState.type).toBe(SubjectType.ViewState);
  });

  it('should return an observable when asObservable is call', () => {
    const viewState = new ViewState();
    expect(viewState.asObservable()).toBeInstanceOf(Observable);
  });
});
