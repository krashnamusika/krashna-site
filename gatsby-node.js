/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require("fs-extra");
const yaml = require("js-yaml");

exports.onPostBootstrap = () => {
  console.log("Copying locales");
  const nlTranslation = yaml.load(fs.readFileSync(path.join(__dirname, "/src/locales/nl-NL/translations.yaml"), {encoding: 'utf-8'}));
  const enTranslation = yaml.load(fs.readFileSync(path.join(__dirname, "/src/locales/en-GB/translations.yaml"), {encoding: 'utf-8'}));
  fs.existsSync(path.join(__dirname, "/public/locales")) || fs.mkdirSync(path.join(__dirname, "/public/locales"));
  fs.existsSync(path.join(__dirname, "/public/locales/nl-NL")) || fs.mkdirSync(path.join(__dirname, "/public/locales/nl-NL"));
  fs.existsSync(path.join(__dirname, "/public/locales/en-GB")) || fs.mkdirSync(path.join(__dirname, "/public/locales/en-GB"));
  fs.writeFileSync(path.join(__dirname, "/public/locales/nl-NL/translations.json"), JSON.stringify(nlTranslation));
  fs.writeFileSync(path.join(__dirname, "/public/locales/en-GB/translations.json"), JSON.stringify(enTranslation));

  // fs.copySync(
  //   path.join(__dirname, "/src/locales"),
  //   path.join(__dirname, "/public/locales")
  // );
  fs.copySync(
    path.join(__dirname, "/public/locales/en-GB"),
    path.join(__dirname, "/public/locales/en")
  );
  fs.copySync(
    path.join(__dirname, "/public/locales/nl-NL"),
    path.join(__dirname, "/public/locales/nl")
  );
};
