/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require("fs-extra");
const webpack = require("webpack")

exports.onPostBootstrap = () => {
  console.log("Copying locales");
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  );
};

exports.modifyWebpackConfig = ({ config }) =>
  config.plugin(`jquery`, webpack.ProvidePlugin, [
    {
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }
  ])
