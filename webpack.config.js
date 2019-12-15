const path = require("path");

module.exports = {
	entry: path.join(path.join(__dirname, "src"), 'VideoResponsive.js'),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "quill-video-repsonsive.min.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, "src"),
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: [["@babel/plugin-proposal-class-properties"]],
						}
					}
				]
			}
		]
	}
};
