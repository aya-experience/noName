const EmitterType = require('../../enum/EmitterType');

class NotFoundError extends Error {
  constructor(props) {
    super(props);
    this.type = EmitterType.NotFound;
  }
}

module.exports = NotFoundError;
