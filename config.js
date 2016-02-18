var config = {};

//envs config
config.env = {
  dev: 'node',
  deploy: 'dist' //values: django, dist,
};

//Page configuration
// config.page = {
//   title: 'dirpic',
//   description: 'dirpic',
//   keywords: '',
//   analytics_ua: 'UA-XXXXXXXX-XX',
//   facebook: {
//     app_id: '',
//     feed: {
//       link: 'www.facebook.com/link/app_',
//       picture: '', //example http://domain.ext/path/to/picture.jpg
//       name: '',
//       caption: '',
//       description: ''
//     }
//   }
// };

//Environments configuration methods
config.envs = {
  node: {
    static_url : '/static/'
  },
  dist: {
    static_url : 'static/',
    templates: 'dist/',
    static: 'dist/static/'
  },
  django: {
    static_url : '{{ STATIC_URL }}',
    templates: '../templates/',
    static: '../static/'
  }
};

config.path= (function (env){
  return {
    static: config.envs[env].static,
    templates: config.envs[env].templates
  };
}(config.env.deploy));


//config gulp global paths

// config.gulp = {
//   templates: {
//     dest: config.envs[config.env.deploy].templates
//   },
//   scripts: {
//     dest: config.envs[config.env.deploy].static + 'scripts/'
//   },
//   styles: {
//     dest: config.envs[config.env.deploy].static + 'styles/'
//   },
//   images: {
//     dest: config.envs[config.env.deploy].static + 'images/'
//   },
//   fonts: {
//     dest: config.envs[config.env.deploy].static + 'fonts/'
//   }
// };

module.exports = config;
