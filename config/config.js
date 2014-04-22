var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'devnights'
    },
    port: 3000,
    db: 'mongodb://localhost/devnights-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'devnights'
    },
    port: 3000,
    db: 'mongodb://localhost/devnights-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'devnights'
    },
    port: 3000,
    db: 'mongodb://localhost/devnights-production'
  }
};

module.exports = config[env];
