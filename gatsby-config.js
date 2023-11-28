/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Price',],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
  ],
  // siteMetadata: {
  //   title: 'Codigo Facilito Store',
  //   siteUrl: 'https://codigofacilito.com',
  //   description: 'Compra y adquiere desde codigo facilito',
  // },
  siteMetadata: {
    title: `Codigo Facilito Store`,
    description: `Compra y adquiere desde codigo facilito`,
    siteUrl: `https://codigofacilito.com`,
  },
}
