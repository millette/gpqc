// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data: { allUserCountsJson } }) => (
  <div>
    <Link to='/'>Home</Link>
    <ul>
      {Array.from(
        new Set(
          allUserCountsJson.edges.map(
            ({ node: { primaryLanguage } }) => primaryLanguage
          )
        )
      ).map(primaryLanguage => (
        <li>
          <Link
            to={`/by/lng/${(primaryLanguage || 'unspecified')
              .toLowerCase()
              .replace('#', '-sharp')}/`}
          >
            {primaryLanguage || 'unspecified'}
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
          primaryLanguage
        }
      }
    }
  }
`
