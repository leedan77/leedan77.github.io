const path = require('path');
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
  module: {
  	preLoaders: [
  		{
  			test: /\.jsx/,
  			loader: 'eslint',
  			exclude: /node_modules/
  		}
  	],
  	loaders: [
  		{
  			test: /\.jsx$/,
  			// see https://github.com/babel/babel-loader cacheDirectory
  			loader: 'babel?cacheDirectory',
  			exclude: /node_modules/
  		},
  		{
  			test: /\.css$/,
  			loaders: ['style', 'css'],
  			exclude: /node_modules/
  		}
  	]
  }
};
