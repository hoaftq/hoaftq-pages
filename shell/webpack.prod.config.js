const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    'game-tic-tac-toe-remote': 'https://d1inoj2be6r1et.cloudfront.net/remoteEntry.js',
    'game-2048-remote': 'https://d25teof8rvvecp.cloudfront.net/remoteEntry.js',
    'dev-utilities-remote': 'https://main.d1em6wwe1pod5v.amplifyapp.com/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
