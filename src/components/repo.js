// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import { GHLink } from '.'

const style = {
  border: 'thin solid blue',
  margin: '1rem',
  padding: '1rem'
}

export default ({ by, node }) => {
  const ds = []
  let r
  let title
  let subtitle
  for (r in node) {
    if (r === 'nameWithOwner') {
      ;[subtitle, title] = node.nameWithOwner.split('/')
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
    } else if (node[r]) {
      ds.push(
        <li key={r}>
          <b>{r}</b>: {node[r]}
        </li>
      )
    }
  }
  return (
    <div style={style}>
      <GHLink to={node.nameWithOwner}>
        <h2 style={{ textOverflow: 'ellipsis' }}>{title}</h2>
      </GHLink>
      <h3 style={{ textOverflow: 'ellipsis' }}>
        <small>by</small> <GHLink to={subtitle}>{subtitle}</GHLink>
      </h3>
      <ul>{ds}</ul>
    </div>
  )
}
