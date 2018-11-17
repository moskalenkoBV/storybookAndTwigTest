const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const NodeSassGlobImporter = require('node-sass-glob-importer');

const autoprefixerObject = new autoprefixer({
  'browsers': [
    '>2%',
    'last 2 versions',
    'not ie < 11'
  ],
  flexbox: 'no-2009'
});

const ExtractTextWebpackPluginObject = new ExtractTextWebpackPlugin('build/css/main.css');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias['@components'] = path.resolve(__dirname, '../src/components/');
  storybookBaseConfig.resolve.alias['@root'] = path.resolve(__dirname, '../');
  storybookBaseConfig.resolve.alias['@src'] = path.resolve(__dirname, '../src/');

  storybookBaseConfig.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader'
  });

  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ExtractTextWebpackPlugin.extract([
      {
        loader: "css-loader"
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [
            autoprefixerObject
          ]
        }
      },
      {
        loader: "sass-loader",
        options: {
          importer: NodeSassGlobImporter()
        }
    }])
  });

  storybookBaseConfig.plugins.push(ExtractTextWebpackPluginObject)

  return storybookBaseConfig;
};