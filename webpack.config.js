const path = require("path")

module.exports = {
	mode: "production",
  entry: "./_js/main.js",
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "bundle.js",
		library: {
			name: 'main',
			type: 'umd'
		}
  },
  
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["babel-preset-env"],
					}
				}
			}
		]
	}
}