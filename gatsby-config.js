const path = require('path');

module.exports = {
  pathPrefix: '/hello-world',
  siteMetadata: {
    title: 'Marjo Forcado',
    description: 'Online Portfolio',
    author: '@marjoforcado',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@templates': path.resolve(__dirname, 'src/templates'),
          '@shared': path.resolve(__dirname, 'src/shared'),
          '@themes': path.resolve(__dirname, 'src/themes'),
          '@images': path.resolve(__dirname, 'src/images'),
        },
        extensions: [
          'js',
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
