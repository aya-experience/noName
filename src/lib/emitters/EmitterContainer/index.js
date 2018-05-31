const EmitterType = require('../../enum/EmitterType');
const TreeView = require('../TreeView');
const Console = require('../Console');
const ErrorEmitter = require('../ErrorEmitter');
const NotFoundEmitter = require('../NotFoundEmitter');
/**
 * Transform array<Emitter> to dictionnary<String,Emitter>
 * the key of the dictionnary is the attribut type of the emitter
 * @param {Array<Emitter>} emitters
 */
const emitterMapGenerator = emitters =>
  emitters.reduce((map, emitter) => ({ ...map, [emitter.type]: emitter }), {});

const EMITTERS = [new TreeView(), new ErrorEmitter(), new NotFoundEmitter(), new Console()];

class EmitterContainer {
  /**
   * Init the EmitterContainer with a <String,Emitter> emitters
   * the key of emitters is the type of the emitter
   * @param {Array<Emitter>} emitters
   */
  constructor(emitters = EMITTERS) {
    this.emitters = emitterMapGenerator(emitters);
    this.handle = this.handle.bind(this);
    this.get = this.get.bind(this);
  }

  /**
   * Send the response to the emitter corresponding
   * Use the attribut type of reponse to find the emitter
   * if no emitter match to the reponse type, a message is send to ErrorEmitter
   * @param {Response} response
   */
  handle(response) {
    const emitter = this.get(response.type);
    if (emitter) {
      emitter.next(response.data);
    } else {
      this.emitters[EmitterType.Error].next({
        message: `No existing emitter for ${response.type} Response`,
      });
    }
  }

  /**
   * Return a Emitter or null
   * @param {String} name
   * @returns {Emitter}
   */
  get(name) {
    return this.emitters[name];
  }
}

module.exports = EmitterContainer;
