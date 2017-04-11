var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + "/src",
	entry: "./main.ts",
	output: {
		path: __dirname + "/dist",
		filename: "stories.bundle.js"
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin({mangle: false})
	],
	target: 'web',
	"resolve": {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		loaders: [
			{ 
				test: /\.tsx?$/, 
				loader: "ts-loader" 
			},
			 {
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			}
		]
	}
};