'use strict'

// core
const path = require(`path`)

// npm
const { createFilePath } = require(`gatsby-source-filesystem`)

/*
exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
  // console.log('onCreatePage page.path:', page.path)
  // const { createPage, deletePage } = actions
  console.log('PAGE-PATH-1:', page.path)
  // FIXME: 404 language bug?
  if (page.path.includes('404')) {
    return // Promise.resolve()
  }
  console.log('PAGE-PATH-2:', page.path)
}
*/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result2 = await graphql(`
    {
      allUserCountsJson(
        filter: {
          forkCount: { gt: 3 }
          stargazersCount: { gt: 3 }
        }
      ) {
        edges {
          node {
            primaryLanguage
          }
        }
      }
    }
  `)

  createPage({
    path: `/by/lng/`,
    component: path.resolve(`./src/templates/lng.js`)
  })

  Array.from(new Set(
    result2.data.allUserCountsJson.edges.map(({ node: { primaryLanguage } }) => primaryLanguage)
  )).forEach((primaryLanguage) => {
    createPage({
      path: `/by/lng/${(primaryLanguage || 'unspecified').toLowerCase()}`,
      component: path.resolve(`./src/templates/by.js`),
      context: {
        order: 'starsProrata',
        primaryLanguage
      }
    })
  })

  const result = await graphql(`
    {
      allUserCountsJson(
        filter: {
          forkCount: { gt: 3 }
          stargazersCount: { gt: 3 }
        }
      ) {
        edges {
          node {
            license
          }
        }
      }
    }
  `)
    createPage({
      path: `/by/lic/`,
      component: path.resolve(`./src/templates/lic.js`)
    })

    Array.from(new Set(
      result.data.allUserCountsJson.edges.map(({ node: { license } }) => license)
    )).forEach((license) => {
      createPage({
        path: `/by/lic/${(license || 'unspecified').toLowerCase()}`,
        component: path.resolve(`./src/templates/by.js`),
        context: {
          order: 'starsProrata',
          license
        }
      })
    })
}
