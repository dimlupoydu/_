var webpack = require('webpack');



module.exports = {
	entry: {
		scripts: "./app/dev/scripts/scripts.js"
	},
	output: {
		path: __dirname + "/app/assets/scripts",
		filename: "[name]-bundled.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}