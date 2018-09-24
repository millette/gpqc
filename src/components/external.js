// npm
import React from 'react'

const title = 'external link in new window'
export default ({ to, children, img }) => (
  <a title={title} target='_blank' rel='noopener noreferrer' href={to}>
    {children}{' '}
    {!img && (
      <small>
        <sup>
          <span role='img' aria-label={title}>
            🔗 ❐
          </span>
        </sup>
      </small>
    )}
  </a>
)
