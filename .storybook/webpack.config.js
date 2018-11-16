const path = require("path");

module.exports = {
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../components/'),
			'@root': path.resolve(__dirname, '../')
		}
	},
  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: "twig-loader"
      }
    ]
  }
};