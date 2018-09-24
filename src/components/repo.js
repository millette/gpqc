// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import { GHLink } from '.'

const style = {
  // border: 'thin solid blue',
  margin: '0.25rem',
  padding: '0.25rem'
}

export default ({ by, node }) => {
  const ds = []
  let r
  let title
  let subtitle
  let description

  for (r in node) {
    if (r === 'nameWithOwner') {
      ;[subtitle, title] = node.nameWithOwner.split('/')
      title = title.replace(/[-_.]/g, ' ')
    } else if (r === 'primaryLanguage') {
      ds.push(
        <li key='primaryLanguage'>
          <b>{r}</b>:{' '}
          <Link
            to={`/${by}/lng/${(node.primaryLanguage || 'unspecified')
              .toLowerCase()
              .replace('#', '-sharp')}/`}
          >
            {node.primaryLanguage || 'unspecified'}
          </Link>
        </li>
      )
    } else if (r === 'license') {
      ds.push(
        <li key='license'>
          <b>{r}</b>:{' '}
          <Link
            to={`/${by}/lic/${(node.license || 'unspecified')
              .toLowerCase()
              .replace('#', '-sharp')}/`}
          >
            {node.license || 'unspecified'}
          </Link>
        </li>
      )
    } else if (r === 'description') {
      description = node.description
    } else if (node[r]) {
      ds.push(
        <li key={r}>
          <b>{r}</b>:{' '}
          {r.indexOf('Prorata') === -1
            ? node[r]
            : `${Math.round(1000 * node[r]) / 10}%`}
        </li>
      )
    }
  }
  return (
    <div style={style}>
      <h2>
        <GHLink to={node.nameWithOwner}>{title}</GHLink>
      </h2>
      <h3>
        <small>by</small> <GHLink to={subtitle}>{subtitle}</GHLink>
      </h3>
      {description && <blockquote>{description}</blockquote>}
      <ul>{ds}</ul>
    </div>
  )
}
