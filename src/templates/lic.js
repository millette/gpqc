// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

export default (props) => {
  const licenses = Array.from(new Set(
    props.data.allUserCountsJson.edges.map(({ node: { license } }) => license)
  ))

  return (
    <div>
      <Link to='/'>Home</Link>
      <ul>
        {licenses.map((license) => (
          <li><Link to={`/by/lic/${(license || 'unspecified').toLowerCase()}`}>{license || 'unspecified'}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
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
`
