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
    'gatsby-transformer-json'
  ]
}
