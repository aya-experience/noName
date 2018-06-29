class NetworkRequest {
  constructor(
    method, url, id, headers,
    data, responseType, useIncrementalUpdates,
    timeout, withCredentials,
  ) {
    this.method = method;
    this.url = url;
    this.id = id;
    this.data = data;
    this.headers = headers;
    this.responseType = responseType;
    this.useIncrementalUpdates = useIncrementalUpdates;
    this.timeout = timeout;
    this.withCredentials = withCredentials;
  }
}

module.exports = NetworkRequest;
