// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

// self
import { Rollo, Source } from '../components'

export default ({ data: { allUserCountsJson } }) => (
  <div>
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Source />
      <Rollo />
    </div>
    <ul>
      {Array.from(
        new Set(allUserCountsJson.edges.map(({ node: { license } }) => license))
      ).map(license => (
        <li key={license}>
          <Link
            to={`/by/lic/${(license || 'unspecified')
              .toLowerCase()
              .replace('#', '-sharp')}/`}
          >
            by stars {license || 'unspecified'}
          </Link>{' '}
          or{' '}
          <Link
            to={`/by2/lic/${(license || 'unspecified')
              .toLowerCase()
              .replace('#', '-sharp')}/`}
          >
            by contribs {license || 'unspecified'}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query {
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
`
