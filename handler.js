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

handler.url = function(name) {
  if (config.env.deploy == 'django' && handler.env == 'deploy'){
    return urls.map[name][1];
  } else if (config.env.dev == 'node' && handler.env == 'dev'){
    return urls.map[name][0];
  } else {
    return '#';
  }
};

module.exports = handler;
