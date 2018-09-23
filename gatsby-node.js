'use strict'

// core
const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  createPage({
    path: '/by/lng/',
    component: path.resolve('./src/templates/lng.js')
  })

  const result = await graphql(`
    {
      allUserCountsJson(
        filter: { forkCount: { gt: 3 }, stargazersCount: { gt: 3 } }
      ) {
        edges {
          node {
            primaryLanguage
          }
        }
      }
    }
  `)

  Array.from(
    new Set(
      result.data.allUserCountsJson.edges.map(
        ({ node: { primaryLanguage } }) => primaryLanguage
      )
    )
  ).forEach(primaryLanguage => {
    createPage({
      path: `/by/lng/${(primaryLanguage || 'unspecified')
        .toLowerCase()
        .replace('#', '-sharp')}/`,
      component: path.resolve('./src/templates/by.js'),
      context: {
        order: 'starsProrata',
        primaryLanguage
      }
    })
  })

  Array.from(
    new Set(
      result.data.allUserCountsJson.edges.map(
        ({ node: { primaryLanguage } }) => primaryLanguage
      )
    )
  ).forEach(primaryLanguage => {
    createPage({
      path: `/by2/lng/${(primaryLanguage || 'unspecified')
        .toLowerCase()
        .replace('#', '-sharp')}/`,
      component: path.resolve('./src/templates/by.js'),
      context: {
        order: 'contribsProrata',
        primaryLanguage
      }
    })
  })

  createPage({
    path: '/by/lic/',
    component: path.resolve('./src/templates/lic.js')
  })

  const resultB = await graphql(`
    {
      allUserCountsJson(
        filter: { forkCount: { gt: 3 }, stargazersCount: { gt: 3 } }
      ) {
        edges {
          node {
            license
          }
        }
      }
    }
  `)

  Array.from(
    new Set(
      resultB.data.allUserCountsJson.edges.map(
        ({ node: { license } }) => license
      )
    )
  ).forEach(license => {
    createPage({
      path: `/by/lic/${(license || 'unspecified')
        .toLowerCase()
        .replace('#', '-sharp')}/`,
      component: path.resolve('./src/templates/by.js'),
      context: {
        order: 'starsProrata',
        license
      }
    })
  })

  Array.from(
    new Set(
      resultB.data.allUserCountsJson.edges.map(
        ({ node: { license } }) => license
      )
    )
  ).forEach(license => {
    createPage({
      path: `/by2/lic/${(license || 'unspecified')
        .toLowerCase()
        .replace('#', '-sharp')}/`,
      component: path.resolve('./src/templates/by.js'),
      context: {
        order: 'contribsProrata',
        license
      }
    })
  })
}
