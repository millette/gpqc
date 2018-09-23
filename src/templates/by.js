// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

// self
import { Repo } from '../components/'

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)'
}

export default ({
  location: { pathname },
  pageContext: { order },
  data: { allUserCountsJson }
}) => {
  const otherStr = order === 'starsProrata' ? 'by contribs' : 'by stars'

  const p = pathname.split('/').slice(-4)
  p[1] = order === 'starsProrata' ? 'by2' : 'by'
  const other = p.join('/')
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/by/lic/'>Licenses</Link> |{' '}
      <Link to='/by/lng/'>Languages</Link> | <Link to={other}>{otherStr}</Link>
      <br />
      totalCount: {allUserCountsJson.totalCount}
      <br />
      <div style={style}>
        {allUserCountsJson.edges.map(({ node }, i) => (
          <Repo
            key={i}
            by={order === 'starsProrata' ? 'by' : 'by2'}
            node={node}
          />
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query(
    $primaryLanguage: String
    $license: String
    $order: UserCountsJsonConnectionSortByFieldsEnum!
  ) {
    allUserCountsJson(
      limit: 48
      sort: { fields: [$order], order: DESC }
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
