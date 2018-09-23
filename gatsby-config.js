'use strict'

const cwd = process.cwd()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${cwd}/data/`
      }
    },
    'gatsby-transformer-json',
  ]
}
