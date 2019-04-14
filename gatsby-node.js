/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require("fs-extra");
const yaml = require("js-yaml");
const flatten = require('flat')

const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onPreBootstrap = () => {
  console.log("Copying locales");

  const nlTranslation = loadTranslationObject("nl");
  const enTranslation = loadTranslationObject("en");

  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/intl")) || fs.mkdirSync(path.join(__dirname, "/public/intl"));

  // Save bundled translation files
  fs.writeFileSync(path.join(__dirname, "/public/intl/nl.json"), JSON.stringify(flatten(nlTranslation)));
  fs.writeFileSync(path.join(__dirname, "/public/intl/en.json"), JSON.stringify(flatten(enTranslation)));

  // Copy redirects
  fs.copySync(
    path.join(__dirname, "/_redirects"),
    path.join(__dirname, "/public/_redirects")
  );
};


exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allConcertsYaml {
          edges {
            node {
              id
              type
              date
              time
              location
              locationLink
              tickets
              freeEntrance
              facebookEvent
            }
          }
        }
      }
    `).then(result => {
      result.data.allConcertsYaml.edges.forEach(({node}) => {
        createPage({
          path: `/concerts/${node.id}/`,
          component: path.resolve(`./src/templates/concertPageTemplate.js`),
          context: {
            concert: node
          },
        })
      })
    }).then((newsResolve, newsReject) => {
      graphql(`
      {
        allNewsYaml {
          edges {
            node {
              id
              date
              author
            }
          }
        }
      }
    `).then(result => {
        result.data.allNewsYaml.edges.forEach(({node}) => {
          createPage({
            path: `/news/${node.id}/`,
            component: path.resolve(`./src/templates/newsPageTemplate.js`),
            context: {
              news: node
            },
          })
        })
        resolve()
      })
    })
  })
};


function loadTranslationObject(languageCode) {
  const srcPath = path.join(__dirname, `/src/locales/${languageCode}/`);
  const translationObjects = fs.readdirSync(srcPath).map(file => (
    yaml.load(fs.readFileSync(path.join(srcPath, file)), {encoding: "utf-8"})
  ));
  return Object.assign({}, ...translationObjects)
}
