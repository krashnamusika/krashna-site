<h1 align="center">
  <img src="https://raw.githubusercontent.com/krashnamusika/krashna-site/master/src/layouts/favicon.png" width="100" alt="Krashna Musika">
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

To run a development server (with live-reloading), run:

```bash
gatsby develop
```

There should now be a server listening on [localhost:8000](http://localhost:8000)!

### Production

To build a production bundle, run:

```bash
gatsby build
```

Changes to the `master` branch are automatically deployed to the live site (at [krashna.nl](https://www.krashna.nl/)), through the [Netlify](https://netlify.com) build service.
