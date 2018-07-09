const EmitterType = require('../../enum/EmitterType.json');

class NotFoundError extends Error {
  constructor(props) {
    super(props);
    this.type = EmitterType.NotFound;
  }
}

module.exports = NotFoundError;
