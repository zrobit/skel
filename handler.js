var config = require('./config.js'),
  handler = {};

handler.page = config.page;

handler.pretty = true;

handler.envs = {
  node: {
    static_url: function ( url ) {
      return config.envs.node.static_url + url;
    }
  },
  django: {
    static_url: function ( url ) {
      return config.envs.node.static_url + url;
    }
  }
};

handler.set_env = function(env){
  handler.static_url = handler.envs[env].static_url;
};

module.exports = handler;
