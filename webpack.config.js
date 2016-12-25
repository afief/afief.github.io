const webpack = require('webpack');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname,
		filename: 'app.js',
	},
	module: {
		loaders: [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.css$/,
			loader: "style!css"
		},
		{
			test: /\.(sass|scss)$/,
			loaders: ['style', 'css', 'sass']
		},
		{
			test: /\.(jpg|png)$/,
			loader: 'file-loader?name=assets/[name].[ext]'
		}
		]
	},
	resolve: {
		alias: {
			bulma: __dirname  + '/node_modules/bulma/bulma.sass'
		}
	},
	plugins: [
	/*new webpack.DefinePlugin({
		'process.env':{
			'NODE_ENV': JSON.stringify('production')
		}
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress:{
			warnings: true
		}
	})*/
	]
}