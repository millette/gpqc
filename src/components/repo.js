// npm
import React from 'react'
import { Link } from 'gatsby'

const style = {
  border: 'thin solid blue',
  margin: '1rem',
  padding: '1rem'
}

export default ({ node }) => {
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
            to={`/by/lng/${(
              node.primaryLanguage || 'unspecified'
            ).toLowerCase()}`}
          >
            {node.primaryLanguage || 'unspecified'}
          </Link>
        </li>
      )
    } else if (r === 'license') {
      ds.push(
        <li key='license'>
          <b>{r}</b>:{' '}
          <Link to={`/by/lic/${(node.license || 'unspecified').toLowerCase()}`}>
            {node.license || 'unspecified'}
          </Link>
        </li>
      )
    } else {
      ds.push(
        <li key={r}>
          <b>{r}</b>: {node[r]}
        </li>
      )
    }
  }
  return (
    <div style={style}>
      <h2 style={{ textOverflow: 'ellipsis' }}>{title}</h2>
      <h3 style={{ textOverflow: 'ellipsis' }}>
        <small>by</small> {subtitle}
      </h3>
      <ul>{ds}</ul>
    </div>
  )
}
