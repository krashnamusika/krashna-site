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

  const nlTranslation = loadTranslationObject("nl-NL");
  const enTranslation = loadTranslationObject("en-GB");

  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/locales")) || fs.mkdirSync(path.join(__dirname, "/public/locales"));
  fs.existsSync(path.join(__dirname, "/public/locales/nl-NL")) ||
  fs.mkdirSync(path.join(__dirname, "/public/locales/nl-NL"));
  fs.existsSync(path.join(__dirname, "/public/locales/en-GB")) ||
  fs.mkdirSync(path.join(__dirname, "/public/locales/en-GB"));

  // Save bundled translation files
  fs.writeFileSync(path.join(__dirname, "/public/locales/nl-NL/translations.json"), JSON.stringify(nlTranslation));
  fs.writeFileSync(path.join(__dirname, "/public/locales/en-GB/translations.json"), JSON.stringify(enTranslation));

  // Create fallbacks for country-specific codes
  fs.copySync(
    path.join(__dirname, "/public/locales/en-GB"),
    path.join(__dirname, "/public/locales/en")
  );
  fs.copySync(
    path.join(__dirname, "/public/locales/nl-NL"),
    path.join(__dirname, "/public/locales/nl")
  );
};


function loadTranslationObject(languageCode) {
  const srcPath = path.join(__dirname, `/src/locales/${languageCode}/`);
  const translationObjects = fs.readdirSync(srcPath).map(file => (
    yaml.load(fs.readFileSync(path.join(srcPath, file)), {encoding: "utf-8"})
  ));
  return Object.assign({}, ...translationObjects)
}
