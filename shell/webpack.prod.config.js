const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    'game-tic-tac-toe-remote': 'http://simpletictactoe.s3-website-ap-southeast-1.amazonaws.com/remoteEntry.js',
    'game-2048-remote': 'https://d25teof8rvvecp.cloudfront.net/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
