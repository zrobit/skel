var config = {};

//envs config
config.env = {
  dev: 'node',
  deploy: 'django'
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
  django: {
    static_url : '{{ STATIC_URL }}'
  }
};

module.exports = config;
