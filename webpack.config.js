var webpack = require('webpack');
module.exports = {
  context: './scripts',
  entry: {
    main: "./main.js"
  },
  output: {
      path: './scripts/',
      filename: "main.min.js"
  },
module: {  
    loaders: [
        // ...
        { test: require.resolve("./scripts/libs/jquery"), loader: 'expose?$!expose?jQuery' }
    ]
}
};