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

let scssOptionsProd = [
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
}];

let scssOptionsDev = [
  {
    loader: "style-loader"
  },
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
}];

const ExtractTextWebpackPluginObject = new ExtractTextWebpackPlugin('build/css/main.css');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias['@components'] = path.resolve(__dirname, '../src/components/');
  storybookBaseConfig.resolve.alias['@root'] = path.resolve(__dirname, '../');
  storybookBaseConfig.resolve.alias['@src'] = path.resolve(__dirname, '../src/');

  storybookBaseConfig.entry.behaviors = path.resolve(__dirname, '../src/assets/scripts/behaviors.js');

  storybookBaseConfig.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader'
  });

  if(process.env.NODE_ENV !== 'development') {
    storybookBaseConfig.module.rules.push({
      test: /\.scss$/,
      loaders: ExtractTextWebpackPlugin.extract(scssOptionsProd)
    });
  }
  else {
    storybookBaseConfig.module.rules.push({
      test: /\.scss$/,
      loaders: scssOptionsDev
    });
  }

  storybookBaseConfig.plugins.push(ExtractTextWebpackPluginObject)

  return storybookBaseConfig;
};