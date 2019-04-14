module.exports = {
  siteMetadata: {
    title: `Krashna Musika`,
    siteUrl: `https://www.krashna.nl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/public/intl`,
        languages: [`en`, `nl`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
};
