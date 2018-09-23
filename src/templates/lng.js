// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

export default (props) => {
  const languages = Array.from(new Set(
    props.data.allUserCountsJson.edges.map(({ node: { primaryLanguage } }) => primaryLanguage)
  ))

  return (
    <div>
      <Link to='/'>Home</Link>
      <ul>
        {languages.map((primaryLanguage) => (
          <li><Link to={`/by/lng/${(primaryLanguage || 'unspecified').toLowerCase()}`}>{primaryLanguage || 'unspecified'}</Link></li>
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
          primaryLanguage
        }
      }
    }
  }
`
