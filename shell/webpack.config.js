const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    'game-tic-tac-toe-remote': 'http://localhost:8082/remoteEntry.js',
    'game-2048-remote': 'http://localhost:8083/remoteEntry.js',
    'dev-utilities-remote': 'http://localhost:3000/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
