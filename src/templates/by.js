// npm
import React from 'react'
import { graphql, Link } from 'gatsby'

// self
import { Rollo, Repo, Source, Graph, Head } from '../components/'

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)'
}

export default ({
  location: { pathname },
  pageContext: { order, primaryLanguage, license },
  data: { allUserCountsJson, whole }
}) => {
  const title = primaryLanguage === undefined ? 'primaryLanguage' : 'license'
  const otherStr = order === 'starsProrata' ? 'by contribs' : 'by stars'

  const pageInfo = {
    mode: primaryLanguage === undefined ? 'License' : 'Primary Language',
    by: order === 'starsProrata' ? 'Stars' : 'Contribs',
    what:
      (primaryLanguage === undefined ? license : primaryLanguage) ||
      'unspecified'
  }

  const p0 = pathname.split('/')
  const p = p0.slice(-4)
  p[0] = order === 'starsProrata' ? '/by2' : '/by'
  const other = p.join('/')

  return (
    <div>
      <Head
        subtitle={`${pageInfo.what} (${pageInfo.mode}) - Ordered by ${
          pageInfo.by
        }`}
      />
      <div>
        <Link to='/'>Home</Link> | <Link to='/by/lic/'>Licenses</Link> |{' '}
        <Link to='/by/lng/'>Languages</Link> |{' '}
        <Link to={other}>{otherStr}</Link>
        <br />
        <Source />
        <Rollo />
      </div>
      <div>
        <h1>
          {pageInfo.what} <small>({pageInfo.mode})</small>
        </h1>
        <h2>Ordered by {pageInfo.by}</h2>
        <p>
          Found {allUserCountsJson.totalCount}
          {allUserCountsJson.totalCount > 48 && <>{'; showing 48'}</>}
        </p>
      </div>
      <div style={style}>
        <Graph
          title={title}
          whole={whole.edges.map(({ node }) => node[title] || 'unspecified')}
        />
        {allUserCountsJson.edges.map(({ node }, i) => (
          <Repo
            key={node.nameWithOwner}
            by={order === 'starsProrata' ? 'by' : 'by2'}
            node={{ ...node, rank: `#${i + 1}` }}
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

    whole: allUserCountsJson(
      filter: {
        primaryLanguage: { eq: $primaryLanguage }
        license: { eq: $license }
      }
    ) {
      edges {
        node {
          primaryLanguage
          license
        }
      }
    }
  }
`
