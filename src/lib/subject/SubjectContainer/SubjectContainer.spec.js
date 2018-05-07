import SubjectContainer from './';
import SubjectType from '../../enum/SubjectType';
import Response from '../../models/Response';

describe('SubjectContainer', () => {
  let subjects;
  let container;

  beforeEach(() => {
    subjects = [
      { type: SubjectType.ViewState, next: jest.fn() },
      { type: SubjectType.Console, next: jest.fn() },
      { type: SubjectType.Error, next: jest.fn() },
    ];
    container = new SubjectContainer(subjects);
  });

  it('should build a map of subject', () => {
    expect(container.subjects).toEqual({
      ViewState: subjects[0],
      Console: subjects[1],
      Error: subjects[2],
    });
  });

  it('should call the subject of name response.type', () => {
    const data = 'data';
    const response = new Response('ViewState', data);
    container.handle(response);
    expect(subjects[0].next).toBeCalledWith(data);
  });

  it('should send a message to error subject when unknow reponse.type is given', () => {
    const data = 'data';
    const response = new Response('unknow', data);
    container.handle(response);
    expect(subjects[2].next).toBeCalledWith({
      message: `No existing subject for ${response.type} Response`,
    });
  });

  it('should send a message to error subject when unknow reponse.type is given', () => {
    const data = 'data';
    const response = new Response('unknow', data);
    container.handle(response);
    expect(subjects[2].next).toBeCalledWith({
      message: `No existing subject for ${response.type} Response`,
    });
  });
});
