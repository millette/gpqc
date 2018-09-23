// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

// self
import { Repo } from '../components/'

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)'
}

export default (props) => (
  <div>
    <Link to='/'>Home</Link> | <Link to='/by/lic/'>Licenses</Link> | <Link to='/by/lng/'>Languages</Link><br />
    totalCount: {props.data.allUserCountsJson.totalCount}<br />
    <div style={style}>
      {props.data.allUserCountsJson.edges.map(({ node }, i) => (
        <Repo key={i} node={node} />
      ))}
    </div>
  </div>
)

export const query = graphql`
  query ($primaryLanguage: String, $license: String, $order: UserCountsJsonConnectionSortByFieldsEnum!) {
    allUserCountsJson(
      limit: 48
      sort: {
        fields: [$order]
        order: DESC
      }
      filter: {
        forkCount: { gt: 3 }
        stargazersCount: { gt: 3 }
        primaryLanguage: { eq: $primaryLanguage }
        license: { eq: $license }
      }
    ) {
      totalCount
      edges {
        node {
          nameWithOwner
          forkCount
          primaryLanguage
          license
          description
          detectedLanguage
          stargazersCount
          watchersCount
          rolloCountStars
          rolloCountContribs
          contribsProrata
          starsProrata
        }
      }
    }
  }
`
