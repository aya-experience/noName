const SOCKET_URL_REGEX = '^https?://(.*)/socket.io/';

const regexFilter = regex => string => string.match(regex);
const socketUrlFilter = regexFilter(SOCKET_URL_REGEX);
module.exports = {
  regexFilter,
  socketUrlFilter,
};
