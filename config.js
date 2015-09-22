var config = {};

//envs config
config.env = {
  dev: 'node',
  deploy: 'django' //values: django, dist,
};

//Page configuration
config.page = {
  title: 'dirpic',
  description: 'dirpic',
  keywords: '',
  analytics_ua: 'UA-XXXXXXXX-XX',
  facebook: {
    app_id: '',
    feed: {
      link: 'www.facebook.com/link/app_',
      picture: '', //example http://domain.ext/path/to/picture.jpg
      name: '',
      caption: '',
      description: ''
    }
  }
};

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

//config gulp global paths

config.gulp = {
  templates: {
    src: ['templates/**/*.jade', '!templates/**/_*.jade', '!templates/includes/**/*.jade'],
    dest: config.envs[config.env.deploy].templates
  },
  scripts: {
    src: ['scripts/**/*.js'],
    dest: config.envs[config.env.deploy].static + 'scripts/'
  },
  styles: {
    src: ['styles/**/*.styl', '!styles/modules/**/*', '!styles/sections/**/*'],
    dest: config.envs[config.env.deploy].static + 'styles/'
  },
  images: {
    src: ['images/**/*', '!images/icons/**/*'],
    dest: config.envs[config.env.deploy].static + 'images/'
  },
  fonts: {
    src: ['fonts/**/*'],
    dest: config.envs[config.env.deploy].static + 'fonts/'
  }
};

module.exports = config;
