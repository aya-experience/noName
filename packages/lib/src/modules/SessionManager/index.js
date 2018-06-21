class SessionManager {
  constructor() {
    this.sessionState = {};
  }

  get(key) {
    return this.sessionState[key];
  }

  set(key, item) {
    this.sessionState[key] = item;
  }
}

module.exports = SessionManager;
