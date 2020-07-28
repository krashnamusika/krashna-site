<h1 align="center">
  <img src="https://raw.githubusercontent.com/krashnamusika/krashna-site/master/src/favicon.png" width="100" alt="Krashna Musika">
  <br>
  Krashna Musika Website
</h1>
<p align="center">
  Static site generator for the site of Delft's student music association <a href="https://www.krashna.nl/">Krashna Musika</a>, built with React and Gatsby.js.
</p>

<p align="center">
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" width="80"/>
  </a>
</p>


## Installation

To get started, you'll need the [Node.js environment](https://nodejs.org) and the [Yarn package manager](https://yarnpkg.com). Once you have those installed, run the following commands from the root directory of this repo:

```bash
yarn
yarn global add gatsby-cli
```


## Running

### Development

To start a development server (with live-reloading), run:

```bash
yarn develop
```

There will now be a server listening on [localhost:8000](http://localhost:8000)!

### Production

To build a production bundle, run:

```bash
yarn build
```

Changes to the `master` branch are automatically deployed to the live site (at [krashna.nl](https://www.krashna.nl/)), through the [Netlify](https://netlify.com) build service.


## Documentation

### Overall Structure

In general, this project follows the common [Gatsby.js](https://www.gatsbyjs.org/docs/) folder structure:

- Pages are defined in `/src/pages`. The file name of each JS file (excluding the `.js` extension) is used as the URL of the corresponding page.
- Page templates (boilerplate structures for how different types of pages should look) are located in `/src/templates`.
- Components which these pages and templates use are contained in the `/src/components` folder.

However, there are some ways in which it differs, to offer internationalization and other features:

- All translations are contained in the [YAML](http://yaml.org/) files of the `/src/locales` folder. Each sub-folder contains a copy of each translation definition file, in a specific language. These translation files are compiled down to JSON, which is served alongside the rest of the content and dynamically inserted into the page at runtime. We use the `react-intl` library, integrated by `gatsby-plugin-intl`, for translation.
- All data on which page generation is based, such as the list of concerts, is contained in `/src/data`.

### Adding Content

Adding content can be done easily by adding text or some other data to predefined files, some examples are given below. All content is written in Markdown. If you are not familiar with Markdown, or need some help, check out [this handy link](https://www.markdownguide.org/basic-syntax/)

#### Adding a Page

To add a page...

1. Add a JS file in `/src/pages` with as name the URL you want to put that page on. When in doubt on how to structure this file, have a look at the other existing pages in that folder.
2. Add the needed translations for any translation keys you use, in `/src/locales`. Refer to existing pages and translations for examples of how one can access such a translation key in the page file and how this can be defined in the translation file.

#### Adding a Concert

To add a concert...

1. Add an entry to the `/src/data/concerts.yaml` list following the same format as the other entries.
2. Add language-dependent texts to the `concerts.yaml` files in the `/src/locales` folder, in both languages.

#### Adding a News Post

To add a news post...

1. Add an entry to the `/src/data/news.yaml` list following the same format as the other entries.
2. Add language-dependent texts to the `news.yaml` files in the `/src/locales` folder, in both languages.
