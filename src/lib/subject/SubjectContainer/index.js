const SubjectType = require('../../enum/SubjectType');
const ViewState = require('../ViewState');
/**
 * Transform array<Subject> to dictionnary<String,Subject>
 * the key of the dictionnary is the attribut type of the subject
 * @param {Array<Subject>} subjects
 */
const subjectMapGenerator = subjects =>
  subjects.reduce((map, subject) => ({ ...map, [subject.type]: subject }), {});

const SUBJECTS = [new ViewState()];

class SubjectContainer {
  /**
   * Init the SubjectContainer with a <String,Subject> subjects
   * the key of subjects is the type of the subject
   * @param {Array<Subject>} subjects
   */
  constructor() {
    this.subjects = subjectMapGenerator(SUBJECTS);
  }

  /**
   * Send the response to the subject corresponding
   * Use the attribut type of reponse to find the subject
   * if no subject match to the reponse type, a message is send to Error Subject
   * @param {Response} response
   */
  handle(response) {
    const subject = this.get(response.type);
    if (subject) {
      subject.next(response.data);
    } else {
      this.subjects[SubjectType.Error].next({
        message: `No existing subject for ${response.type} Response`,
      });
    }
  }

  /**
   * Return a Subject or null
   * @param {String} name
   * @returns {Subject}
   */
  get(name) {
    return this.subjects[name];
  }
}

module.exports = SubjectContainer;
