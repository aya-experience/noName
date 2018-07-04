/* eslint-disable class-methods-use-this */
const BaseModule = require('../BaseModule');
const NetworkRequest = require('../../models/NetworkRequest');
const Response = require('../../models/Response');
const EmetterType = require('../../enum/EmitterType');

class Networking extends BaseModule {
  constructor(sessionManager) {
    super(sessionManager);
    this.sendRequest = this.sendRequest.bind(this);
    this.clearCookies = this.clearCookies.bind(this);
    this.abortRequest = this.abortRequest.bind(this);
  }

  sendRequest(args) {
    const request = new NetworkRequest(...args);
    return new Response(EmetterType.Network, request);
  }

  clearCookies() {
    throw new Error('clearCookies not implemented');
  }

  abortRequest() {
    throw new Error('clearCookies not implemented');
  }
}

module.exports = Networking;
