var config = require('./config.js'),
  handler = {};

handler.page = config.page;

handler.pretty = true;

handler.set_env = function(env){
  handler.env = env;
};

handler.static_url = function(url){
  return config.envs[config.env[handler.env]].static_url + url;
};

module.exports = handler;
