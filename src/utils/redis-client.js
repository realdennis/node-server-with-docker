// redis-client.js
const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient({
  host: "redis",
  port: 6379
});

export default {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
};
