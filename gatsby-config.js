'use strict'

// self
const { name } = require('./package.json')

const cwd = process.cwd()

module.exports = {
  pathPrefix: `/${name}`,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${cwd}/data/`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
        name: 'Québec Projects (GitHub) - RoLLodeQc',
        short_name: 'Québec GitHub Projects',
        lang: 'en',
        start_url: `/${name}`,
        background_color: 'white',
        theme_color: 'black',
        display: 'fullscreen'
      }
    },
    'gatsby-plugin-offline'
  ]
}
